"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect, useRef} from 'react'
import { MdMenu } from "react-icons/md";
import { FaSearch, FaRegUser, FaRegHeart, FaShoppingBag, FaArrowLeft, FaTimes } from "react-icons/fa";


import { useAuth } from '@clerk/nextjs';
import { useAppSelector } from '@/lib/hooks';
import  MobileMegaMenu  from './MobileMegaMenu';
import { getSuggestionsProducts } from '@/actions/product.actions';
import { IoReloadCircleOutline } from 'react-icons/io5';
import { ProductTypes } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
const MobileNav = () => {
    const [open,setOpen] = useState(false)
    const [value,setValue] = useState('')
    const { userId } = useAuth()
    const [loading,setLoading] = useState(false)
    const [result,setResult] = useState([])
   
    const [openItems,setOpenItems] = useState(false)
    const { cartItems } = useAppSelector((state:any) => state.cart)
    const [show,setShow] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    useEffect(() => {
        const fetchProducts = async() => {
            setLoading(true)
            setResult([])
            try {
                const res = await getSuggestionsProducts({query: value})
                // @ts-ignore
                setResult(JSON.parse(res))
                setLoading(false)
            } catch (error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
         const DelayDebounceFn = setTimeout(() => {
                if(value) {
                    fetchProducts()
                }
         }, 500);
         return () => clearTimeout(DelayDebounceFn)
    }, [value])

    useEffect(() => {
        setOpenItems(false)
        setValue("")
    }, [pathname])

    const handlePress = ()=>{
          
            if(value.trim()) {
                router.push(`/search?q=${value}`)
                setValue('')
            }else {
                router.push("/")
            }
          
    }
  return (
    <>
    <div className='md:hidden flex bg-primary-1 h-[60px] w-full '>
        <div className='flex items-center justify-between w-full px-3 h-full'>
              <div className="flex items-center gap-3">
                  <MdMenu onClick={() => setOpen(true)} color="white" size={35} />
                  <Link href="/">
                      <Image priority={true} alt="starshiners"  width={170} height={90} src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" />
                  </Link>
              </div>
              <div className='flex items-center gap-2'>
                  <div onClick={() => setShow(true)}>
                      <FaSearch color="white" size={20} />
                  </div>
                  <Link href={`/client/profile/${userId}`}>
                      <FaRegUser color="white" size={20} />
                  </Link>
                  <Link href="/favourites">
                      <FaRegHeart color="white" size={20} />
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
        </div>
        <MobileMegaMenu open={open} setOpen={setOpen} />
       
    </div>
    {show && (
            <div  className='absolute flex flex-col top-0 right-0 left-0 bottom-0 bg-white z-50 inset-0 w-full h-full  '>
                 <div className='flex w-full h-[60px] px-3 items-center gap-2 bg-gray-1'>
                        <FaArrowLeft onClick={() => setShow(false)} size={20} />
                        <input onKeyPress={(e) => {
                             if(e.key === "Enter") {
                                 handlePress()
                             }
                        }} value={value} onChange={(e) => {
                            setValue(e.target.value)
                            if(!openItems)  setOpenItems(true)
                                if(e.target.value === "" && openItems) setOpenItems(false)
                        }} type="text" placeholder='Search on StarshinerS' className='bg-white relative w-full rounded-xl flex-1 border border-gray-200 !outline-none ' />
                        {value && !loading &&  <FaTimes onClick={()=> setValue("")} color="gray" size={18} className='absolute right-6' />}
                        {loading &&   <IoReloadCircleOutline size={20} color="gray"  className='  animate-spin absolute right-6 '/> }
                 </div>

                 {openItems && result.length > 0  && (
    <>

    <div className='bg-white flex flex-col px-3 py-4  ' >
    <Link href={`/search?q=${value}`} className="px-3 mb-4 flex items-center gap-2">
<FaSearch  color="gray" size={18} />
<p className="text-red-700 font-medium text-base  ">{value}  </p>
</Link>
        <h2 className='font-semibold text-[#000] text-[18px] capitalize '>Related articles</h2>

    </div>
    <div className="bg-gray-1  h-full gap-3 flex flex-col w-full">
    {result.map((item:ProductTypes,index:number) => (
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
    </>
                 )}
             
                
            </div>
        )}
    </>
  )
}

export default MobileNav