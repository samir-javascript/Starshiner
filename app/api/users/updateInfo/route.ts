import { connectToDb } from "../../../../db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import User from "../../../../schemas/userModel";
import {auth} from "@clerk/nextjs/server"

export async function PUT(req:Request) {
    const { userId } = auth()
    const { firstName, lastName, phoneNumber, country, birthDay } = await req.json()
  try {
    await connectToDb()
    const user = await User.findOne({clerkId: "user_2hmcJlC54zpRCPcQXOwgzpcVjtL"})
    if(!user) {
        throw new Error('User not found')
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.country = country;
    user.birthDay = birthDay;
    await user.save()
     revalidatePath(`/client/profile/${userId}`)
    return NextResponse.json({user, message: "user info has been updated"})
  } catch (error) {
     console.log(error, "error while updating user Info")
     return NextResponse.json({error: "error updating user info", status: 500})
  }
}