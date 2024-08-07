import { connectToDb } from "@/db";
import Wishlist from "@/schemas/wishlistModel";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isValidObjectId } from "mongoose";
import User from "@/schemas/userModel";
// push and splice methods and indexof
export async function POST(req:Request) {
    const { userId, productId } = await req.json()
    if(!isValidObjectId(productId)) {
        throw new Error('Invalid request PRODUCT ID IS NOT VALID!')
    }
    if(!userId)  {
        throw new Error('Invalid request USER ID IS NOT VALID!')
    }
    try {
        await connectToDb()
        const user = await User.findById(userId)
        let existsWishlist = await Wishlist.findOne({user: user._id})
        if(!existsWishlist) {
            existsWishlist = new Wishlist({user: user._id, products: []})
        }
        const productIndex = existsWishlist.products.indexOf(productId)
        if(productIndex !== -1) {
           existsWishlist.products.splice(productIndex,1)
           await User.findByIdAndUpdate(user._id, {
              $pull: {saved: productId}
           })
           await existsWishlist.save()
           revalidatePath("/favourites")
          
           return NextResponse.json({message: "item removed from your wishlist"})

        }else  {
          existsWishlist.products.push(productId)
          await User.findByIdAndUpdate(user._id, {
            $addToSet: {saved: productId}
         })
          await existsWishlist.save()
          revalidatePath("/favourites")
        
          return NextResponse.json({message: "item added to your wishlist"})
        }
       
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Internal server error', status: 500}) 
    }
}