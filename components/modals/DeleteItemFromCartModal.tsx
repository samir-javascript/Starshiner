import React from 'react'
import {
    AlertDialog,
  
    AlertDialogContent,
   
  } from "../ui/alert-dialog"
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from '../ui/button';
  
const DeleteItemFromCartModal = ({open,setOpen,handleClick, qty, selectedSize, image,title}: {
    open:boolean;
    setOpen: (v:boolean) => void;
    image:string;
    title: string;
    qty: number;
    selectedSize: string;
    handleClick: ()=> void;
   
  
}) => {
  return (
    <>
        <AlertDialog open={open} onOpenChange={()=> setOpen(false)} >
    
  <AlertDialogContent className='bg-white !p-0 !m-0 !rounded-[15px] '>
    <div className="shadow-md p-4">
   
          <FaTimes color="gray" cursor="pointer" onClick={()=> setOpen(false) } />
   
    </div>
       <div className='flex px-4  shadow-md py-2.5 flex-col'>
            <h2 className='text-[#000] font-bold text-[24px]  '>Do you want to delete this item?</h2>
            <div className='flex items-center gap-2'>
                 <img className='lg:w-[90px] w-[70px]  object-cover '
                  src={image} alt={title} />
                   <div className='flex flex-col'>
                       <p className='text-black-1'>{title}</p>
                       <p className='text-base text-black-1'>Size: <span className="font-bold text-[#000] ">{selectedSize}</span> ( {qty} Pcs )</p>
                   </div>
              </div>
       </div>
       <div className='flex items-center px-4 py-2.5 justify-between gap-2'>
           <Button type="button"
            className='bg-green-1 text-white font-medium text-base rounded-[15px] flex items-center justify-center w-full gap-2 '
            onClick={handleClick} >
           
                <FaCheck />
                <p>Yes</p>
           </Button>
           <Button  type="button"
           onClick={() => setOpen(false)}
            className='bg-red-200 flex text-base font-medium rounded-[15px] items-center justify-center w-full gap-2 '>
               <FaTimes />
               <p>No</p>
           </Button>
       </div>
  </AlertDialogContent>
</AlertDialog>

    </>
  )
}

export default DeleteItemFromCartModal