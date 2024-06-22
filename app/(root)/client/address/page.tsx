import { getCurrentUser, getMyShippingAddreses } from '@/actions/user.actions'
import Email from '@/components/Email'
import ProductCard from '@/components/ProductCard'
import ProfileTabs from '@/components/ProfileTabs'
import ProfileTop from '@/components/ProfileTop'
import Address from '@/components/modals/Address'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'


import React from 'react'


const page = async() => {
   
    const { userId} = auth()
    const currentUser = await getCurrentUser({clerkId:userId as string})
    const shippingAddresses = await getMyShippingAddreses({userId:currentUser?._id})
  return (
    <section className="bg-[#eaecf0] py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 max-lg:px-5 flex flex-col gap-5'>
              <div className='flex flex-col gap-1'>
                 <ProfileTop title="Active shipping address " text="Here you can check your address! edit it or delete it!" links={[
                    {
                        name: "Home",
                        href: "/"
                    },
                    {
                        name: "My account",
                        href: "/client/profile/87878"
                    },
                    {
                        name: "My Addresses",
                        href: "/client/address"
                    },

                 ]} />
                 
              </div>
               <Address userId={JSON.stringify(currentUser?._id)} addresses={JSON.stringify(shippingAddresses)} />
            </div>
        </div>
    </section>
  )
}

export default page