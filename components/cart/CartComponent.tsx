"use client"

import { useAppSelector } from "@/lib/hooks";
import CartCheckout from "../modals/CartCheckout";
import EmptyCart from "../EmptyCart";
import CartItems from "../modals/CartItems";
import CartShipping from "../modals/CartShipping";
import { FaLock, FaRegClock } from "react-icons/fa";
import {
    Accordion,
  } from "@/components/ui/accordion"
const CartComponent = ({currentUser}: {
    currentUser:string;
}) => {
    const parsedUser = JSON.parse(currentUser)
    const { cartItems } = useAppSelector((state:any) => state.cart)
    if(!cartItems) return;
  return (
    <>
    {cartItems?.length > 0 && (
            <nav className='bg-light-1 w-full mx-auto px-3 shadow-md py-4 flex items-center justify-center '>
         
            <div className='flex md:items-center  items-start gap-1 '>
                   <FaRegClock className='max-md:hidden'/>
                   <p className='text-[14px] font-medium text-[#444] text-center '>Complete your order in time to enjoy the items from your cart!</p>
            </div>
       </nav>
        )}
       
    {cartItems?.length > 0 ? (
 <div className='w-full max-lg:px-2 max-w-[1000px] py-7 mx-auto flex lg:flex-row flex-col gap-5 '>
 <div className='flex-1 flex flex-col gap-3 w-full'>
 <Accordion  type="single" collapsible>


<CartItems />


</Accordion>
<div className='bg-white shadow-md flex flex-col gap-2 rounded-[17px] p-5 '>
<h2 className='font-bold text-[#000] text-[20px] '>Where to deliver?</h2>

<CartShipping currentUser={parsedUser} />

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
<input type="checkbox" className='mt-[3px] ' /> 
<div className='flex flex-col gap-1'>
  <h3 className='font-bold text-[15px] text-[#000] '>Online via Stripe</h3>
  <p className='text-sm font-medium text-gray-500 '>We take your security very seriously, therefore your details are safe with us.</p>
  <img className='w-[95px] object-contain ' src="https://tse1.mm.bing.net/th?id=OIP.2Wn_QwGm8-Pw09teA3tg9gHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114" alt="" />
</div>
</div>
<div className='flex items-start pt-2 gap-3 w-full'>
<input type="checkbox" className='mt-[3px] ' /> 
<div className='flex flex-col gap-1'>
  <h3 className='font-bold text-[15px] text-[#000] capitalize '>cash on delivery</h3>
  <p className='text-sm font-medium text-gray-500 max-w-[600px] '>
  After placing the order, you will receive a confirmation email with all the delivery details, and payment will be collected in cash upon delivery.
  </p>
  
</div>
</div>
</div>
 </div>
 <CartCheckout />
</div>
    ): (
        <EmptyCart />
    )}
   
     
        
    </>
  )
}

export default CartComponent