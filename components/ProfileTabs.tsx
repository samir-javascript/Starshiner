"use client"
import { profileItems } from '@/constants'
import Link from 'next/link'

import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import { SignOutButton,  useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
const ProfileTabs = () => {
    const pathname = usePathname()
    const user = useUser()
  return (
    <div className='border lg:block hidden border-gray-300 rounded-[10px]  w-[300px] '>
                  <div className='bg-gray-1 p-5 flex rounded-tr-[10px] rounded-tl-[10px] flex-col gap-3 border-b border-gray-300 '>
                      <h2 className='text-black font-semibold text-[18px] '>My account</h2>
                      <div className='flex items-center gap-2'>
                        <UserButton afterSignOutUrl='/' />
                        <div className='flex flex-col'>
                        <p className='font-normal text-sm text-black-1 '>{user?.user?.fullName} </p>
                        <p className='font-normal text-sm text-black-1 '>{user?.user?.primaryEmailAddress?.emailAddress}  </p>
                        </div>
                         
                      </div>
                  </div>
                  <div className='flex flex-col '>
                      {profileItems.map((item,index) => {
                         const isActive = pathname === item.href
                         return (
                     <Link key={item.name + item.id} className={`${isActive ? "bg-[#eaecf0] " : "bg-white"} px-4 py-3  hover:bg-[#eaecf0] transition-all duration-300 border-b flex items-center justify-between border-gray-300`} href={item.href} >
                          <div className='flex items-center gap-1.5'>
                            <Image src={item.icon} alt={item.name} width={20} height={20} className='object-contain' />
                             <p className='uppercase font-bold text-[15px] text-black-1 '>{item.name} </p>
                          </div>
                              
                               <IoChevronForwardSharp color="gray" />
                          </Link>
                         )
                      })}
                      <Button asChild className='px-4 py-3 bg-white flex items-center justify-start  cursor-pointer rounded-br-[10px] rounded-bl-[10px] border-b   border-gray-300' >
                     
                      <SignOutButton  redirectUrl='/'>
                      <div className='flex items-center gap-1.5 '>
                      <Image src="/icons/power-off.png" alt='log out' className="object-contain mr-2" width={25} height={25} />
                      <p className='uppercase font-bold text-[15px] text-black-1 '>LOGOUT </p>
                      </div>
                        
                     
                          
                      </SignOutButton>
                      </Button>
                  </div>
            </div>
  )
}

export default ProfileTabs