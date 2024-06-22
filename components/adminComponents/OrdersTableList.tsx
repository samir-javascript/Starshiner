"use client"
import { OrderItem } from '@/types'
import React from 'react'
import { FaCheck, FaEdit, FaTimes, FaTrash } from 'react-icons/fa'
import { Button } from '../ui/button'
import Link from 'next/link'

const OrdersTableList = ({orders}: {orders:string}) => {
    const parsedOrders = JSON.parse(orders)
  return (
    <>
    <table className='mt-4'>
                    <thead style={{borderCollapse: "inherit"}} className='bg-light-2'>
                         <tr>
                         <th className='p-2 border'>Order ID</th>
                             <th className='p-2 border'>Client Name</th>
                             <th className='p-2 border'
                             >
                             Client Email</th>
                             <th className='p-2 border'>
                             Client PhoneNumber</th>
                             <th className='p-2 border'>

                             Order status</th>
                             <th className='p-2 border'>  
                                Order Total</th>
                             <th className='p-2 border'>
                            shipping address</th>
                            <th className='p-2 border'>
                            Payment Method</th>
                            <th className='p-2 border'>
                            isPaid</th>
                            <th className='p-2 border'>
                            Delete</th>
                            <th className='p-2 border'>
                           View</th>
                         </tr>
                    </thead>
                    <tbody className='w-full text-center'>
                         {parsedOrders.map((item: OrderItem) => (
                            <tr key={item._id} className=' border'>
                            <td className='p-3 border flex items-center justify-center'> 
                            <p className="text-base text-[#222] font-medium "> {item._id}</p>
                             </td>
                            <td className='p-3 border lg:max-w-[300px] '>
                                <p className="text-base text-[#222] font-medium "> {item.userId.username}</p>
                            </td>
                           
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.userId.email}</p> </td>
     
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.shippingAddress.phoneNumber}</p> </td>
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.deliveryStatus}</p> </td>
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.totalAmount}</p> </td>
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.shippingAddress.firstName} {item.shippingAddress.lastName}, {item.shippingAddress.city}, {item.shippingAddress.country}, {item.shippingAddress.address}, {item.shippingAddress.zipCode} </p> </td>
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.paymentMethode}</p> </td>
                            <td className='p-3 border  '> 
                                 {item.isPaid ? (
                                   <FaCheck  className="mx-auto" color="green" /> 
                                 ): (
                                    <FaTimes  className="mx-auto" color="red" /> 
                                 )}
                          </td>
                            <td className="">
                                
                                    
                                     <FaTrash  onClick={() => {}} className="mx-auto cursor-pointer" color="red" />
                                 
                            </td>
                            <td className="">
                                
                                <Link href="/"> 
                                <Button className='bg-green-1  text-white rounded-[10px] ' type="button">
                                   Details
                                </Button>
                                </Link>
                               
                            
                       </td>
                        </tr>
                         ))}
                        
                       
                    </tbody>
                 </table>
</>
  )
}

export default OrdersTableList