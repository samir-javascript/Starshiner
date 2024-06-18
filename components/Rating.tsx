"use client"

import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'
import CommentModal from './modals/CommentModal'
import { Button } from './ui/button'
import QuestionModal from './modals/QuestionModal'

const Rating = ({userId, productId}: {
    userId:string;
    productId: string;
}) => {
    const parsedUserID = JSON.parse(userId)
    const parsedProductID = JSON.parse(productId)
    const [open,setOpen] = useState(false)
    const [openQuestionModal,setOpenQuestionModal] = useState(false)
  return (
    


  <>
        <div className='max-w-[1200px] w-full mt-7 px-3 mx-auto '>
           <div className='flex w-full flex-col gap-1'>
                 <h2 className='font-bold text-[#000] text-[20px] '>Overall rating of the item</h2>
                 <div className='flex items-center gap-1'>
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <p className='text-gray-500 text-sm font-medium '>5.0 (9 votes)</p>
                </div>
                <div className="flex items-center gap-5">
                 <div className='flex max-lg:w-full mt-3 flex-col gap-4'>
                      <Button onClick={() => setOpen(true)} type="button" className='bg-[#4d4d4d]
                         hover:opacity-[0.8] w-full lg:w-[500px] rounded-[25px] tracking-wider shadow-md text-white uppercase font-bold h-[45px]  '>
                          Add a review
                      </Button>
                      <Button onClick={()=> setOpenQuestionModal(true)} type="button" className='bg-[#f7f7f7] 
                       hover:opacity-[0.8]   w-full
                        lg:w-[500px] rounded-[25px] tracking-wider shadow-md
                         text-[#000] uppercase font-bold h-[45px]  '>
                          ask a question
                      </Button>
                 </div>
              
                

<div className='lg:flex  hidden flex-col w-full '>

<div className='mt-2 flex flex-col '>
<div className="flex items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</a>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-300 rounded" style={{width: '70%'}}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
</div>
<div className="flex items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</a>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-300 rounded" style={{width: '17%'}}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
</div>
<div className="flex items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3 star</a>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-300 rounded" style={{width: '8%'}}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
</div>
<div className="flex items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</a>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-300 rounded" style={{width: '4%'}}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
</div>
<div className="flex items-center mt-4">
    <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</a>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-300 rounded" style={{width: '1%'}}></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
</div>
</div>
</div>
               

           </div>
           </div>
           
      </div> 
      <CommentModal productId={parsedProductID}  userId={parsedUserID} open={open} setOpen={setOpen} />
      <QuestionModal open={openQuestionModal} setOpen={setOpenQuestionModal} />
  </>
  )
}

export default Rating