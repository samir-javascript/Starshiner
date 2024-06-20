import { getCurrentUser, getMyOrders } from '@/actions/user.actions'
import ProfileTabs from '@/components/ProfileTabs'
import ProfileTop from '@/components/ProfileTop'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'

import Link from 'next/link'
import React from 'react'


const page = async() => {
    const { userId  } = auth()
    const currentUser = await getCurrentUser({clerkId: "user_2hmcJlC54zpRCPcQXOwgzpcVjtL"})
    const orders = await getMyOrders({userId: currentUser._id})
    console.log(orders, "client orders")
  return (
    <section className="bg-white py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
              <div className='flex flex-col px-3 gap-1'>
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
              <div className='flex flex-col gap-5'>
                  {orders?.map((order) => (
  <div key={order._id} className='p-5 bg-white shadow-md rounded-[17px] flex flex-col w-full  '>
                    <div className='flex mb-3 items-center gap-2'>
 <img className='w-[18px] h-[18px] ' src="https://stcnt.starshiners.ro/img/email-v6/icon-success-3x.jpg"
  alt="" />
  <h2 className='text-[#000] font-bold text-[18px] '>Registred order</h2>
</div>
          {order.orderItems.map((x:any) => (
            <React.Fragment key={x._id}>

<div className='flex border-b border-gray-300 py-5 items-start gap-3 w-full'>
 <div>
     <img className='w-[70px] max-md:w-[90px]  object-contain  ' src={x.filteredImages[0].url[0]} alt="" />
 </div>
 <div className='flex flex-col gap-1'>
     <p className='text-black-1 text-sm font-normal'>Order: #{order._id} from {order.createdAt.substring(0,10)}</p>
     <p className='text-black-1 text-sm font-normal'>{order.paymentMethode}™: {order.totalAmount} €</p>
     <p className='text-black-1 text-sm font-normal'>({x.qty} {x.qty > 1 ? "items" : "item"})</p>
     {/* <p className='text-red-500 text-sm font-normal'>Payment not completed! - Your package will be shipped after you pay online with the credit card.
     </p> */}
     <div className="flex items-center gap-1">
         <p className='text-black-1 text-sm font-normal'>Order status: </p>
         <div className='bg-gray-200 rounded-[5px] animate-pulse px-3 '>
              <p className="text-sm text-[#555] font-medium  ">{order.deliveryStatus}</p>
         </div>
     </div>

 </div>
</div>
            </React.Fragment>

          ))}             
 


<Link href={`/active-orders/order_id/${order._id}`}> 
<Button type="button" className="bg-primary-1 mt-3 hover:opacity-[0.8] transition-all duration-300 uppercase shadow-lg w-fit px-5 min-w-[150px] py-4 text-white rounded-[15px] ">
 Order Details
</Button>
</Link>

</div>
                  ))}
              </div>
               
            </div>
        </div>
    </section>
  )
}

export default page