"use server"
import { connectToDb } from "@/db";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "@/types";
import User from "@/schemas/userModel";
import Shipping from "@/schemas/shippingModel";
import { revalidatePath } from "next/cache";
import { cache } from "@/lib/cache";

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
      // delete his saved posts;
      // delete his comments;
      await User.findByIdAndDelete(user._id)
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
  } catch (error) {
     console.log(error, "error while updating user profile")
  }
}


export const getCurrentUser =  async(params:{clerkId:string})=> {
 
   try {
      await connectToDb()
      const user = await User.findOne({clerkId:"user_2hmcJlC54zpRCPcQXOwgzpcVjtL"})
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
     if(!params.userId) {
        throw new Error('Invalid request!')
     }
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