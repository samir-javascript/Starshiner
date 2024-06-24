import Image from 'next/image'
import React from 'react'
import InputSearch from './Input'
import { FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';
const Nav = () => {
  const {userId} = auth()
  
  return (
    <nav className="bg-primary-1 px-2 flex max-md:hidden w-full h-[60px] ">
        <div className='w-full max-w-[1200px] mx-auto h-full gap-7 flex items-center justify-between '>
          <Link href="/">
             <Image alt="starshiners"  width={200} height={90} src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" />
          </Link>
           
            <InputSearch />
            
        </div>
    </nav>
  )
}

export default Nav