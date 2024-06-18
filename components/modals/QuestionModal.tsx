import React, { FormEvent, useState } from 'react'
import {
  AlertDialog,

  AlertDialogContent,
 
} from "../ui/alert-dialog"
import { FaTimes } from 'react-icons/fa';
import { Button } from '../ui/button';

import { useRouter } from 'next/navigation';
type CommentProps = {
  open: boolean;
  setOpen: (v:boolean) => void;
  productImage?: {

  };
  userId: string;
  productId:string
}

const QuestionModal = ({open,setOpen,productImage,userId,productId}: CommentProps) => {
  const [pending,setPending] = useState(false)
  const [question,setQuestion] = useState('')
  const router = useRouter()
  const handleAddQuestion = async(e:FormEvent)=> {
    e.preventDefault()
    if(!question) return;
     setPending(true)
      try {
         const response = await fetch("/api/products/addCustomerQuestion", {
            method: "POST",
            body: JSON.stringify({
              userId,
              question,
              productId
            })
         })
         if(!response.ok) {
            throw new Error('Failed to creare review')
         }
         setOpen(false)
         setQuestion('')
         router.refresh()
         // success toast notification
      } catch (error) {
         console.log(error)
      }finally {
        setPending(false)
      }
  }
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
                  <form onSubmit={handleAddQuestion}>
                     
                      <div className='flex flex-col mt-5 gap-2'>
                          <label className='label-css' htmlFor="review title">Write your question</label>
                          <textarea required disabled={pending} rows={4}  value={question} 
                           onChange={(e) => setQuestion(e.target.value)}
                           className='input-css !border-gray-200' />
                      </div>
                      <Button disabled={pending} type="submit" className='bg-green-1  mt-5
                       hover:opacity-[0.8]   w-full 
                         rounded-[25px] tracking-wider shadow-md
                         text-[#fff] uppercase font-bold h-[45px]  ' >
                     {pending ? (
                       <p>Loading...</p>
                     ): (
                      <p>Send Message</p>
                     )}   
                        
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