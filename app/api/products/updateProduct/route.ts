import { connectToDb } from "@/db";
import Product from "@/schemas/productModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(req:Request) {
    const {path,productId,name, category, description,price,prevPrice,images,position} = await req.json();
   
    try {
       await connectToDb()
       const product = await Product.findById(productId)
       if(!product) {
          throw new Error('Product not found')
       }else {
          product.name = name;
          product.description = description;
          product.images = images;
          product.price = price;
          product.prevPrice = prevPrice;
          product.position = position;
          product.category = category;
         await product.save()
         revalidatePath(path)
         revalidatePath("/all-articles")
         revalidatePath('/')
         return NextResponse.json({message: "product has been updated"})
       }

      
      
        
    } catch (error) {
        return NextResponse.json({error: error, status: 500})
    }
 }