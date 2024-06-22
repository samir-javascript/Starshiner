

import { getAllOrders, getProducts } from '@/actions/product.actions'
import { getAllUsers } from '@/actions/user.actions'
import OrdersTableList from '@/components/adminComponents/OrdersTableList'
import  ProductsListTable  from '@/components/adminComponents/ProductListTable'
import UsersTableList from '@/components/adminComponents/UsersTableList'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = async({searchParams}: {
  searchParams: {
    page: number;
  }
}) => {
  const result = await getAllOrders()
 
  return (
    <div className='flex flex-col py-5 lg:px-7 px-3 w-full bg-white'>
        <>
             <h2 className='text-[24px] text-[#000] font-bold '>Orders</h2>
            
        </>
        <div className='mt-7 flex items-center gap-2'>
            <p className='text-green-1 font-medium text-base  '> All</p>
            <div className='px-2.5 rounded-[10px] py-[2px] bg-gray-100 flex items-center justify-center  '>
               <p className='text-sm font-normal  '>{result?.length} </p>
            </div>
        </div>
        <OrdersTableList orders={JSON.stringify(result)} />
    </div>
  )
}

export default page