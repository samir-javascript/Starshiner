import User from "@/schemas/userModel";
import crypto from "crypto"
import { NextResponse } from "next/server";
export const PATCH = async(req:Request) => {
    const {email} = await req.json()
    if(!email) {
        throw new Error('Email is required !')
    }
   try {
    const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    const user = await User.findOne({email})
    const response = await fetch(`https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members/${emailHash}`, {
        method: 'PATCH',
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'unsubscribed' }),
      });
    
      if (response.status >= 400) {
      
        return NextResponse.json({error: "There was an error unsubscribing from the newsletter. Please try again later."})
      }
      if(user) {
        user.isSubscribed = false;
        await user.save()
      }
     
      return NextResponse.json({message: "Successfully unsubscribed!"})
     
   } catch (error) {
     console.log(error)
   }
}