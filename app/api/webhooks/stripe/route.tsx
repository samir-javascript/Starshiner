// import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
// import Product from "@/schemas/productModel";
// import OrderModel from "@/schemas/orderModel";
// import { connectToDb } from "@/db";
// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import Stripe from "stripe";
// import { Cart } from "@/schemas/cartModel";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
// const resend = new Resend(process.env.RESEND_API_KEY as string);

// export const POST = async (req: NextRequest) => {
//   try {
//     const event = await stripe.webhooks.constructEvent(
//       await req.text(),
//       req.headers.get("stripe-signature") as string,
//       process.env.STRIPE_WEBHOOK_SECRET as string
//     );

//     if (event.type === "checkout.session.completed") {
//       const charge = event.data.object;
//       const referenceId = charge?.metadata?.referenceId;
//       console.log(referenceId, "mol chi referenceId");

//       const cart = await Cart.findOne({ referenceId });
//       console.log('Cart data:', cart);

//       // Perform any further processing with the cart data, e.g., save order, send email

//       // Respond with success status
//       return NextResponse.json({ message: "Webhook processed successfully" });
//     } else {
//       return NextResponse.json({ error: "Unexpected event type" });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: `Error: ${error}`, status: 500 });
//   }
// };

import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import Product from "@/schemas/productModel";
import OrderModel from "@/schemas/orderModel";
import { connectToDb } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";
import { Cart } from "@/schemas/cartModel";
import Email from "@/components/Email";

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

    if (event.type === "checkout.session.completed") {
      const charge = event.data.object;
      const referenceId = "66730ddefb48785b66c9cb81";
      console.log(referenceId, "Received referenceId");

      const cart = await Cart.findOne({ referenceId: "878e73c8-3427-49da-9727-d5d05b6dd218" });
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
        paymentStatus: "success",
        itemsPrice: cart.totalAmount,
        totalAmount: cart.totalAmount,
        userId: "6669b1033dac730f7752fa88",
        paymentMethode: "Stripe",
        isPaid: true, 
        paidAt: Date.now(),
        shippingAmount: cart.shippingAmount,
        shippingAddress: cart.shippingAddress,
       
      });
      await order.save();

      // Update product stock based on cart items
      // for (const item of cart.cartItems) {
      //   await Product.updateOne({ _id: item._id }, { $inc: { stock: -item.qty } });
      // }

      // Send a confirmation email
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

