import {  getOrderById } from '@/actions/user.actions'
import MobileProfileTabs from '@/components/MobileProfileTabs'
import ProfileTabs from '@/components/ProfileTabs'
import { OrderItem } from '@/types'
import Link from 'next/link'
import React from 'react'
import {  FaChevronLeft } from 'react-icons/fa'

export async function generateMetadata({ params }: {params: {id:string}}) {
    const order: OrderItem = await getOrderById({orderId: params.id})
      return {
        title: `StarshinerS | ${order.orderItems[0].name}`,
        description: `Starshiners women online store | N°${order._id}`,
      }
    }

const page = async({params}: {
   params: {
     id: string
   }
}) => {
    // magnet
    // bzatm
    // 9or2an
    // les bracles (ktaba)
    // porte de cle 7did
    // bli4at


    const order: OrderItem = await getOrderById({orderId: params.id})
   
  return (
    <section className="bg-white py-3 h-full w-full" >
        <div className='flex max-w-[1200px] px-3 mx-auto md:flex-row flex-col gap-5 items-start'>
            <MobileProfileTabs />
            <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
              <div className='flex flex-col px-3 gap-1'>
                  <Link href="/active-orders" className="flex items-center gap-3">
                       <FaChevronLeft color="#00afaa" size={16} />
                       <h3 className='underline text-[#00afaa] font-semibold text-[17px] '>Retour aux commandes</h3>
                  </Link>
                 
              </div>
             <h2 className='font-bold text-[#000] lg:text-[30px] text-[22px]  '>Commande N°{order._id}
             </h2>
             <div className="flex flex-col  gap-3 ">
                 <div className="flex items-center h-[45px] justify-between rounded-[10px]  w-full ">
                      <div className='flex-1 items-center flex p-3 h-full rounded-tl-[10px] rounded-bl-[10px] bg-gray-100'>
                            <p className="font-semibold text-black-1 text-[15px] ">Effectuée le 25-05-2024</p>
                      </div>
                      <div className='bg-gray-200 rounded-br-[10px] rounded-tr-[10px] h-full p-3 lg:w-[120px] w-[70px] ' />

                     
                 </div>
                 {order.orderItems.map((x) => (
 <div key={x._id} className="flex w-full gap-3 items-start !border-b pb-3  ">
 <img className="w-[70px] rounded-[5px] object-cover " src={x.filteredImages[0].url[0]} alt={x.name} />
 <div className="flex flex-1 flex-col ">
     <p className='text-black-1 text-sm font-normal line-clamp-1'>
        {x.name}
      </p>
     <p className='text-black-1 text-sm font-normal'>Qté : {x.qty} </p>
     <div className="flex items-center gap-1">
<p className='text-black-1 text-sm font-normal'>Order status: </p>
<div className='bg-gray-200 rounded-[5px] animate-pulse px-3 '>
<p className="text-sm text-[#555] font-medium  ">{order.deliveryStatus} </p>
</div>
</div>
<h2 className="font-bold text-[#000] text-[20px] ">{x.price} Dh</h2>
     
 </div>
</div>
                 ))}
               
                <div className="border border-gray-200 rounded-[10px] p-5  flex flex-col">
                  <div className='border-b flex flex-col border-gray-200 pb-3'>
                  <article className='flex items-center justify-between'>
                          <p className='text-black-1 font-bold text-sm'>Sous total produits</p>
                          <p className='text-gray-500 font-medium text-sm '>{order.totalAmount} Dh</p>
                     </article>
                     <article className='flex items-center justify-between'>
                          <p className='text-gray-500 font-medium text-sm'>Frais de livraison
                          </p>
                          <p className='text-gray-500 font-medium text-sm'>{order.shippingAmount} Dh</p>
                     </article>
                  </div>
                     <div className='flex items-center pt-3 justify-between'>
                         <p className='text-[#00afaa] font-bold text-[18px] '>TOTAL</p>
                         <p className='text-[#00afaa] font-bold text-[18px] '>{order.totalAmount} Dh</p>
                     </div>
                </div>
                <React.Fragment>
                    <h2 className='text-black-1 max-lg:text-center font-bold mb-3 text-[20px] '>Informations de la commande</h2>
                    <div className='lg:flex hidden items-start justify-between w-full'>
                       <article className='flex flex-col gap-1'>
                           <h2 className='text-black-1 font-bold text-sm'>Adresse de livraison</h2>
                           <div className='flex flex-col'>
                                <p className='p-css'>Mr. {order.shippingAddress.firstName} {order.shippingAddress.lastName} </p>
                                <p className='p-css'>Meknès , {order.shippingAddress.address} </p>
                                <p className='p-css'>MEKNES, {order.shippingAddress.zipCode} {order.shippingAddress.country} Maroc</p>
                                <a className='text-[#00afaa] font-medium text-sm '  href="tel:+212609547692">+212{order.shippingAddress.phoneNumber} </a>
                           </div>
                       </article>
                       <article className='flex flex-col gap-1'>
                           <h2 className='text-black-1 font-bold text-sm'>Mode de livraison</h2>
                           <div className='flex flex-col'>
                                <p className='p-css'>Standard</p>
                               
                           </div>
                       </article>
                       <article className='flex flex-col gap-1'>
                           <h2 className='text-black-1 font-bold text-sm'>Adresse de facturation</h2>
                           <div className='flex flex-col'>
                                <p className='p-css'>Mr. {order.shippingAddress.firstName} {order.shippingAddress.lastName} </p>
                                <p className='p-css'>Meknès , {order.shippingAddress.address} </p>
                                <p className='p-css'>MEKNES, {order.shippingAddress.zipCode} {order.shippingAddress.country} Maroc</p>
                                <a className='text-[#00afaa] font-medium text-sm '  href="tel:+212609547692">+212{order.shippingAddress.phoneNumber} </a>
                           </div>
                       </article>
                       <article className='flex flex-col gap-1'>
                           <h2 className='text-black-1 font-bold text-sm'>Informations de paiement</h2>
                           <div className='flex flex-col'>
                               
                                <p className='p-css'>
                                     {order.paymentMethode}
                                </p>
                               
                           </div>
                       </article>
                    </div>
                    <div className='flex lg:hidden flex-col border border-gray-200 rounded-[10px] '>
                          accordions go here
                    </div>
                </React.Fragment>
            </div>
            </div>
          
        </div>
    </section>
  )
}

export default page