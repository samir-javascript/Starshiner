import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdMenu } from "react-icons/md";
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
const MobileNav = () => {
  return (
    <div className='md:hidden flex bg-primary-1 h-[60px] w-full '>
        <div className='flex items-center justify-between w-full px-3 h-full'>
              <div className="flex items-center gap-3">
                  <MdMenu color="white" size={35} />
                  <div>
                      <Image alt="starshiners"  width={170} height={90} src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" />
                  </div>
              </div>
              <div className='flex items-center gap-2'>
                  <Link href="">
                      <FaSearch color="white" size={20} />
                  </Link>
                  <Link href="">
                      <FaRegUser color="white" size={20} />
                  </Link>
                  <Link href="">
                      <FaRegHeart color="white" size={20} />
                  </Link>
                  <Link href="">
                      <RiShoppingBag4Fill color="white" size={20} />
                  </Link>
              </div>
        </div>
    </div>
  )
}

export default MobileNav