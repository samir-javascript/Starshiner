import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import OrderModel from "@/schemas/orderModel";
import Product from "@/schemas/productModel";
import { NextRequest, NextResponse } from "next/server";
import { Resend} from "resend"
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
const resend = new Resend(process.env.RESEND_API_KEY as string)
export const POST = async(req:NextRequest) => {
     try {
        const event = await stripe.webhooks.constructEvent(await req.text(),
         req.headers.get("stripe-signature") as string, 
         process.env.STRIPE_WEBHOOK_SECRET as string)

         if(event.type === "checkout.session.completed") {
            const charge = event.data.object; 
           console.log(charge, "hy we did it soufiannnnnnnnnnnnnnne")
           return NextResponse.json({charge, message:"yeeeeeeeeh"})
         }else {
           
            return NextResponse.json({error: "shit it doesn't work"})
         }
       
     } catch (error) {
        console.log(error)
        return NextResponse.json({error: "error soufiane", status: 500})
     }
}