import ProfileTabs from '@/components/ProfileTabs'
import Unsubscribe from '@/components/Unsubscribe'
import Link from 'next/link'
import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'

const page = () => {
  return (
    <section className="bg-[#eaecf0] py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
              <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-1'>
                       <Link href="/">
                          Home
                       </Link> 
                        <IoChevronForwardSharp />
                       <Link href="/newsletter/unsubscribe">
                          unsubscribe-newsletter
                       </Link>
                  </div>
                  <h2 className='font-bold text-black text-[20px] '>Do you want to unsubscribe the StarShinerS Newsletter? </h2>
                  <Unsubscribe />
                  <div className="rounded-[17px] mt-2 w-full bg-white shadow-lg flex gap-2 flex-col p-5 ">
                     <p className="text-sm text-black-1 font-normal ">If you unsubscribe from the Newsletter, you won`t be aware of StarShinerS SPECIAL OFFERS.</p>
                     <p className="text-sm text-black-1 font-normal ">Have you unsubscribed by mistake? Subscribe again at the Newsletter <span> <Link className="underline text-blue-500" href="/newsletter">here.</Link></span></p>
                </div>
              </div>
                 
            </div>
        </div>
    </section>
  )
}

export default page