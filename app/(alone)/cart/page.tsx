
import EmptyCart from '@/components/EmptyCart';
import { Button } from '@/components/ui/button'
import { CiLocationOn } from "react-icons/ci";

import Image from 'next/image'
import React  from 'react'
import { FaCheck, FaRegClock, FaLock, FaTrash } from 'react-icons/fa'

import { MdPublishedWithChanges } from "react-icons/md";
import { IoChevronForwardSharp } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CustomCheckbox from '@/components/CustomCheckbox';
import EditShipping from '@/components/modals/EditShipping';
import { auth } from '@clerk/nextjs/server';
import { getCurrentUser } from '@/actions/user.actions';
const page = async() => {
  const isEmpty = false 
  const {userId} = auth()
  const currentUser = await getCurrentUser({clerkId:userId as string})
  return (
    <section  className='h-full bg-[#eaecf0]  w-full '>
     <nav className='bg-light-1 w-full mx-auto px-3 shadow-md py-4 flex items-center justify-center '>
          <div className='flex md:items-center  items-start gap-1 '>
                 <FaRegClock className='max-md:hidden'/>
                 <p className='text-[14px] font-medium text-[#444] text-center '>Complete your order in time to enjoy the items from your cart!</p>
          </div>
     </nav>
      {isEmpty ? (
    <EmptyCart />
      ) : (
         <div className='w-full max-lg:px-2 max-w-[1000px] py-7 mx-auto flex lg:flex-row flex-col gap-5 '>
                  <div className='flex-1 flex flex-col gap-3 w-full'>
                  <Accordion  type="single" collapsible>
 
       <AccordionItem  value={`item 1`}>
       <AccordionTrigger className='bg-white hover:no-underline shadow-md px-3 rounded-tr-[15px] rounded-tl-[15px] font-bold'>
            <p>My Cart (1)</p>
       </AccordionTrigger>
       <AccordionContent  className='bg-white px-3 py-4 rounded-br-[15px] rounded-bl-[15px] '>
           <div>
            <div className='flex border-b border-gray-300 pb-3  items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
                  <img className='lg:w-[90px] w-[70px]  object-cover '
                   src="https://photos-de.starshiners.ro/108859/698506-372x558-lo.jpg" alt="" />
                    <div className='flex flex-col'>
                        <p className='text-black-1'>Dress S-060696-3</p>
                        <p className='text-base text-black-1'>Size: <span className="font-bold text-[#000] ">L</span> ( 1 Pcs )</p>
                    </div>
               </div>
               <div className='flex items-center gap-3'>
                  <h4 className="font-semibold text-[17px] ">69,95 €
                  </h4>
                  <FaTrash size={18} color="red" />
               </div>
            </div>
               <div className='pt-3 '>
                    <p className='text-base font-normal '>Earn <span className='text-primary-1 font-medium'>4 EUR</span>  - Loyalty points</p>
               </div>
           </div>
       </AccordionContent>
     </AccordionItem>

 
</Accordion>
   <div className='bg-white shadow-md flex flex-col gap-2 rounded-[17px] p-5 '>
        <h2 className='font-bold text-[#000] text-[20px] '>Where to deliver?</h2>
         {/* <div className='bg-gray-1 px-3 py-5 rounded-[10px]  '>
               <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                <CiLocationOn color="gray" size={18} />
                    <img src="https://stcnt.starshiners.ro/img/flags_16/ro.gif" alt="" />
                    <p className='text-gray-500 font-semibold text-[16px] '>darb imam boussayri, Băcăleşti, Teleorman 50000 - <span className='font-normal text-[#111] text-[15px]  '>hmamou soufiane , 609547692</span></p>
                </div>
                   <IoChevronForwardSharp className='font-bold' color="gray" />
               </div>
         </div> */}
         <div>
            <EditShipping type="create" userId={JSON.stringify(currentUser._id)} />
         </div>
         <div className='flex  text-[#000] hover:text-gray-400 transition-all duration-300 mt-3 cursor-pointer items-center gap-2'>
              <MdPublishedWithChanges color="gray" size={20} />
              <p className='uppercase  font-bold text-[15px] '>change the address</p>
         </div>
   </div>

     <div className='bg-white shadow-md flex flex-col gap-2 rounded-[17px] p-5 '>
         <div className='flex border-b border-gray-200 pb-3 items-center justify-between'>
              <h2 className='font-bold text-[#000] text-[20px] '>Choose your payment method</h2>
              <div className='flex items-center gap-2'>
                <FaLock size={22} color="green" />
              
                  <p className='text-[12px] font-medium text-gray-400 '>SECURE <br />
                  CONNECTION</p>
                  
                   
              </div>
         </div>
         <div className='flex items-start border-b border-gray-200 pb-3 pt-2 gap-3 w-full'>
              <CustomCheckbox />
              <div className='flex flex-col gap-1'>
                   <h3 className='font-bold text-[15px] text-[#000] '>Online via Stripe</h3>
                   <p className='text-sm font-medium text-gray-500 '>We take your security very seriously, therefore your details are safe with us.</p>
                   <img className='w-[95px] object-contain ' src="https://tse1.mm.bing.net/th?id=OIP.2Wn_QwGm8-Pw09teA3tg9gHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114" alt="" />
              </div>
         </div>
         <div className='flex items-start pt-2 gap-3 w-full'>
              <CustomCheckbox />
              <div className='flex flex-col gap-1'>
                   <h3 className='font-bold text-[15px] text-[#000] capitalize '>cash on delivery</h3>
                   <p className='text-sm font-medium text-gray-500 max-w-[600px] '>
                   After placing the order, you will receive a confirmation email with all the delivery details, and payment will be collected in cash upon delivery.
                   </p>
                   
              </div>
         </div>
     </div>
                  </div>
                  <div className=' sticky w-full lg:w-[350px] h-fit right-0 top-0 bg-white rounded-[15px] shadow-md flex flex-col p-5 '>
                       <h2 className='font-bold text-[#000] text-[20px] '>Order summary</h2>
                       <div className="flex border-b border-gray-200 pb-3 flex-col mt-2 gap-2">
                           <div className='flex items-center w-full justify-between'>
                               <p className='text-[#111] font-normal text-base '>Total shopping:</p>
                               <h3 className='font-semibold text-[17px] '>92,95 €</h3>
                           </div>
                           <div className='flex items-center w-full justify-between'>
                               <p className='text-[#111] font-normal text-base '>Shipping cost:</p>
                               <h3 className='font-semibold text-green-600 text-[17px] '>FREE</h3>
                           </div>
                       </div>
                       <div className='flex flex-col py-3 border-b border-gray-200 '>
                        <div className='flex items-center justify-between'>
                             <h2 className='text-[24px] font-bold text-[#000] '>Total payment</h2>
                             <h3 className='text-[20px] font-bold text-[#000] '>92,95 €</h3>
                        </div>
                          
                       </div>
                       <div className='flex gap-3 items-start py-3 border-b border-gray-200 '>
                           <CustomCheckbox />
                           <p>I have read and I agree to the Terms and Conditions and Data Security Policy</p>
                       </div>
                       <Button className='bg-green-1 mt-3 flex items-center gap-2 text-white uppercase rounded-[15px] h-[45px] shadow-lg transition-all duration-300 font-bold hover:opacity-[0.9] ' type="button">
                          <FaCheck color="white" />
                          <p>Buy now</p>
                       </Button>
                  </div>
         </div>
      )}
       
    </section>
  )
}

export default page