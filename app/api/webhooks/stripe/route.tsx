import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import Product from "@/schemas/productModel";
import OrderModel from "@/schemas/orderModel";
import { connectToDb } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";
import { Cart } from "@/schemas/cartModel";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY as string);

export const POST = async (req: NextRequest) => {
  try {
    const event = await stripe.webhooks.constructEvent(
      await req.text(),
      req.headers.get("stripe-signature") as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    if (event.type === "checkout.session.completed") {
      const charge = event.data.object;
      const referenceId = charge?.metadata?.referenceId;
      console.log(referenceId, "mol chi referenceId");

      const cart = await Cart.findOne({ referenceId });
      console.log('Cart data:', cart);

      // Perform any further processing with the cart data, e.g., save order, send email

      // Respond with success status
      return NextResponse.json({ message: "Webhook processed successfully" });
    } else {
      return NextResponse.json({ error: "Unexpected event type" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `Error: ${error}`, status: 500 });
  }
};

