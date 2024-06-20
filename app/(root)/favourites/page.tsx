import { getCurrentUser, getMyWishlistItems } from '@/actions/user.actions'
import Email from '@/components/Email'
import ProductCard from '@/components/ProductCard'
import ProfileTabs from '@/components/ProfileTabs'
import ProfileTop from '@/components/ProfileTop'
import { ProductProps } from '@/types'
import { auth } from '@clerk/nextjs/server'


import React from 'react'


const page = async() => {
  const { userId } = auth()
  if(!userId) return;
  const currentUser = await getCurrentUser({clerkId: userId})

  const items = await getMyWishlistItems({userId: currentUser._id})
  console.log(items, "wishlist items")
  return (
    <section className="bg-white py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
              <div className='flex px-3 flex-col gap-1'>
                 <ProfileTop title="My favorite items " text={`${items?.products?.length} items`} links={[
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
                        {items?.products?.length > 0 ?  items?.products?.map((item:ProductProps,i:number)=> (
                             <ProductCard  key={i} item={JSON.stringify(item)} 
                             currentUser={JSON.stringify(currentUser)} isWishlist={true} />
                        ) ): (
                            <p>go back</p>
                        )}
                 </div>
            </div>
        </div>
    </section>
  )
}

export default page