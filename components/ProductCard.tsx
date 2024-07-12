"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaHeart, FaRegHeart, FaTimes } from 'react-icons/fa'
import { ImageDetails } from '@/types';
const ProductCard = ({isWishlist = false, item, currentUser, isCategory = false}: {
   item: string;
   currentUser?: string;
   isCategory?: boolean;
   isWishlist?: boolean
}) => {
  const parsedUser = JSON.parse(currentUser as string)

  const parsedResult = JSON.parse(item)
  const router = useRouter()
  const [hoveredColor,setHoveredColor] = useState('')
 
  const filteredImages = parsedResult.images.filter((item:ImageDetails) =>
   item.colors.some((color) => color.color === hoveredColor)  
 );
 
 const imageToDisplay = filteredImages.length > 0 ? filteredImages[0]?.url[0] : '';
  const handleToggleWishlist = async()=> {
   
    try {
       const response =  await fetch("/api/wishlist/toggleWishlist", {
          method: "POST",
          body: JSON.stringify({
             userId: parsedUser._id,
             productId: parsedResult._id
          })
       })
       if(!response.ok) {
          throw new Error('Failed to complete this action')
       }
       // success toast;
       router.refresh()
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <div className='flex relative flex-col md:w-[230px] max-sm:w-[161px] w-[190px] '>
        <div>
         <Link href={`/product/${parsedResult._id}`}>
         <img className='w-full'
         src={imageToDisplay || ""}
          alt={parsedResult?.name || ""}/>
         </Link>
         
         {isWishlist  &&  <div onClick={handleToggleWishlist} className='absolute cursor-pointer top-0 p-3 right-0'>
              <FaTimes className='hover:text-gray-400 text-gray-500'  />
          </div>} 
          {isCategory  &&  <div  className='absolute cursor-pointer top-0 p-3 right-0'>
             {parsedUser?.saved?.includes(parsedResult._id) ? (
                 <FaHeart onClick={handleToggleWishlist} color='#d90fc1'  />
             ) : (
                 <FaRegHeart onClick={handleToggleWishlist} className='hover:text-gray-400 text-gray-500'  />
             ) }
            
          </div>} 
        </div>
                            
                              <Link href={`/product/${parsedResult._id}`} className='bg-white  p-3 flex flex-col items-center justify-center'>
                                   <p className="line-clamp-1 text-black-1 text-sm font-normal "> {parsedResult.name || "loremlorem lorem lorem lorem"} </p>
                                   <div className="flex items-center gap-1">
                                       {["M","S", "L", "XL","2XL"].map(((x:string) => (
                                           <p className="text-[#121212] text-sm font-normal" key={x}>{x}</p>
                                       )))}
                                   </div>
                                   <p className="font-bold text-black text-base ">{parsedResult.price || '49,99'} £ </p>
                              </Link>
                              <div className="flex items-center gap-2">
        {parsedResult.images.flatMap((item: ImageDetails) =>
                      item.colors.map((color, index: number) => (
                        <div
                        key={index}
                        onMouseEnter={() => setHoveredColor(color.color)}
                        className=" cursor-pointer  flex items-center justify-center rounded-full w-[30px] h-[30px] "
                        
                      >
                        <div
                          style={{ backgroundColor: color.color }}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      ))
                    )}
        </div>
                           </div>
  )
}

export default ProductCard