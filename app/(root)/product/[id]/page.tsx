import { getProductById } from '@/actions/product.actions';
import { getCurrentUser } from '@/actions/user.actions';

import Details from '@/components/Details';
import Recommendation from '@/components/Recommendation';

import { Button } from '@/components/ui/button';
import { recommendedProducts } from '@/constants';
import { auth } from '@clerk/nextjs/server';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import {  FaStar } from 'react-icons/fa';
import { IoChevronForwardSharp } from "react-icons/io5";

interface props {
  params: {
    id: string;
  }
}
const Page = async({params}:props) => {
  const result = await getProductById({productId: params.id})
  if(result == null) return notFound()
    const {userId} = auth()
  const currentUser = await getCurrentUser({clerkId: userId as string})
  return (
    
    <div className='w-full bg-white py-4 h-full'>
      <div className='max-w-[1200px] flex flex-col mx-auto'>
        <div className='flex items-center px-3 mb-3 gap-1'>
          <Link className='text-black-1 text-sm hover:underline font-medium' href="/">
            StarShinerS.com
          </Link>
          <IoChevronForwardSharp />
          <Link className='text-black-1 text-sm hover:underline font-medium' href="/">
            dresses
          </Link>
          <IoChevronForwardSharp />
          <Link className='text-black-1 text-sm hover:underline font-medium' href="/">
            Gowns
          </Link>
        </div>
       
        <Details userId={JSON.stringify(currentUser._id)} result={JSON.stringify(result)} />
       
      </div>
      <div className='mt-7'>
         <Recommendation url="/" hasBg={true} items={recommendedProducts} title='Black Tight Lycra Top with Low Neckline - StarShinerS - In the same collection' />
      </div>
      <div className='max-w-[1200px] w-full mt-7 px-3 mx-auto '>
           <div className='flex w-full flex-col gap-1'>
                 <h2 className='font-bold text-[#000] text-[20px] '>Overall rating of the item</h2>
                 <div className='flex items-center gap-1'>
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <p className='text-gray-500 text-sm font-medium '>5.0 (9 votes)</p>
                </div>
                <div>
                 <div className='flex w-full mt-3 flex-col gap-4'>
                      <Button type="button" className='bg-[#4d4d4d] hover:opacity-[0.8] w-full lg:w-[500px] rounded-[25px] tracking-wider shadow-md text-white uppercase font-bold h-[45px]  '>
                          Add a review
                      </Button>
                      <Button type="button" className='bg-[#f7f7f7] hover:opacity-[0.8]  w-full lg:w-[500px] rounded-[25px] tracking-wider shadow-md text-[#000] uppercase font-bold h-[45px]  '>
                          ask a question
                      </Button>
                 </div>
           </div>
           </div>
           
      </div>
      
    </div>
    
  );
};

export default Page;
