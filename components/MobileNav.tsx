import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdMenu } from "react-icons/md";
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { auth } from '@clerk/nextjs/server';
const MobileNav = () => {
    const { userId } = auth()
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
                  <Link href="/cart">
                      <RiShoppingBag4Fill color="white" size={20} />
                  </Link>
              </div>
        </div>
    </div>
  )
}

export default MobileNav