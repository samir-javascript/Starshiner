import { homeCategories } from '@/constants'
import Link from 'next/link'
import React from 'react'

const GridCategories = () => {
  return (
    <div className="bg-white w-full py-5 px-6 border-b border-gray-200 ">
       <div className="flex flex-col gap-5 max-w-[1200px] mx-auto ">
            <h2 className="text-black font-semibold text-[18px]">Women`s clothing - Clothing and accessories</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 ">
                {/* <div className="flex flex-col gap-2.5 items-center justify-center">
                    <img className="rounded-[20px] " src="https://static.starshiners.ro/files/banners/dyn/webp/3802_106___1710166299.webp" alt="" />
                    <p className='font-bold text-black text-base '>Dresses</p>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center">
                    <img className="rounded-[20px] "
                     src="https://static.starshiners.ro/files/banners/dyn/webp/3802_106___1710166299.webp" alt="" />
                     <p className='font-bold text-black text-base '>spring dresses</p>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center">
                   <img className="rounded-[20px]" 
                    src="https://static.starshiners.ro/files/banners/dyn/webp/3802_106___1710166299.webp" alt="" />
                    <p className='font-bold text-black text-base '>Embroidered clothes</p>
                </div>
                <div className="row-span-2 flex flex-col gap-2.5">
                    <img className="rounded-[20px] "
                     src="https://static.starshiners.ro/files/banners/dyn/webp/3782_106_1_8_1710164507.webp" alt="" />
                     <p className='font-bold text-black text-base '>StarshinerS Brands</p>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center">
                   <img className="rounded-[20px] "
                    src="https://static.starshiners.ro/files/banners/dyn/webp/3802_106___1710166299.webp" alt="" />
                    <p className='font-bold text-black text-base '>Floral prints</p>
                </div>
                <div className="flex flex-col gap-2.5 justify-center items-center">
                    <img className="rounded-[20px] "
                     src="https://static.starshiners.ro/files/banners/dyn/webp/3802_106___1710166299.webp" alt="" />
                     <p className='font-bold text-black text-base '>Elegant dresses</p>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center">
                    <img className="rounded-[20px] "
                     src="https://static.starshiners.ro/files/banners/dyn/webp/3802_106___1710166299.webp" alt="" />
                     <p className='font-bold text-black text-base '>Denim look</p>
                </div> */}
                {homeCategories.map((item => (
                     <Link href={`/browse/${item.name}`} key={item.id}
                      className={`flex flex-col gap-2.5 group transition-all duration-500 items-center justify-center ${item.id === "4" ? "row-span-2" : ""}`}>
                     <img className="rounded-[20px] transition-all duration-500 group-hover:scale-[1.02] "
                      src={item.img} alt={item.name} />
                      <p className='font-bold text-black text-base '>{item.name} </p>
                 </Link> 
                )))}
            </div>
       </div>
    </div>
  )
}

export default GridCategories