"use server"
import Product from "@/schemas/productModel";
import { connectToDb } from "@/db";
import { CreateProductParams } from "@/types";
import { revalidatePath } from "next/cache";

export async function createProduct (params:CreateProductParams) {
  const { name, description, price, category, prevPrice, path, position, images, colors} = params;
   try{
      await connectToDb()
      const product = await Product.create({
         name,
         description,
         price,
         position,
         prevPrice,
         category,
         images,
         colors,
      })
      revalidatePath(path)
      return product
   }catch(error) {
      console.log(error)
   }
}