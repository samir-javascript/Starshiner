import ConfirmationEmail from "@/components/emails/ConfirmationEmail";

import Product from "@/schemas/productModel";
import OrderModel from "@/schemas/orderModel";
import { connectToDb } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { Resend} from "resend"
import Stripe from "stripe"
import { Cart } from "@/schemas/cartModel";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
const resend = new Resend(process.env.RESEND_API_KEY as string)
export const POST = async(req:NextRequest) => {
     try {
        const event = await stripe.webhooks.constructEvent(await req.text(),
         req.headers.get("stripe-signature") as string, 
         process.env.STRIPE_WEBHOOK_SECRET as string)

         if(event.type === "checkout.session.completed") {
            const charge = event.data.object; 
            const referenceId = charge?.metadata?.referenceId;
            console.log(referenceId, "mol chi referenceId")
            const cart = await Cart.findOne({ referenceId });

            if (!cart) {
                console.log(`⚠️  Cart not found for reference ID: ${referenceId}`);
                return NextResponse.json({ error: 'Cart not found.' }, { status: 404 });
            }

            // Process the order using cart data
            // Example: fulfillOrder(cart);
            console.log('Cart data:', cart);
        
         }else {
           
            return NextResponse.json({error: "shit it doesn't work"})
         }
       
     } catch (error) {
        console.log(error)
        return NextResponse.json({error: `${error} error soufiane`, status: 500})
     }
}

