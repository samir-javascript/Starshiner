
"use client"
import { SignOutButton, useAuth } from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MobileProfileTabs = () => {
    const { userId } = useAuth()
    const pathname = usePathname()
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
       
    ]
    
    return (
        <div className='w-full md:hidden scrollbar-hide flex items-center gap-4 overflow-x-scroll'>
            {tabs.map((item) => (
                <Link className='flex px-3 flex-col gap-2 items-center' href={item.url} key={item.name}>
                    <div className='border-2 border-gray-400 rounded-full flex items-center justify-center w-[80px] h-[80px] p-[2px]'>
                        <div className={`w-full h-full  rounded-full items-center justify-center flex ${item.url === pathname ? "bg-[#0b4d54] " : "bg-gray-300"}`}>
                            <Image src={item.icon} alt={item.name} className="invert-[100%]" width={35} height={35} />
                        </div>
                    </div>
                    <p className='text-center whitespace-nowrap text-black-1 text-sm font-medium'>{item.name}</p>
                </Link>
            ))}
            <SignOutButton>
                <div className='flex items-center pr-3 flex-col gap-2'>
                    <div className='border-2 border-gray-400 rounded-full flex items-center justify-center w-[80px] h-[80px] p-[2px]'>
                        <div className='w-full h-full bg-gray-300 rounded-full items-center justify-center flex'>
                            <Image src={"/icons/power-off.png"} alt={"log out"} className="invert-[100%]" width={35} height={35} />
                        </div>
                    </div>
                    <p className='text-center whitespace-nowrap text-black-1 text-sm font-medium'>Sign out</p>
                </div>
            </SignOutButton>
        </div>
    )
}

export default MobileProfileTabs
