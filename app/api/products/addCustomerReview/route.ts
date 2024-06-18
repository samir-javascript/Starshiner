import { connectToDb } from "@/db";
import Product from "@/schemas/productModel";
import User from "@/schemas/userModel";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { productId, userId , comment, rating , title} = await req.json()
    
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
        const review = {
            name: user.username || user.name,
            comment: comment,
            rating,
            user: user._id,
            title: title
        }
        product.reviews.push(review)
        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((acc:any,item:any)=> acc + item.rating, 0) / product.reviews.length;
        await product.save()
        revalidatePath(`/product/${productId}`)
        return NextResponse.json({message: "product review has been added"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "error adding customer review", status: 500})
    }
}