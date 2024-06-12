import Image from 'next/image'
import React from 'react'
import InputSearch from './Input'
import { FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import Link from 'next/link';
const Nav = () => {
  return (
    <nav className="bg-primary-1 px-2 flex max-md:hidden w-full h-[60px] ">
        <div className='w-full max-w-[1200px] mx-auto h-full gap-7 flex items-center justify-between '>
          <Link href="/">
             <Image alt="starshiners"  width={200} height={90} src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" />
          </Link>
           
            <InputSearch />
            <div className='flex items-center gap-4'>
                   <Link href="/client/profile/7878" className='flex items-center gap-1.5'>
                        <FaRegUser  color="white" size={22}/>
                        <p className='text-white font-normal text-sm lg:flex hidden '>My account</p>  
                   </Link>
                   <Link href="/my-favourites_items" className='flex items-center gap-1.5'>
                        <FaRegHeart color="white" size={22} />
                        <p className='text-white font-normal text-sm lg:flex hidden '>Favourites</p>  
                   </Link>
                   <Link href="/cart" className='flex items-center gap-1.5'>
                        <FaShoppingBag color="white" size={22} />
                        <p className='text-white font-normal text-sm lg:flex hidden '>My cart</p>  
                   </Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav