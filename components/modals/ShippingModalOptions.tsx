import React, { useState } from 'react'
import {
    AlertDialog,
  
    AlertDialogContent,
   
  } from "../ui/alert-dialog"
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { Button } from '../ui/button';
import AddShippingModal from './AddShippingModal';
import { usePathname, useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/hooks';
import { setSelectedShippingAddress } from '@/lib/features/cartSlice';
type props  = {
    firstName:string;
    phoneNumber:string;
    country: string;
    city:string;
    zipCode: string;
    address: string;
   _id:string;
    lastName:string;

}
const ShippingModalOptions = ({open,setOpen,addresses, userId, selectedShippingAddress}: {
    open: boolean;
    selectedShippingAddress: props
    addresses: props[];
    setOpen: (v:boolean) => void;
    userId:string;
}) => {
   const [pending,setPending] = useState(false)
   const dispatch = useAppDispatch()
   const pathname = usePathname()
   const router = useRouter()
    const [openModal,setOpenModal] = useState(false)
    const handleDeleteShipping = async(itemId:string) => {
      setPending(true)
        try {
          const response = await fetch("/api/shipping/deleteShipping", {
             method: "DELETE",
             body: JSON.stringify({
              shippingId: itemId,
               userId: userId ,path: pathname
             })
          })
          if(!response.ok) {
             throw new Error('Failed to delete shipping')
          }
          
          router.refresh()
        } catch (error) {
           console.log(error)
        }finally {
          setPending(false)
        }
    }

    const handleSelectShipping = (item:any)=> {
        dispatch(setSelectedShippingAddress(item))
        // toast;
    }
  return (

   <>
        <AlertDialog open={open} onOpenChange={()=> setOpen(false)} >
    
    <AlertDialogContent className='bg-white !p-0 h-[85%] !m-0 !rounded-[15px] '>
      <div className="shadow-md p-4">
     
            <FaTimes color="gray" cursor="pointer" onClick={()=> setOpen(false) } />
     
      </div>
         <div className='flex px-4  overflow-y-scroll shadow-md py-2.5 flex-col'>
              <h2 className='text-[#000] font-bold text-[24px]  mb-3'>Choose delivery address</h2>
              <div className='flex flex-col gap-3'>
              { addresses?.length > 0 ? addresses.map((item,index) => (
                <article onClick={() => handleSelectShipping(item)} className={`${selectedShippingAddress?._id === item?._id ? "border-[#00afaa] border-[2px]" : "border-gray-200 border-[2px]"} cursor-pointer rounded-[10px] p-2`} key={item._id}>
                     <div className="flex items-start space-x-2">
                     <div className="w-[20px] h-[20px] items-center flex justify-center bg-gray-200 rounded-full ">
                        <FaCheck size={14} color="white" />
                    </div>
                    <div className="w-full flex-1">
                    <div className="flex flex-1 justify-between w-full items-center">
                    <p className=" text-black flex-1 text-sm font-normal ">
                       {item?.firstName} {item?.lastName} | +212{item?.phoneNumber} </p>
                       <div onClick={() => handleDeleteShipping(item._id)}>
                          <FaTrash size={24} color="red" />
                       </div>
                      
                    </div>
                    <div className="mt-3">
                     <p className="text-gray-500 font-normal text-[15px] ">{item?.address} </p>
                     <p className="text-gray-500 font-normal text-[15px] ">{item.city}, {item.zipCode} {item.country}</p>
                     </div>
                    </div>
                   
                      
                     </div>
                    
                   
                </article>
            )): (
              <div>
                   <p>Vous n'avez pas une adresse de livraison en place</p>
                  <p>Cliquez sur le bouton ci-dessous pour en créer une</p>
              </div>
            )}
              </div>
         </div>
         <div className=' px-4 py-2.5 '>
             <Button onClick={() => {
              setOpen(false)
              setOpenModal(true)
             }} type="button"
              className='bg-green-1 text-white font-medium text-base rounded-[15px] flex items-center justify-center w-full gap-2 '
              >
                + Ajouter une adresse
             </Button>
            
         </div>
    </AlertDialogContent>
  </AlertDialog>
  <AddShippingModal _id={userId} open={openModal} setOpen={setOpenModal} type="create" />
   </>
  )
}

export default ShippingModalOptions