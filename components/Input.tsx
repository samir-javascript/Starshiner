"use client"
import { getSuggestionsProducts } from "@/actions/product.actions";
import { useAppSelector } from "@/lib/hooks";
import { ProductTypes } from "@/types";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoReloadCircleOutline } from "react-icons/io5";

const InputSearch = () => {
  const [value,setValue] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const { user, isLoaded } = useUser()
  const { cartItems } = useAppSelector((state:any) => state?.cart)
  const [suggestions,setSuggestions] = useState<any>([])
   const router = useRouter()
   useEffect(() => {
    const fetchResult = async()=> {
         setSuggestions([])
         setIsLoading(true)
         try {
             const res = await getSuggestionsProducts({
                query: value,
               
             })
             // @ts-ignore
             setSuggestions(JSON.parse(res))
             setIsLoading(false)
         } catch (error) {
             console.log(error)
             throw error;
         }finally {
            setIsLoading(false)
         }
    }
    
    const delayDebounceFn = setTimeout(() => {
     if (value) {
       fetchResult();
     }
   }, 500);

   return () => {
     clearTimeout(delayDebounceFn);
   };
    

}, [value])
const handleSearch = ()=> {
  if(value.trim()) {
      router.push(`/search?q=${value}`)
      setValue('')
  }else {
     router.push('/')
  }
}
console.log(suggestions, "products from input")
  return (
    <>
   
    <div className='flex relative flex-1 max-w-[600px] items-center justify-between bg-white h-[35px] rounded-[25px] border !border-primary-1 px-3 py-1 '>
         <input onKeyPress={(e)=> {
             if(e.key === "Enter") {
                handleSearch()
             }
           }} value={value} onChange={(e) => setValue(e.target.value)}
          className='bg-transparent !outline-none !outline-offset-0 border-none flex-1 w-full' 
         placeholder='find the item you want' type="text" />
         {isLoading ? (  <IoReloadCircleOutline size={20} color="gray"  className='  animate-spin '/>) : (  <FaSearch  color="gray" size={18} />)}
        {suggestions.length  > 0 && (
  <div className="absolute border border-gray-300 shadow-md bg-white !z-[999999999999999999999999999999999999999] top-[40px] flex-col w-[410px] pt-3 flex max-md:hidden ">
     <Link href={`/search?q=${value}`} className="px-3 mb-4 flex items-center gap-2">
     <FaSearch  color="gray" size={18} />
     <p className="text-red-700 font-medium text-base  ">{value} </p>
     </Link>
  <div className="px-3">
       <h2 className="text-[#000] mb-3 capitalize text-[20px] font-semibold ">Related articles</h2>
  </div>
  {/* https://photos-de.starshiners.ro/109144/707899-56x84-lo.jpg */}
 
  
  
   <div className="bg-gray-1  gap-3 flex flex-col w-full">
   {suggestions.map((item:ProductTypes,index:number) => (
      <Link href={`/product/${item._id}`} className="flex border-b p-3 border-gray-400  items-center gap-3" key={index}>
            <img className="w-[80px] object-contain " src={item?.images[0].url[0] || ""} alt={item?.name} />
            <div className="flex flex-col ">
                <p className="line-clamp-1 text-[#222] text-[15px] font-normal  ">{item.name} </p>
                <div className="flex items-center gap-1.5 ">
{["S","M", "L","XL", "4XL"]. map((size, index: number) => (
  <p className="text-[#222] text-[15px] font-normal" key={index}>{size} </p>
  ))}
</div>
                <h3 className="font-bold text-[#000] text-[17px] ">{item?.price} £</h3>
            </div>
      </Link>
   ))}
</div>
  

</div>
        )}
   
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