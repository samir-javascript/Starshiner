import Email from '@/components/Email'
import ProductCard from '@/components/ProductCard'
import ProfileTabs from '@/components/ProfileTabs'
import ProfileTop from '@/components/ProfileTop'

import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <section className="bg-white py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
              <div className='flex flex-col gap-1'>
                 <ProfileTop title="My favorite items " text="3 items" links={[
                    {
                        name: "Home",
                        href: "/"
                    },
                    {
                        name: "My account",
                        href: "/client"
                    },
                    {
                        name: "My Favourites",
                        href: "/favourites"
                    },

                 ]} />
                 
              </div>
                 <div className='flex items-center justify-center flex-wrap  gap-4'>
                        {[0,1,2,3].map((_,i)=> (
                             <ProductCard key={i} isWishlist={true} />
                        ) )}
                 </div>
            </div>
        </div>
    </section>
  )
}

export default page