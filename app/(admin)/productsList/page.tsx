

import { ProductsListTable } from '@/components/adminComponents/ProductListTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col py-5 lg:px-7 px-3 w-full bg-white'>
        <div className='flex items-center justify-between'>
             <h2 className='text-[24px] text-[#000] font-bold '>Products</h2>
             <Link href="/create-product">
             <Button  type="button" className='bg-green-1 text-white h-[45px] rounded-[10px] tracking-wider font-bold '>
                  Add new Product
             </Button>
             </Link>
        </div>
        <div className='mt-7 flex items-center gap-2'>
            <p className='text-green-1 font-medium text-base  '> All</p>
            <div className='px-2.5 rounded-[10px] py-[2px] bg-gray-100 flex items-center justify-center  '>
               <p className='text-sm font-normal  '>238</p>
            </div>
        </div>
        <ProductsListTable />
    </div>
  )
}

export default page