
import dynamic from 'next/dynamic';
import React  from 'react'
import { auth } from '@clerk/nextjs/server';
import { getCurrentUser } from '@/actions/user.actions';

const CartComponent = dynamic(() => import("@/components/cart/CartComponent"),  {ssr: false, loading: ()=> <p>Loading...</p> })
const page = async() => {
 
  
  const {userId} = auth()
  const currentUser = await getCurrentUser({clerkId:userId as string})
  return (
    <section  className='h-full bg-[#eaecf0]  w-full '>
   

   <CartComponent currentUser={JSON.stringify(currentUser)} />
    </section>
  )
}

export default page