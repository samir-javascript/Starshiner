import Link from 'next/link'
import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'

const ProfileTop = ({links,text,title}: {
    text: string;
    title: string;
    links: {
        name: string;
        href: string;
    }[]
}) => {
  return (
    <div className='flex flex-col gap-1'>
         <div className="flex items-center gap-1"> 
            
         {links.map((link,i) =>  (
                <>
                  <Link key={i} className="text-sm font-normal" href={link.href}>
                  {link.name}
             </Link>
             <IoChevronForwardSharp />
             </> 
              ))}
                     
                 </div>
                 <h2 className='font-bold text-black text-[20px] '>{title} </h2>
                 <p className='text-gray-700 font-normal text-[15px] '>{text} </p>
    </div>
  )
}

export default ProfileTop