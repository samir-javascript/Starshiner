"use server"
import Product from "@/schemas/productModel";
import { connectToDb } from "@/db";
import { CreateProductParams, UpdateProductParams } from "@/types";
import { revalidatePath } from "next/cache";
import { cache } from "@/lib/cache";
import { notFound } from "next/navigation";



export const getProducts =  cache (async()=> {
   await connectToDb()
   try {
      const products = await Product.find({})
      return products;
   } catch (error) {
      console.log(error)
   }
}, ['/', "getProducts"], {revalidate: 60 * 60 * 24})

export async function getProductById(params: {productId:string}) {
   await connectToDb()
       try {
         const product = await Product.findById(params.productId)
         if(!product) return notFound()
         return product
       } catch (error) {
         console.log(error)
       }
}
export async function updateProduct(params:UpdateProductParams) {
   const {path,productId,name, category, description,price,prevPrice,images,position} = params;
  
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
      }
      revalidatePath(path)
      revalidatePath('/')
     
       
   } catch (error) {
       console.log(error, "error while updating product")
   }
}

export async function deleteProduct(params: {
   productId: string,
   path:string
}) {
   try {
      await connectToDb()
      const product = await Product.findById(params.productId)
      if(product) {
          await Product.findByIdAndDelete(product._id)
          revalidatePath(params.path)
          revalidatePath('/')
          return {
            message: "product has been deleted successfuly"
          }
        
      }else {
         throw new Error('Product not found')
      }
    
   } catch (error) {
      console.log(error)
   }
}