import { connectToDb } from "../../../../db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import User from "../../../../schemas/userModel";
import Shipping from "../../../../schemas/shippingModel";
import { isValidObjectId } from "mongoose";
import {auth} from "@clerk/nextjs/server"
export async function DELETE(req: Request) {
    const { userId:clerkId } = auth()
    const { shippingId, userId ,path} = await req.json();
    try {
       

        await connectToDb();
        if(!isValidObjectId(shippingId))  {
            throw new Error('Invalid Request!')
        }
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const shipping = await Shipping.findById(shippingId)
        await Shipping.findByIdAndDelete(shipping._id)
        await User.findByIdAndUpdate(user._id, {
            $pull: { shippingAddresses : shipping._id}
        })
        revalidatePath(`/client/profile/${clerkId}`)
        revalidatePath(path)
        
        

       

       
        return NextResponse.json({ message: "shipping address has been deleted" });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to delete shipping address" }, { status: 500 });
    }
}
