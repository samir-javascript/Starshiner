import User from "@/schemas/userModel";
import { NextResponse } from "next/server";

export const POST = async(req:Request) =>  {
    const {email} =  await req.json()
    if(!email) {
        throw new Error('Email is required')
    }
    try {
      const user = await User.findOne({email})
       
        const data = {
            email_address: email,
            status: 'subscribed',
          };
          const response = await fetch(`https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`, {
            method: 'POST',
            headers: {
              Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        
          if (response.status >= 400) {
            return NextResponse.json({error: "There was an error subscribing to the newsletter. Please try again later."})
          }
          if(user) {
            user.isSubscribed = true
            await user.save()
          }
          
         return NextResponse.json({message: "Successfully subscribed!"})
        
        
    } catch (error) {
        console.log(error)
    }
}