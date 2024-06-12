import Email from '@/components/Email'
import ProductCard from '@/components/ProductCard'
import ProfileTabs from '@/components/ProfileTabs'
import ProfileTop from '@/components/ProfileTop'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <section className="bg-white py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
              <div className='flex flex-col gap-1'>
                 <ProfileTop title="Active Orders " text="Here you can check your orders status! Check on your package!" links={[
                    {
                        name: "Home",
                        href: "/"
                    },
                    {
                        name: "My account",
                        href: "/client"
                    },
                    {
                        name: "My orders",
                        href: "/active-orders"
                    },

                 ]} />
                 
              </div>
                 <div className='p-5 bg-white shadow-md rounded-[17px] flex flex-col w-full  '>
                      <div className='flex mb-3 items-center gap-2'>
                          <img className='w-[18px] h-[18px] ' src="https://stcnt.starshiners.ro/img/email-v6/icon-success-3x.jpg"
                           alt="" />
                           <h2 className='text-[#000] font-bold text-[18px] '>Registred order</h2>
                      </div>
                      <div className='flex border-b border-gray-300 pb-5 items-start gap-3 w-full'>
                          <div>
                              <img className='w-[70px] object-cover  ' src="https://photos-de.starshiners.ro/110244/709110-372x558-lo.jpg" alt="" />
                          </div>
                          <div className='flex flex-col gap-1'>
                              <p className='text-black-1 text-sm font-normal'>Order: #438260663 from 10.06.2024</p>
                              <p className='text-black-1 text-sm font-normal'>Paypal™: 6995€</p>
                              <p className='text-black-1 text-sm font-normal'>(1 item)</p>
                              <p className='text-red-500 text-sm font-normal'>Payment not completed! - Your package will be shipped after you pay online with the credit card.
                              </p>
                          </div>
                      </div>
                      <Button type="button" className="bg-primary-1 mt-3 hover:opacity-[0.8] transition-all duration-300 uppercase shadow-lg w-fit px-5 min-w-[150px] py-4 text-white rounded-[15px] ">
                          Order Details
                      </Button>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default page