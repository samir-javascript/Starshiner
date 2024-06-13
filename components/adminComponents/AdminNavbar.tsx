import { LucideChevronsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaShopify, FaUserFriends, FaProductHunt } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa";
const AdminNavbar = () => {
  return (
    <div className='bg-primary-1  h-[60px] w-full '>
         <div className='h-full w-full px-2.5 lg:px-5 flex items-center justify-between'>
              <Link className='flex items-center gap-2.5' href="/">
                   <FaArrowLeft className='max-md:hidden' size={28} color="white" />
                   <Image className='sm:w-[170px] object-cover w-[110px] ' alt="starshiners"  width={100} height={100} src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" />
              </Link>
              <div className='flex items-center gap-3 lg:gap-7'>
                   <Link href="/usersList" className='flex items-center gap-1.5'>
                        <FaUserFriends  color="white" size={22}/>
                        <p className='text-white font-normal text-[15px] lg:flex hidden '>Users List</p>  
                   </Link>
                   <Link href="/ordersList" className='flex items-center gap-1.5'>
                        <FaShopify color="white" size={22} />
                        <p className='text-white font-normal text-[15px] lg:flex hidden '>Orders List</p>  
                   </Link>
                   <Link href="/productsList" className='flex items-center gap-1.5'>
                        <FaProductHunt color="white" size={22} />
                        <p className='text-white font-normal text-[15px] lg:flex hidden '>Products List</p>  
                   </Link>
                    <span className='text-gray-200'>|</span>
                   <div className='lg:ml-6 cursor-pointer flex items-center gap-2'>
                       <img className='rounded-full w-[35px] h-[35px] object-cover ' src="https://www.github.com/shadcn.png" alt="profile" />
                       <p className='text-white text-sm font-bold'>Soufiane Hk</p>
                       

                   </div>
            </div>
         </div>
    </div>
  )
}

export default AdminNavbar