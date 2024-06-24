import React from 'react'
// import ProfileTabs from "../../../../../../components/ProfileTabs"
// import Link from 'next/link'
// import ProfileTop from "../../../../../../components/ProfileTop"
// import { getShippingById } from "../../../../../../actions/user.actions"
import EditShipping from '@/components/EditShipping'
import ProfileTabs from '@/components/ProfileTabs'
import { getShippingById } from '@/actions/user.actions'
import ProfileTop from '@/components/ProfileTop'


const page = async({params}: {
  params: {
    id: string
  }
}) => {
    const shipping = await getShippingById({ id: params.id })
    console.log(shipping, "shipping")
  return (
    <section className="bg-[#fff] py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 lg:mx-12 max-lg:px-5 flex flex-col gap-5'>
              <div className='flex flex-col gap-1'>
                 <ProfileTop title="Edit my shipping address " text="" links={[
                    {
                        name: "Home",
                        href: "/"
                    },
                    {
                        name: "My account",
                        href: "/client/profile/87878"
                    },
                    {
                        name: "Edit My Addresse",
                        href: `/client/address/edit/${params.id}`
                    },

                 ]} />
                 
              </div>
               <div className='lg:max-w-[550px] '>
                   <EditShipping type="edit" shipping={JSON.stringify(shipping)} />
               </div>
            </div>
        </div>
    </section>
  )
}

export default page