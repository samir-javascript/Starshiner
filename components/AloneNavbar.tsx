import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
const AloneNavbar = () => {
  return (
    <div className='bg-primary-1  h-[60px] w-full '>
         <div className='h-full w-full px-5 flex items-center justify-between'>
              <Link className='flex items-center gap-2.5' href="/">
                   <FaArrowLeft size={28} color="white" />
                   <Image priority alt="starshiners"  width={170} height={90} src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" />
              </Link>
         </div>
    </div>
  )
}

export default AloneNavbar