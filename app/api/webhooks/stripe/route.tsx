

import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import Product from "@/schemas/productModel";
import OrderModel from "@/schemas/orderModel";
import { connectToDb } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";
import { Cart } from "@/schemas/cartModel";
import Email from "@/components/Email";
import { revalidatePath } from "next/cache";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string );
const resend = new Resend(process.env.RESEND_API_KEY as string);

export const POST = async (req: NextRequest) => {
  try {
    await connectToDb(); // Ensure the database is connected

    const rawBody = await req.text();
    const signature = req.headers.get("stripe-signature") as string;

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error("Stripe webhook secret is not set in environment variables");
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Error verifying webhook signature:', err);
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }
      //  if() {
      //   const charge = event.data.object;
      //   const referenceId = charge?.metadata?.referenceId
      //   console.log(referenceId, "Received referenceId");
  
      //   const cart = await Cart.findOne({ referenceId: referenceId });
      //   if (!cart) {
      //     console.error('Cart not found for referenceId:', referenceId);
      //     return NextResponse.json({ error: "Cart not found" }, { status: 404 });
      //   }
      //   const order = new OrderModel({
      
      //     orderItems: cart.cartItems.map((x:any) => ({
      //       ...x,
      //       product: x._id,
      //       _id: undefined
      //     })),
      //     deliveryStatus: "ordered",
      //     paymentIntent: null,
      //     paymentStatus: "canceled",
      //     itemsPrice: cart.totalAmount,
      //     totalAmount: cart.totalAmount,
      //     userId: charge?.metadata?.userId,
      //     paymentMethode: "Stripe",
      //     isPaid: false, 
         
      //     shippingAmount: cart.shippingAmount,
      //     shippingAddress: cart.shippingAddress,
         
      //   });
      //   await order.save();
      //   await Cart.findByIdAndDelete(cart._id)
      //   // Update product stock based on cart items
      //   // for (const item of cart.cartItems) {
      //   //   await Product.updateOne({ _id: item._id }, { $inc: { stock: -item.qty } });
      //   // }
  
      //   // Send a confirmation email [we need to verify domain name]
      //   revalidatePath("/active-orders")
      //   revalidatePath("/ordersList")
      //   return NextResponse.json({ message: "Webhook processed successfully" });
      //  }
    if (event.type === "checkout.session.completed") {
      const charge = event.data.object;
      const referenceId = charge?.metadata?.referenceId
      console.log(referenceId, "Received referenceId");

      const cart = await Cart.findOne({ referenceId: referenceId });
      if (!cart) {
        console.error('Cart not found for referenceId:', referenceId);
        return NextResponse.json({ error: "Cart not found" }, { status: 404 });
      }

      console.log('Cart data:', cart);

      // Create an order record in the database
      const order = new OrderModel({
      
        orderItems: cart.cartItems.map((x:any) => ({
          ...x,
          product: x._id,
          _id: undefined
        })),
        deliveryStatus: "ordered",
        paymentIntent: charge.payment_intent,
        paymentStatus: "success",
        itemsPrice: cart.totalAmount,
        totalAmount: cart.totalAmount,
        userId: charge?.metadata?.userId,
        paymentMethode: "Stripe",
        isPaid: true, 
        paidAt: Date.now(),
        shippingAmount: cart.shippingAmount,
        shippingAddress: cart.shippingAddress,
       
      });
      await order.save();
      await Cart.findByIdAndDelete(cart._id)
      // Update product stock based on cart items
      // for (const item of cart.cartItems) {
      //   await Product.updateOne({ _id: item._id }, { $inc: { stock: -item.qty } });
      // }

      // Send a confirmation email [we need to verify domain name]
      revalidatePath("/active-orders")
      revalidatePath("/ordersList")
     const { error } =  await resend.emails.send({
        from: 'soufianehmamou92@gmail.com',
        to: "soufianeowner@gmail.com",
        subject: 'Order Confirmation',
        react: <ConfirmationEmail />
      });
        if(error) {
           return NextResponse.json({error: error, status: 400})
        }
      return NextResponse.json({ message: "Webhook processed successfully" });
    } else {
      console.warn('Unhandled event type:', event.type);
      return NextResponse.json({ error: "Unexpected event type" });
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: `Error: ${error}`, status: 500 });
  }
};

