import { connectToDb } from "../../../../db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import Shipping from "../../../../schemas/shippingModel";

export async function PUT(req:Request) {
    const {firstName,lastName,address,city,country,zipCode,phoneNumber,path,shippingId} = await req.json()
   try {
     await connectToDb()
     const shipping = await Shipping.findById(shippingId)
     if(!shipping) {
        throw new Error('Shipping not found')
     }
     shipping.lastName = lastName;
     shipping.firstName = firstName;
     shipping.phoneNumber = phoneNumber;
     shipping.country = country;
     shipping.city = city;
     shipping.address = address;
     shipping.zipCode = zipCode;
     await shipping.save()
     revalidatePath(path)
     return NextResponse.json({shipping, message: "shipping address has been updated"})
   } catch (error) {
      console.log(error)
      return NextResponse.json({error: "failed to update shipping address", status: 500})
   }
}