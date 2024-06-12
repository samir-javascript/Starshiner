import React from 'react'
import { FaTimes } from 'react-icons/fa'

const ProductCard = ({isWishlist = false}) => {
  return (
    <div className='flex flex-col md:w-[230px]  w-[190px] '>
        <div className='relative'>
        <img className='w-full'
         src={"https://photos-de.starshiners.ro/110390/709822-372x558-lo.jpg"}
          alt={""}/>
         {isWishlist  &&  <div className='absolute cursor-pointer top-0 p-3 right-0'>
              <FaTimes className='hover:text-gray-400 text-gray-500'  />
          </div>} 
        </div>
                            
                              <article className='bg-white  p-3 flex flex-col items-center justify-center'>
                                   <p className="line-clamp-1 text-black-1 text-sm font-normal ">Burgundy dress from veil fabric midi cloche with floral details </p>
                                   <div className="flex items-center gap-1">
                                       {["M","S", "L", "XL","2XL"].map(((x:string) => (
                                           <p className="text-[#121212] text-sm font-normal" key={x}>{x}</p>
                                       )))}
                                   </div>
                                   <p className="font-bold text-black text-base ">49.99 £ </p>
                              </article>
                           </div>
  )
}

export default ProductCard