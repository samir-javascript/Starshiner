"use client"
import React, {FormEvent, useState} from 'react'
import {
  AlertDialog,

  AlertDialogContent,
 
} from "../ui/alert-dialog" 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from '../ui/button';
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoChevronForwardSharp } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
type CommentProps = {
  open: boolean;
  setOpen: (v:boolean) => void;
  productImage?: {

  };
  productId: string;
  userId: string;
}
const CommentModal = ({open,setOpen,productImage, productId, userId}: CommentProps) => {
  const [comment,setComment] = useState('')
  const router = useRouter()
  const [rating,setRating] = useState<number>()
  const [title,setTitle] = useState('')
  const [pending,setPending] = useState(false)
  const handleAddReview = async(e:FormEvent)=> {
    e.preventDefault()
     setPending(true)
      try {
         const response = await fetch("/api/products/addCustomerReview", {
            method: "POST",
            body: JSON.stringify({
              productId, userId , comment, rating , title
            })
         })
         if(!response.ok) {
            throw new Error('Failed to creare review')
         }
         setOpen(false)
         setTitle('')
         setRating(0)
         setComment('')
         router.refresh()
         // success toast notification
      } catch (error) {
        console.log(error)
      }finally {
        setPending(false)
      }
  }
  const ratingValues = [
    {
       text: "i don't recommend",
       value: 1
    },
    {
      text: "Weak",
      value: 2
    },
    {
      text: "Acceptable",
      value: 3
    },
    {
      text: "Good",
      value: 4
    },
    {
      text: "Excelent",
      value: 5
    },
  ]

  console.log(rating, "rating here")
  return (
    <AlertDialog open={open} onOpenChange={()=> setOpen(false)} >
    
    <AlertDialogContent className='bg-white h-[95%] !p-0 !m-0 !rounded-[15px] '>
      <div className="shadow-md  p-4">
     
            <FaTimes color="gray" cursor="pointer" onClick={()=> setOpen(false) } />
     
      </div>
     
         <div className='flex px-4  overflow-y-scroll shadow-md py-2.5 flex-col'>
              <h2 className='text-[#000] font-bold text-[24px]  '>I`m writing a review</h2>
              <div className='flex flex-col  w-full'>
            <div className='flex items-center gap-2'>
                  <img className='lg:w-[90px] w-[70px]  object-cover '
                   src="https://photos-de.starshiners.ro/108859/698506-372x558-lo.jpg" alt="" />
                        <p className='text-base text-black-1'>Item code: S-058555-3</p>
             </div>
              <div className='mt-5'>
                  <form onSubmit={handleAddReview}>
                  <div className='flex flex-col gap-2'>
                          <label className='label-css' htmlFor="review title">Choose a rating</label>
                         
                          <Select onValueChange={(value:string) => setRating(value as any)}>
                    <SelectTrigger className=" focus-visible:ring-offset-0
                     focus-visible:ring-offset-transparent
                     w-full focus-visible: flex-1 text-[#000]">
                        <SelectValue placeholder="Rating"  />
                    </SelectTrigger>
                    <SelectContent className="bg-[#fff] flex-1 text-black-1">
                        {ratingValues.map((item) => (
                            <SelectItem className="hover:bg-gray-100" 
                            key={item.text} value={item.value.toString()}>
                              <div className="flex items-center gap-1">
                              <p>{item.text} </p>
                              <span>-</span>
                              {[...Array(item.value)].map((_, i) => (
                                <div key={i} className='flex items-center gap-1'>
                          <svg  className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                                </div>
                                  
                              ))}
                             
                              </div>
                               
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                      </div>
                      <div className='flex flex-col gap-2 mt-5'>
                          <label className='label-css' htmlFor="review title">Review title</label>
                          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='input-css !border-gray-200' />
                      </div>
                      <div className='flex flex-col mt-5 gap-2'>
                          <label className='label-css' htmlFor="review title">Write your Review</label>
                          <textarea  value={comment} onChange={(e) => setComment(e.target.value)} rows={4}  className='input-css !border-gray-200' />
                      </div>
                      <Button disabled={pending} type="submit" className='bg-green-1  mt-5
                       hover:opacity-[0.8]   w-full flex items-center justify-center gap-2
                         rounded-[25px] tracking-wider shadow-md
                         text-[#fff] uppercase font-bold h-[45px]  ' >
                        { pending ? "Loading..." : <> <p>Go Further </p> 
                          <IoChevronForwardSharp /></> }
                      </Button>
                  </form>
              </div>
            </div>
         </div>
        
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default CommentModal