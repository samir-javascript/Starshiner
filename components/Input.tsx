"use client"
import { useAppSelector } from "@/lib/hooks";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa";

const InputSearch = () => {
  const [value,setValue] = useState("")
  const { user, isLoaded } = useUser()
  const { cartItems } = useAppSelector((state:any) => state?.cart)
  
  return (
    <>
    <div className='flex flex-1 max-w-[600px] items-center justify-between bg-white h-[35px] rounded-[25px] border !border-primary-1 px-3 py-1 '>
         <input value={value} onChange={(e) => setValue(e.target.value)}
          className='bg-transparent !outline-none !outline-offset-0 border-none flex-1 w-full' 
         placeholder='find the item you want' type="text" />
          <FaSearch  color="gray" size={18} />
    </div>
    <div className='flex items-center gap-4'>
    <Link href={`/client/profile/${user?.id}`} className='flex items-center gap-1.5'>
         <UserButton  />
         <p className='text-white font-normal text-sm lg:flex hidden '>My account</p>  
    </Link>
    <Link href="/my-favourites_items" className='flex items-center gap-1.5'>
         <FaRegHeart color="white" size={22} />
         <p className='text-white font-normal text-sm lg:flex hidden '>Favourites</p>  
    </Link>
    <Link href="/cart" className='flex items-center  gap-1.5'>
    <div className='relative'>
      <FaShoppingBag color="white" size={22} />
     {cartItems.length > 0 && <div className="flex items-center justify-center px-[2px] absolute right-[-4px] top-[-5px] rounded-[3px] bg-[#4d4d4d] ">
         <p  className="text-white text-[9px] font-bold  ">{cartItems && cartItems.length}</p>
      </div>} 
    </div>
       
         <p className='text-white font-normal text-sm lg:flex hidden '>My cart</p>  
    </Link>
</div>
</>
  )
}

export default InputSearch