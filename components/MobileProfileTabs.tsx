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
    <div className='w-full lg:hidden  scrollbar-hide flex items-center gap-5 overflow-x-scroll'>
         {tabs.map((item) => (
             <Link className='flex px-3 flex-col gap-2 items-center' href={item.url} key={item.name}>
                   <div className='border-2 border-gray-400 rounded-full
                    flex items-center justify-center w-[80px] h-[80px]  '>
                         <div className='w-full h-full bg-gray-300 rounded-full items-center justify-center flex m-[2px] '>
                               <Image src={item.icon} alt={item.name} width={35} height={35} />
                         </div>
                   </div>
                   <p className='text-center whitespace-nowrap  text-black-1 text-sm font-medium '>{item.name} </p>
             </Link>
         ))}
         <div className='w-full h-5 bg-gray-100 my-3' />
    </div>
  )
}

export default MobileProfileTabs