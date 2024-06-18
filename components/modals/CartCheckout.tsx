"use client"

import { useAppSelector } from "@/lib/hooks"
import { ProductProps } from "@/types"
import { Button } from "../ui/button"
import { FaCheck } from "react-icons/fa"

const CartCheckout = () => {
   


    const {cartItems, totalPrice, shippingPrice} = useAppSelector((state:any) => state.cart)
  //if(!cartItems || !totalPrice || !shippingPrice) return ;
    const total = cartItems.reduce((acc:number,item:ProductProps) => acc + item.price * item.qty, 0)
    
      const formattedTotal =  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        total,
      )
      const formattedTotalPrice =  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        totalPrice,
      )
  
  return (
    <div className=' sticky w-full lg:w-[350px] h-fit right-0 top-0 bg-white rounded-[15px] shadow-md flex flex-col p-5 '>
                       <h2 className='font-bold text-[#000] text-[20px] '>Order summary</h2>
                       <div className="flex border-b border-gray-200 pb-3 flex-col mt-2 gap-2">
                           <div className='flex items-center w-full justify-between'>
                               <p className='text-[#111] font-normal text-base '>Total shopping:</p>
                               <h3 className='font-semibold text-[17px] '>{formattedTotal} </h3>
                           </div>
                           <div className='flex items-center w-full justify-between'>
                               <p className='text-[#111] font-normal text-base '>Shipping cost:</p>
                               <h3 className='font-semibold text-green-600 text-[17px] '>{shippingPrice} £</h3>
                           </div>
                       </div>
                       <div className='flex flex-col py-3 border-b border-gray-200 '>
                        <div className='flex items-center justify-between'>
                             <h2 className='text-[24px] font-bold text-[#000] '>Total payment</h2>
                             <h3 className='text-[20px] font-bold text-[#000] '>{formattedTotalPrice}</h3>
                        </div>
                          
                       </div>
                       <div className='flex gap-x-3 items-start py-3 border-b border-gray-200 '>
                           <input type="checkbox" className='mt-[3px] ' /> 
                           <p className='text-[15px] font-normal '>I have read and I agree to the Terms and Conditions and Data Security Policy</p>
                       </div>
                       <Button className='bg-green-1 mt-3 flex items-center gap-2 text-white uppercase rounded-[15px] h-[45px] shadow-lg transition-all duration-300 font-bold hover:opacity-[0.9] ' type="button">
                          <FaCheck color="white" />
                          <p>Buy now</p>
                       </Button>
                  </div>
  )
}

export default CartCheckout