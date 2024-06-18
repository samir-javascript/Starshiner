"use client"
import {
    AlertDialog,
  
    AlertDialogContent,
   
  } from "../ui/alert-dialog"
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from '../ui/button';
import { FaCirclePlus } from 'react-icons/fa6';
import { useAppSelector } from '@/lib/hooks';
import { LucidePencil } from 'lucide-react';
import AddShippingModal from "./AddShippingModal";
import { useState } from "react";
import EditShipping from "./EditShipping";
import EditShippingModal from "./EditShippingModal";
  
const ShippingCartModal = ({open,setOpen ,_id}: {
       _id: string;
    open:boolean;
    setOpen: (v:boolean) => void;
 
   
  
}) => {
    const  { selectedShippingAddress } = useAppSelector((state:any) => state.cart)
    const [openShippingModal,setOpenShippingModal] = useState(false)
    const [openEditShippingModal,setOpenEditShippingModal] = useState(false)
  return (
    <>
        <AlertDialog open={open} onOpenChange={()=> setOpen(false)} >
    
  <AlertDialogContent className='bg-white !p-0 !m-0 !rounded-[15px] '>
    <div className="shadow-md p-4">
   
          <FaTimes color="gray" cursor="pointer" onClick={()=> setOpen(false) } />
   
    </div>
       <div className=' px-4   shadow-md py-2.5 '>
        <div className='flex flex-col  border-b border-gray-300  '>
        <h2 className='text-[#000] font-bold text-[24px]   '>Delivery and billing</h2>
            <Button onClick={() => {
               setOpen(false)
               setOpenShippingModal(true)
            }} type="button"  className='flex items-center w-fit !p-0  bg-transparent
             text-black-1 hover:text-gray-400 transition-all duration-300   gap-2'>
               <FaCirclePlus  />
               <p className='uppercase'>ADD A NEW ADDRESS</p>
            </Button>
        </div>
        <div className='flex items-center pt-3 justify-between w-full'>
           <div className='flex items-center gap-1'>
                <input className="mr-1" checked type="checkbox" />
                <p className="font-bold  text-[#000] "> {selectedShippingAddress.lastName} {selectedShippingAddress.firstName} - <span className='text-base font-normal text-black-1'>
            {selectedShippingAddress.zipCode}, {selectedShippingAddress.address}, {selectedShippingAddress.phoneNumber}, {selectedShippingAddress.city}, {selectedShippingAddress.country}
              </span> </p>
           </div>
           <LucidePencil onClick={() => {
              setOpen(false)
              setOpenEditShippingModal(true)
           }} color="gray" size={20} cursor="pointer" />
       </div>
       </div>
       
       <div className="p-3">
           <Button type="button"
           onClick={() => setOpen(false)}
            className='bg-green-1 text-white uppercase font-medium text-base rounded-[15px] flex items-center justify-center w-full gap-2 '
             >
             
                <FaCheck />
                <p>use selected address</p>
           </Button>
          
       </div>
  </AlertDialogContent>

</AlertDialog>
<AddShippingModal type="create" open={openShippingModal} setOpen={setOpenShippingModal} _id={_id} />
<EditShippingModal shipping={selectedShippingAddress} setOpen={setOpenEditShippingModal} open={openEditShippingModal} />
    </>
  )
}

export default ShippingCartModal