"use server"
import Product from "@/schemas/productModel";
import { connectToDb } from "@/db";
import { CreateProductParams, UpdateProductParams } from "@/types";
import { revalidatePath } from "next/cache";
import { cache } from "@/lib/cache";
import { notFound } from "next/navigation";
import OrderModel from "@/schemas/orderModel";



export const getProducts =  cache (async(params: {
   page: number
})=> {
   await connectToDb()
   const pageSize = 16;
   const { page } = params;
   const skipAmount = pageSize * (page - 1)
   try {
      const products = await Product.find({})
      .limit(pageSize)
      .skip(skipAmount)
      return {
         products, page, pages: Math.ceil(products.length / pageSize)
        
      }
   } catch (error) {
      console.log(error)
   }
}, ['/', "getProducts"], {revalidate: 60 * 60 * 24})

export async function getProductById(params: {productId:string}) {
   await connectToDb()
       try {
         const product = await Product.findById(params.productId)
         .populate('reviews.user')
         if(!product) return notFound()
         return product
       } catch (error) {
         console.log(error)
       }
}



export const getAllOrders = async()=>  {
   await connectToDb()
   try {
      const orders = await OrderModel.find({})
      .populate('userId')
      .populate("orderItems.product")
      .sort({createdAt: -1})
      .exec()
      return orders
   } catch (error) {
       console.log(error, "error getting all orders")
   }
}