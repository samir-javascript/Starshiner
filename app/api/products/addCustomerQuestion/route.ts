import { connectToDb } from "@/db";
import Product from "@/schemas/productModel";
import User from "@/schemas/userModel";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { productId, userId , question} = await req.json()
    
    try {
        await connectToDb()
        if(!isValidObjectId(productId)) {
            throw new Error('Invalid request!')
        }
        const user = await User.findById(userId)
        if(!user) {
            throw new Error('Invaid request!')
        }
        const product = await Product.findById(productId)
        const QTS = {
            name: user.username || user.name,
            question: question,
           
            user: user._id,
           
        }
        product.questions.push(QTS)
       
        await product.save()
        revalidatePath(`/product/${productId}`)
        return NextResponse.json({message: "product review has been added"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "error adding customer review", status: 500})
    }
}