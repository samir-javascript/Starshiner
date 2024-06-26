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

export const getArticles =  cache (async(params: {
   page: number
})=> {
   await connectToDb()
   const pageSize = 65;
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
}, ['/', "getArticles", "/all-articles"], {revalidate: 60 * 60 * 24})
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



export const getAllOrders = cache (async()=>  {
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
}, ["getAllOrders", "/ordersList"], {revalidate: 1000 * 60 * 60 * 24})

export const getRecommendedProducts = cache( async()=> {
   try {
      await connectToDb()
      const products = await Product.find({position: "recommended"})
      return products
   } catch (error) {
       console.log(error)
   } 
}, ['getRecommendedProducts', "/"], {revalidate: 1000 * 24 * 24 * 60})
export const getEliticalProducts = cache( async()=> {
   try {
      await connectToDb()
      const products = await Product.find({position: "ecological-leather-articles"})
      return products
   } catch (error) {
       console.log(error)
   } 
}, ['getEliticalProducts', "/"], {revalidate: 1000 * 24 * 24 * 60})
export const getPlusSizeProducts = cache( async()=> {
   try {
      await connectToDb()
      const products = await Product.find({position: "plus size"})
      return products
   } catch (error) {
       console.log(error)
   } 
}, ['getPlusSizeProducts', "/"], {revalidate: 1000 * 24 * 24 * 60})
export const getSuggestionsProducts = async(params:{
   query:string
}) => {
     try {
      if (!params.query || typeof params.query !== 'string') return;
      await connectToDb()

      const regexQuery = { $regex: params.query, $options: "i" };
      const searchQuery = {
        $or: [
          { name: regexQuery },
          { description: regexQuery },
          { category: regexQuery },
        ],
      };
      const products = await Product.find(searchQuery)
      .limit(3)
      return JSON.stringify(products)
     } catch (error) {
       console.log(error, "error getting products by search query for suggestion")
     }
}
export const getSearchQueryProducts = async(params:{
   query:string;
   filter?:string
}) => {
     try {
      if (!params.query || typeof params.query !== 'string') return;
      await connectToDb()

      const regexQuery = { $regex: params.query, $options: "i" };
      const searchQuery = {
        $or: [
          { name: regexQuery },
          { description: regexQuery },
          { category: regexQuery },
        ],
      };
      const products = await Product.find(searchQuery)
      
      return products
     } catch (error) {
       console.log(error, "error getting products by search query for suggestion")
     }
}

export const getProductsByCategory = async(params: {
   filter?:string;
   categoryName:string
})=> {
   if(!params.categoryName) return
   const regexQuery = { $regex: params.categoryName, $options: "i" };
    try {
      await connectToDb()
      const products = await Product.find({category: regexQuery})
      return products;
    } catch (error) {
        console.log(error)
    }
}