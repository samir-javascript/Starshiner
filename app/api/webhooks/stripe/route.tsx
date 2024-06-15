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

         if(event.type === "charge.succeeded") {
            const charge = event.data.object; 
            const productId = charge.metadata.productId;
            const email = charge.billing_details.email;
            const orderRef = charge.metadata.orderRef;
            
            //const deliveryShippingAddress = charge.metadata.shippingAddress;
            const pricePaid = charge.amount;
            const product  = await Product.findById(productId)
            if(!product || !email) {
                return NextResponse.json({message: "bad ass request", status: 400})
            } else {
                // create a new order;
                const order = await OrderModel.findOne({orderRef:orderRef})
                if(order) {
                    order.isPaid = true;
                    order.totalAmount = pricePaid;
                    order.paymentStatus = charge.status;
                    order.userEmailIssued = email
                    order.paidAt = Date.now;
                    await order.save()
                }
                // create  a new user if he was not registered before placing order;
                // send email order confirmation
                await resend.emails.send({
                    from : process.env.EMAIL_SENDER as string,
                    to: email,
                    subject: "Order confirmation",
                    react: <ConfirmationEmail />
                })
            }
         }
     } catch (error) {
        console.log(error)
     }
}