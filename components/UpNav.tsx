import { TopNavItems } from '@/constants'
import Image from 'next/image'
import React from 'react'

const UpNav = () => {
  return (
    <header className="bg-black-1 h-[31px] block max-md:hidden w-full px-2.5 py-3  ">
        <div className=' max-w-[1200px] mx-auto flex  h-full '>
             <div className='flex items-center gap-5'>
                  {TopNavItems.map(({text,id,icon}) => (
                      <div className='flex items-center gap-1' key={id}>
                           <Image className='invert-[100%] ' src={icon} alt={text} width={22} height={22} />
                          <p className='text-white font-normal text-[12px]'>{text} </p>
                      </div>
                  ))}
             </div>
        </div>
    </header>
  )
}

export default UpNav