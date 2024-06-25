"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import React from 'react'
import { FaTimes } from "react-icons/fa";
import { arrivals, coats, colorsDropdown, eventsDropdown, jeans, lengthDropdown, materialDropdown, salesAndOffers, seasonalDropdown, shirtsandtshirts, skirts, typesDropdown } from "@/constants";

const MobileMegaMenu = ({open,setOpen}: {
  open: boolean;
  setOpen: (v:boolean)=> void 
}) => {
  return (
    <Sheet   open={open} onOpenChange={()=> setOpen(false)} > 
    
    <SheetContent   side="left" className="bg-white max-md:w-[90%] overflow-y-auto !p-0 !m-0 ">
        {/* icon close bar starts */}
        <nav className="w-full px-3 bg-primary-1 h-[60px] relative">
             <FaTimes onClick={() => setOpen(false)} color="white" size={22}  className="absolute right-2 top-5  " />
        </nav>
        {/* icon close bar ends */}
        <div className="overflow-y-scroll">
        <div className="w-full border-b border-gray-200 py-3 px-2  ">
            <Link href="/new-collections">
                <p className="uppercase tracking-[1px] text-black-1 text-base font-medium ">New collection</p>
            </Link>
        </div>
        <Accordion  type="multiple" >
     
     <AccordionItem   value={`item 1`}>
     <AccordionTrigger className='  hover:no-underline px-2  text-black-1 tracking-[1px] font-medium uppercase hover:font-bold hover:text-primary-1 transition-all duration-300'> Dresses</AccordionTrigger>
     <AccordionContent className='px-3 py-1.5'>
         <Accordion type="multiple"> 
             <AccordionItem value="nested value 1">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase '> Types</AccordionTrigger>
               <AccordionContent className=" ml-[25px]">
               <ul>
               {typesDropdown.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== typesDropdown.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                  </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem value="nested value 2">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase '>Length</AccordionTrigger>
               <AccordionContent className="ml-[25px] ">
               <ul>
               {lengthDropdown.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== lengthDropdown.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem value="nested value 3">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase '> material</AccordionTrigger>
             <AccordionContent className="ml-[25px] ">
               <ul>
               {materialDropdown.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== materialDropdown.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem value="nested value 4">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase hover:font-bold '> events</AccordionTrigger>
             <AccordionContent className="ml-[25px] ">
               <ul>
               {eventsDropdown.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== eventsDropdown.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem value="nested value 5">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase hover:font-bold '> seasonal</AccordionTrigger>
               <AccordionContent className="ml-[25px] ">
               <ul>
               {seasonalDropdown.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== seasonalDropdown.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem className="!border-b-0" value="nested value 6">
             <AccordionTrigger className='  hover:no-underline px-2 !border-b-0  text-[#000] tracking-[1px] font-medium uppercase '> colors</AccordionTrigger>
                <AccordionContent className="ml-[25px] ">
               <ul>
               {colorsDropdown.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== colorsDropdown.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
         </Accordion>
     </AccordionContent> 
   </AccordionItem>

   <AccordionItem   value={`item 2`}>
     <AccordionTrigger className='  hover:no-underline px-2  text-black-1 tracking-[1px] font-medium uppercase hover:font-bold hover:text-primary-1 transition-all duration-300 '> Clothing</AccordionTrigger>
     <AccordionContent className='px-3 py-1.5'>
     <Accordion type="multiple"> 
             <AccordionItem value="nested value2 1">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase '> Blouses, shirts, t-shirts</AccordionTrigger>
               <AccordionContent className=" ml-[25px]">
               <ul>
               {shirtsandtshirts.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== shirtsandtshirts.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                  </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem value="nested value2 2">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase '>coats, jackets, blazers</AccordionTrigger>
               <AccordionContent className="ml-[25px] ">
               <ul>
               {coats.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== coats.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem value="nested value2 3">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase '>trousers, jeans, jackets</AccordionTrigger>
             <AccordionContent className="ml-[25px] ">
               <ul>
               {jeans.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== jeans.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
             <AccordionItem value="nested value2 4">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase hover:font-bold '>skirts</AccordionTrigger>
             <AccordionContent className="ml-[25px] ">
               <ul>
               {skirts.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== skirts.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
             <div className="w-full border-b border-gray-200 py-3 px-2  ">
            <Link href="/new-collections">
                <p className="uppercase tracking-[1px] text-black-1 text-base font-medium ">sport seats</p>
            </Link>
        </div>
        <div className="w-full border-b border-gray-200 py-3 px-2  ">
            <Link href="/new-collections">
                <p className="uppercase tracking-[1px] text-black-1 text-base font-medium ">swimsuits</p>
            </Link>
        </div>
        <div className="w-full border-b border-gray-200 py-3 px-2  ">
            <Link href="/new-collections">
                <p className="uppercase tracking-[1px] text-black-1 text-base font-medium ">accessoirs</p>
            </Link>
        </div>
        <AccordionItem value="nested value2 5">
             <AccordionTrigger className='  hover:no-underline px-2  text-[#000] tracking-[1px] font-medium uppercase hover:font-bold '> underwear</AccordionTrigger>
               <AccordionContent className="ml-[25px] ">
               <ul>
                      {["socks", "women tights"].map((item) => (
                        <li className='flex items-center border-b py-2  border-gray-200 mb-1.5 gap-1' key={item}>
                       
                        <Link className='!text-[15px] text-black-1 ' href="/">
                          {item}
                        </Link>
                      </li>
                      ))}
                    </ul>
               </AccordionContent>
             </AccordionItem>
        <div className="w-full border-b border-gray-200 py-3 px-2  ">
            <Link href="/new-collections">
                <p className="uppercase tracking-[1px] text-black-1 text-base font-medium ">bags</p>
            </Link>
        </div>
           
            
         </Accordion>
     </AccordionContent> 
   </AccordionItem>

   <AccordionItem   value={`item 3`}>
     <AccordionTrigger className='  hover:no-underline px-2  text-black-1 tracking-[1px] hover:font-bold hover:text-primary-1 transition-all duration-300 font-medium uppercase '> NEW arrivals 2024</AccordionTrigger>
      <AccordionContent className="ml-[25px] ">
               <ul>
               {arrivals.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== arrivals.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
   </AccordionItem>

   <AccordionItem   value={`item 4`}>
     <AccordionTrigger className='  hover:no-underline px-2 hover:font-bold hover:text-primary-1 transition-all duration-300  text-black-1 tracking-[1px]  font-medium uppercase '> % sales & offers</AccordionTrigger>
     <AccordionContent className="ml-[25px] ">
               <ul>
               {salesAndOffers.map((item, index) => (
  <li
    className={`flex items-center py-2 mb-1.5 gap-1 ${index !== salesAndOffers.length - 1 ? 'border-b border-gray-200' : ''}`}
    key={item}
  >
    <Link className='!text-[15px] text-black-1' href="/">
      {item}
    </Link>
  </li>
))}
                    </ul>
               </AccordionContent>
   </AccordionItem>

</Accordion>
<div className="w-full border-b border-gray-200 py-3 px-2  ">
            <Link href="/new-collections">
                <p className="uppercase tracking-[1px] text-black-1 text-base font-medium ">plus size</p>
            </Link>
        </div>
        <div className="w-full border-b border-gray-200 py-3 px-2  ">
            <Link href="/new-collections">
                <p className="uppercase tracking-[1px] text-black-1 text-base font-medium ">best sellers</p>
            </Link>
        </div>
        </div>
        
    </SheetContent>
  </Sheet>
  
  )
}

export default MobileMegaMenu
