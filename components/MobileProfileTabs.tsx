import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileProfileTabs = () => {
    const { userId } = auth()
    const tabs = [
        {
            icon: "/icons/pc.png",
            name: "my account",
            url: `/client/profile/${userId}`
        },
        {
            icon: "/icons/shopify.png",
            name: "order history",
            url: `/active-orders`
        },
        {
            icon: "/icons/heart.png",
            name: "my wishlist",
            url: `/favourites`
        },
        {
            icon: "/icons/location.png",
            name: "customer address",
            url: `/client/address`
        },
        {
            icon: "/icons/settings.png",
            name: "account settings",
            url: `/client/profile/${userId}`
        },


    ]
  return (
    <div className='w-full px-3 lg:hidden  flex items-center gap-3 overflow-x-scroll'>
         {tabs.map((item) => (
             <Link className='flex flex-col gap-2 items-center' href={item.url} key={item.name}>
                   <div className='border-2 border-gray-200 rounded-full
                    flex items-center justify-center w-[65px] h-[65px]  '>
                         <div className='w-full h-full bg-gray-100 rounded-full items-center justify-center flex p-[2px] '>
                               <Image src={item.icon} alt={item.name} width={35} height={35} />
                         </div>
                   </div>
                   <p className='text-center text-black-1 text-sm font-medium '>{item.name} </p>
             </Link>
         ))}
    </div>
  )
}

export default MobileProfileTabs