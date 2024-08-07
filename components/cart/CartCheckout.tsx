"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { ProductProps } from "@/types"
import { Button } from "../ui/button"
import { FaCheck } from "react-icons/fa"
import { useState } from "react"
import { useAuth } from "@clerk/nextjs"
import { clearCart  } from "@/lib/features/cartSlice"
import { useRouter } from "next/navigation"

const CartCheckout = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { userId } = useAuth()
    const { cartItems, totalPrice, shippingPrice, selectedShippingAddress } = useAppSelector((state: any) => state.cart)
    const { paymentMethod } = useAppSelector((state:any) => state.cart)
    // Calculate the total shopping price
    const total = cartItems.reduce((acc: number, item: ProductProps) => acc + item.price * item.qty, 0)

    // Format the total and total price
    const formattedTotal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total)
    const formattedTotalPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice)
    const dispatch = useAppDispatch()
    // Place order function
    const placeOrder = async () => {
       
        if(paymentMethod === "Stripe") {
            setLoading(true)
            try {
                // First, store the cart details and get the reference ID
                const storeResponse = await fetch('/api/save', {
                    method: "POST",
                    body: JSON.stringify({
                        cartItems: cartItems,
                        totalAmount: totalPrice,
                        shippingAmount: shippingPrice,
                        shippingAddress: selectedShippingAddress
                    })
                });
                const { referenceId } = await storeResponse.json();
    
                // Use the reference ID to create a Stripe order
                const response = await fetch('/api/AddStripeOrder', {
                    method: "POST",
                    body: JSON.stringify({ referenceId , clerkId:userId })
                });
                const { url } = await response.json();
                window.location.href = url;
                dispatch(clearCart())
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }else {
            setLoading(true)
           try {
            const res = await fetch('/api/CODoRDER', {
                method: "POST",
                body: JSON.stringify({
                    cartItems: cartItems,
                    totalAmount:totalPrice,
                   shippingAmount: shippingPrice,
                   shippingAddress: selectedShippingAddress,
                   itemsPrice: total
                })
            })
            if(!res.ok) {
                throw new Error('Failed to create an order')
               
            }
            // toast
           
             router.replace('/success/COD')
             dispatch(clearCart())
             
           } catch (error) {
              console.log(error)
           }finally {
             setLoading(false)
           }
        }
       
    }

    return (
        <div className='sticky w-full lg:w-[350px] h-fit right-0 top-0 bg-white rounded-[15px] shadow-md flex flex-col p-5'>
            <h2 className='font-bold text-[#000] text-[20px]'>Order summary</h2>
            <div className="flex border-b border-gray-200 pb-3 flex-col mt-2 gap-2">
                <div className='flex items-center w-full justify-between'>
                    <p className='text-[#111] font-normal text-base'>Total shopping:</p>
                    <h3 className='font-semibold text-[17px]'>{formattedTotal}</h3>
                </div>
                <div className='flex items-center w-full justify-between'>
                    <p className='text-[#111] font-normal text-base'>Shipping cost:</p>
                    <h3 className='font-semibold text-green-600 text-[17px]'>{shippingPrice} £</h3>
                </div>
            </div>
            <div className='flex flex-col py-3 border-b border-gray-200'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[24px] font-bold text-[#000]'>Total payment</h2>
                    <h3 className='text-[20px] font-bold text-[#000]'>{formattedTotalPrice}</h3>
                </div>
            </div>
            <div className='flex gap-x-3 items-start py-3 border-b border-gray-200'>
                <input type="checkbox" className='mt-[3px]' />
                <p className='text-[15px] font-normal'>I have read and I agree to the Terms and Conditions and Data Security Policy</p>
            </div>
            <Button onClick={placeOrder} className='bg-green-1 mt-3 flex items-center gap-2 text-white uppercase rounded-[15px] h-[45px] shadow-lg transition-all duration-300 font-bold hover:opacity-[0.9]' type="button">
                {loading ? "Loading..." : <><FaCheck color="white" /><p>Buy now</p></>}
            </Button>
        </div>
    )
}

export default CartCheckout
