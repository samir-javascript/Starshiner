"use client"
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Button } from './ui/button'
import Image from 'next/image'
import { useAppSelector } from '@/lib/hooks'

const EmptyCart = () => {
  const { cartItems  } = useAppSelector((state:any) => state?.cart)
  
  if(cartItems.length > 0) return null
  return (
    <div className='flex items-center py-7 my-10 bg-white rounded-[20px] shadow-md p-5 w-full lg:max-w-[1000px] mx-auto  justify-center'>
  <div className='flex flex-col gap-3 items-center justify-center text-center'>
        <Image width={90} height={90} 
        className="object-contain"
         src="https://stcnt.starshiners.ro/img/fllrsp/empty-cart.png"
          alt="empty cart" />
          <p className='text-[20px] text-[#000] font-bold '>Your cart is empty.</p>
          <Button className='bg-[#11a545] gap-2 shadow-lg py-4 min-w-[300px] h-[45px] uppercase text-white max-w-[600px] w-full rounded-[15px] flex items-center justify-center ' type="button">
               <FaCheck />
               <p className='font-semibold'>continue shopping</p>
          </Button>
  </div>
</div>
  )
}

export default EmptyCart