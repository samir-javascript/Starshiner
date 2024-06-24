"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdMenu } from "react-icons/md";
import { FaSearch, FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";

import { useAuth } from '@clerk/nextjs';
import { useAppSelector } from '@/lib/hooks';
const MobileNav = () => {
    const { userId } = useAuth()
    const { cartItems } = useAppSelector((state:any) => state.cart)
  return (
    <div className='md:hidden flex bg-primary-1 h-[60px] w-full '>
        <div className='flex items-center justify-between w-full px-3 h-full'>
              <div className="flex items-center gap-3">
                  <MdMenu color="white" size={35} />
                  <Link href="/">
                      <Image alt="starshiners"  width={170} height={90} src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" />
                  </Link>
              </div>
              <div className='flex items-center gap-2'>
                  <Link href="">
                      <FaSearch color="white" size={20} />
                  </Link>
                  <Link href={`/client/profile/${userId}`}>
                      <FaRegUser color="white" size={20} />
                  </Link>
                  <Link href="/favourites">
                      <FaRegHeart color="white" size={20} />
                  </Link>
                  <Link href="/cart" className='flex items-center  gap-1.5'>
    <div className='relative'>
      <FaShoppingBag color="white" size={22} />
     {cartItems.length > 0 && <div className="flex items-center justify-center px-[2px] absolute right-[-4px] top-[-5px] rounded-[3px] bg-[#4d4d4d] ">
         <p  className="text-white text-[9px] font-bold  ">{cartItems && cartItems.length}</p>
      </div>} 
    </div>
       
         <p className='text-white font-normal text-sm lg:flex hidden '>My cart</p>  
    </Link>
              </div>
        </div>
    </div>
  )
}

export default MobileNav