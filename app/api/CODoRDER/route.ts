
import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import Product from "@/schemas/productModel";
import OrderModel from "@/schemas/orderModel";
import { connectToDb } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { revalidatePath } from "next/cache";
import Email from "@/components/Email";
import { auth } from "@clerk/nextjs/server";
import User from "@/schemas/userModel";
const resend = new Resend(process.env.RESEND_API_KEY as string);
export async function POST(req:Request) {
    const { userId } = auth()
    const { cartItems , totalAmount, itemsPrice, shippingAddress, shippingAmount } = await req.json()
    try {
        await connectToDb()
        const currentUser = await User.findOne({clerkId: userId})
        if(!currentUser) {
            throw new Error('Invalid request: User not found')
        }
           await OrderModel.create({
            orderItems: cartItems.map((x:any) => ({
                ...x,
                product: x._id,
                _id: undefined
              })),
              deliveryStatus: "ordered",
            
              paymentStatus: "success",
              itemsPrice: itemsPrice,
              totalAmount: totalAmount,
              userId: currentUser._id,
              paymentMethode: "cash on delivery", 
              paidAt: Date.now(),
              shippingAmount: shippingAmount,
              shippingAddress: shippingAddress,

        })
        revalidatePath("/active-orders")
        revalidatePath("/ordersList")
    //  const {error,data} = await resend.emails.send({
    //     from: "soufianehmamou92@gmail.com",
    //     to: currentUser.email,
    //     subject: "Order confirmation",
    //     react: <ConfirmationEmail /> as an
    //  });
    //  if(error) {
    //     return  NextResponse.json({error: error, "Failed to send order confirmation email"})
    //  }
        return NextResponse.json({message: "Order has been created successfuly"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error})
    }
}