"use server"
import { connectToDb } from "@/db";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "@/types";
import User from "@/schemas/userModel";
import Shipping from "@/schemas/shippingModel";
import { revalidatePath } from "next/cache";
import { cache } from "@/lib/cache";
import Wishlist from "@/schemas/wishlistModel";
import OrderModel from "@/schemas/orderModel";

export async function createUser (params:CreateUserParams) {
     const { clerkId, name, username, email, picture} = params;
     
    try {
         await connectToDb()
         const user = await User.create({
             clerkId,
             name,
             username,
             email,
             picture
         })
         return user
    } catch (error) {
         console.log(error, "failed to create user")
    }
}
export async function deleteUser(params:DeleteUserParams) {
   const { clerkId } = params;
   try {
      await connectToDb()
      const user = await User.findOne({clerkId:clerkId})
      if(!user) {
         throw new Error('User not found')
      }
      // delete his shipping addresses;
      await Shipping.findOneAndDelete({user: user._id})
      // delete his orders;
      await OrderModel.deleteMany({userId: user._id})
      // delete his saved posts;
      await Wishlist.deleteMany({user:user._id})
      // delete his comments;
      await User.findByIdAndDelete(user._id)
      revalidatePath("/usersList")
   } catch (error) {
      console.log(error, "failed to delete user")
   }
}

export async function updateUser(params:UpdateUserParams) {
   const { clerkId, userData, path} = params;
  try {
     await connectToDb()
     const user = await User.findOne({clerkId:clerkId})
     if(!user) {
      throw new Error('User not found')
     }
     await User.findByIdAndUpdate(user._id, userData)
     revalidatePath(path)
     revalidatePath('/usersList')
  } catch (error) {
     console.log(error, "error while updating user profile")
  }
}


export const getCurrentUser =  async(params:{clerkId:string})=> {
  const  { clerkId } = params;
  if(!clerkId) return;
   try {
      await connectToDb()
      const user = await User.findOne({clerkId})
      if(!user) {
         throw new Error('User not found')
      }
      return user;
   } catch (error) {
      console.log(error, "failed to fetch user")
   }
}

export const getMyShippingAddreses = cache (async(params: {
    userId: string;
})=> {
   try {
     if(!params.userId) return
     await connectToDb()
     const shippings = await Shipping.find({user:params.userId})
     return shippings
   } catch (error) {
      console.log(error, "error while getting your shipping addresses")
   }
}, ["/", "getMyShippingAddreses", "/client/profile"], {revalidate: 1000 * 60 * 60 * 24})

export const getShippingById = async(params: {
   id:string;
}) =>{
 try {
    await connectToDb()
    const shipping = await Shipping.findById(params.id)
    return shipping
 } catch (error) {
   console.log(error, "error fetching shipping by ID")
 }
}


export const getMyWishlistItems = cache( async(params: {
   userId: string
}) => {
     if(!params.userId) return;
   try {
      await connectToDb()
      const wishlistItems = await Wishlist.findOne({user: params.userId})
      .populate("products")
      .exec()
      return wishlistItems
   } catch (error) {
      console.log(error, "error getting wishlist items")
   }
}, [" getMyWishlistItems", "/", "/favourites"], {revalidate: 1000 * 60 * 60 * 24})

export const getMyOrders = cache (async(params: {
   userId:string
})=> {
  try {
     await connectToDb() 
     const ClientOrders = await OrderModel.find({userId:params.userId})
     .populate("userId")
     .populate('orderItems.product')
     .exec()
    return ClientOrders
  } catch (error) {
     console.log(error, "failed to get client orders")
  }
}, ["/active-orders", "/ordersList", "getMyOrders"], {revalidate: 1000 * 60 * 60 * 24}) 

export const getOrderById = async(params:{
   orderId:string
}) => {
   try {
       const order = await OrderModel.findById(params.orderId)
       .populate("userId")
     .populate('orderItems.product')
     .exec()
     if(!order) {
        throw new Error('Order not found')
     }
      return order
   } catch (error) {
      console.log(error, `error getting order by ID: ${params.orderId}`)
   }
}
// with pagination;
export const getAllUsers = cache( async(params: {
   page: number
})=> {
  try {
   const pageSize = 10;
   const { page } = params;
   const skipAmount = pageSize * ( page - 1)
    await connectToDb()
    const users = await User.find({isAdmin: false})
    .limit(pageSize)
    .skip(skipAmount)
    return  {
      users, page, pages: Math.ceil(users.length / pageSize)
    }
   
  } catch (error) {
     console.log(error, "error getting all users")
  }
}, ['getAllUsers', "/usersList"], {revalidate: 1000 * 60 * 60 * 24})

