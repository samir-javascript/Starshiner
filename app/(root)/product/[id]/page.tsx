import { getProductById } from '@/actions/product.actions';
import { getCurrentUser } from '@/actions/user.actions';

import Details from '@/components/Details';
import Rating from '@/components/Rating';
import Recommendation from '@/components/Recommendation';


import { ReviewProps } from '@/types';
import { auth } from '@clerk/nextjs/server';
import type { Metadata } from 'next';

import Image from 'next/image';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

import { IoChevronForwardSharp } from "react-icons/io5";

interface props {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params }: {params: {id:string}}) {
  const result = await getProductById({productId: params.id})
    return {
      title: `StarshinerS | ${result.name}`,
      description: result.description,
    }
  }
const Page = async({params}:props) => {
  
  const result = await getProductById({productId: params.id})
  if(result == null) return notFound()
    const {userId} = auth()
   const currentUser = await getCurrentUser({clerkId: userId as string})
  return (
    
    <div  className='w-full bg-white  py-4 h-full'>
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
       
        <Details currentUser={JSON.stringify(currentUser)} result={JSON.stringify(result)} />
       
      </div>
      <div className='mt-7'>
         <Recommendation url="/" hasBg={true} items={[]} title='Black Tight Lycra Top with Low Neckline - StarShinerS - In the same collection' />
      </div>
    <Rating image={result?.images[0].url[0] || ""} name={result.name} userId={JSON.stringify(currentUser?._id)} 
     productId={JSON.stringify(result._id)} />

     <div className='max-w-[1200px] max-lg:px-3 mx-auto mt-7 '>
          <div className='flex md:max-w-[700px] w-full flex-col gap-3'>
             <h3 className="text-[#000] font-bold text-[20px]  ">Customers Reviews for this Product</h3>
              <>
                  {result?.reviews.length > 0 ? result?.reviews.map((review:ReviewProps) => (
                      <div className={`border-b border-gray-200 py-3 max-w-[600px] `} key={review?._id}>
                           <div className='flex items-center gap-2'>
                                <Image alt={review?.title} width={32} height={32} 
                                 className='rounded-full object-cover'
                                src={review?.user?.picture || "/icons/profilePlaceholder.png"} />
                                <p className="text-black-1 text-[14px] font-normal ">{review?.name} </p>
                           </div>
                           <div className='flex items-center gap-[2px] my-2'>
                           {[...Array(review?.rating)].map((_, i) => (
                                <div key={i}>
                            <svg  className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                                </div>
                                  
                              ))}
                           </div>
                           <div className='flex flex-col'>
                              <p className="max-w-[500px] text-black-1 text-[15px] font-medium  ">{review?.comment} </p>
                              <p className='mt-1 text-gray-400 text-[14px]  '>{review?.title}. </p>
                           </div>
                      </div>
                  )): (
                     <div>
                         <p className="font-medium mt-2 text-[17px] text-[#000] leading-[1.7] ">this Product has no reviews yet . be the first</p>
                     </div>
                  )}
              </>
          </div>
     </div>
    </div>
    
  );
};

export default Page;
