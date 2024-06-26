import { connectToDb } from "@/db"
import Product from "@/schemas/productModel"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function DELETE(req:Request) {
    const { productId , path} = await req.json()
    try {
       await connectToDb()
       const product = await Product.findById(productId)
       if(product) {
           await Product.findByIdAndDelete(product._id)
           revalidatePath(path)
           revalidatePath("/all-articles")
           revalidatePath('/productsList')
           revalidatePath('/')
           return NextResponse.json({message: "product has been deleted successfuly"})
         
       }else {
        return NextResponse.json({error: "product not found"})
       }
     
    } catch (error) {
        return NextResponse.json({error: error, status: 500})
    }
 }