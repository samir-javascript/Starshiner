import Email from '@/components/Email'
import ProfileTabs from '@/components/ProfileTabs'

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
                       <Link className="text-sm font-normal" href="/">
                          Home
                       </Link> 
                        <IoChevronForwardSharp />
                       <Link className="text-sm font-normal" href="/newsletter/unsubscribe">
                          unsubscribe-newsletter
                       </Link>
                  </div>
                  <h2 className='font-bold text-black text-[20px] '>Subscribe at the Newsletter and be the first to find out the good news! </h2>
                  
                  <div className="rounded-[17px] mt-2 w-full bg-white shadow-lg flex gap-2 flex-col p-5 ">
                     <p className="text-[17px] text-[#000] uppercase font-semibold "><span className='text-red-500'>10% DISCOUNT</span> AT YOUR NEXT ORDER</p>
                     <p className="font-bold text-black text-[20px]">Subscribe to the Newsletter and we will send you the discount on your e-mail!</p>
                     <Email newsLetter={true} />
                </div>
                  <div className='p-5 shadow-lg text-black-1 font-normal text-[15px] bg-white mt-2 rounded-[17px] w-full flex flex-col gap-1.5 '>
                      <p>Discover via e-mail the items from the NEW Collection, on FRIDAY</p>
                      <p>Find out informations about StarShinerS competitions</p>
                      <p>Sales: Flash Sale, Black Friday, Summer Sale, StarShinerS Birthday - we let you know about them for the first time in the newsletter</p>
                      <p>Your are aware of the developing tools we use to offer you a relaxing shopping experience: an interactive Size chart, Wishlist, Full Screen View.</p>
                      <p>You are the first to know when we open a StarShinerS ShowRoom in your town</p>
                      <p>By subscribing to this page you agree to receive via e-mail the sales from StarShinerS.com. You can unsubscribe at any time <span><Link className='underline text-blue-500' href="/newsletter/unsubscribe">here.</Link> </span></p>
                  </div>
              </div>
                 
            </div>
        </div>
    </section>
  )
}

export default page