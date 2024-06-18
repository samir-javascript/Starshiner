import React from 'react'
import {
  AlertDialog,

  AlertDialogContent,
 
} from "../ui/alert-dialog"
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from '../ui/button';
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoChevronForwardSharp } from 'react-icons/io5';
type CommentProps = {
  open: boolean;
  setOpen: (v:boolean) => void;
  productImage?: {

  };
  userId?: string;
}
const QuestionModal = ({open,setOpen,productImage,userId}: CommentProps) => {
  return (
    <AlertDialog open={open} onOpenChange={()=> setOpen(false)} >
    
    <AlertDialogContent className='bg-white !p-0 !m-0 !rounded-[15px] '>
      <div className="shadow-md p-4">
     
            <FaTimes color="gray" cursor="pointer" onClick={()=> setOpen(false) } />
     
      </div>
         <div className='flex px-4  shadow-md py-2.5 flex-col'>
              <h2 className='text-[#000] font-bold text-[24px]  '>Add a question</h2>
              <div className='flex flex-col  w-full'>
            <div className='flex items-center gap-2'>
                  <img className='lg:w-[90px] w-[70px]  object-cover '
                   src="https://photos-de.starshiners.ro/108859/698506-372x558-lo.jpg" alt="" />
                        <p className='text-base text-black-1'>Item code: S-058555-3</p>
             </div>
              <div className='mt-5'>
                  <form action="flex flex-col gap-4">
                     
                      <div className='flex flex-col mt-5 gap-2'>
                          <label className='label-css' htmlFor="review title">Write your question</label>
                          <textarea rows={4}  className='input-css !border-gray-200' />
                      </div>
                      <Button type="submit" className='bg-green-1  mt-5
                       hover:opacity-[0.8]   w-full 
                         rounded-[25px] tracking-wider shadow-md
                         text-[#fff] uppercase font-bold h-[45px]  ' >
                         <p>send message </p> 
                        
                      </Button>
                  </form>
              </div>
            </div>
         </div>
        
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default QuestionModal