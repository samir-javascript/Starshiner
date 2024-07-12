import { getArticles, getProductsByCategory } from '@/actions/product.actions'
import { getCurrentUser } from '@/actions/user.actions'
import FilterColumn from '@/components/FilterColumn'
import MobileFilter from '@/components/MobileFilter'
import ProductCard from '@/components/ProductCard'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'
import { FaSortAmountDown } from 'react-icons/fa'
import { IoChevronForwardOutline, IoFilter } from 'react-icons/io5'

const page = async({searchParams}: {
   searchParams: {
      page: number,
      color: string[]
   }
}) => {
   const {userId} = auth()
   const currentUser = await getCurrentUser({clerkId: userId as string})
   const result = await getArticles({page: searchParams.page || 1})
console.log(searchParams.color, "search params from server")
  return (
    <div className="w-full bg-white lg:py-7">
        <div className='lg:max-w-[1200px] w-full mx-auto  lg:px-3 flex-col flex'>
              
               <div className='flex  max-lg:px-3 flex-col gap-1 mt-3'>
               <div className='flex items-center gap-1'>
                    <Link className='text-sm font-medium text-black-1 ' href="/">
                       Home
                    </Link>
                    <IoChevronForwardOutline />
                    <Link className='text-sm font-medium text-black-1 ' href="/">
                       Dresses
                    </Link>
                    <IoChevronForwardOutline />
                    <Link className='text-sm font-medium text-black-1 ' href="/">
                       Spring Dresses
                    </Link>
               </div>
               <h2 className='font-bold text-[#000] text-[18px] '>Spring Dresses</h2>
               <p  className='text-gray-500 font-medium text-sm '>Spring Dresses - see 120 items</p>
               </div>
              <div className='flex px-3 mt-7 lg:flex-row flex-col w-full gap-4'>
                  <div>
                     <FilterColumn />
                     <MobileFilter />
                    
                  </div>
                  <div className='flex-1 flex items-center w-full gap-2 flex-wrap lg:justify-start justify-center'>
                         {result?.products?.map((item,i) => (
                             <ProductCard item={JSON.stringify(item)} currentUser={JSON.stringify(currentUser)}  isCategory  key={i} />
                         ) )}
                  </div>
              </div>
        </div> 
    </div>
  )
}

export default page