"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "./ui/scroll-area"
import { categories, colors, colorsFilter, sizes } from "@/constants"
const FilterColumn = () => {
   
  return (
    <div className='w-[191px] max-lg:hidden'>
        <Accordion  type="multiple">
  
      
        <AccordionItem   value={`item 1`}>
       <AccordionTrigger className='bg-white px-3 font-bold'>SIZE </AccordionTrigger>
       <AccordionContent className='px-3 py-1.5'>
       <div className="h-[300px] overflow-y-auto flex flex-col  gap-3  ">
              {sizes.map((item)=> (
                  <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5" key={item.size}>
                        <input type="checkbox" />
                        <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">{item.size} </p>
                  </div>
              ) )}
         </div>
       </AccordionContent>
     </AccordionItem>
     <AccordionItem   value={`item 2`}>
       <AccordionTrigger className='bg-white px-3 font-bold'>COLOR </AccordionTrigger>
       <AccordionContent className='py-1.5 px-3'>
       <div className="h-[300px] overflow-y-auto flex flex-col  gap-3  ">
              {colorsFilter.map((item)=> (
                  <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5" key={item.color}>
                        <input type="checkbox" />
                        <div className=' flex items-center justify-center rounded-full w-[28px] h-[28px] p-[1px] border-2 border-gray-300 '>
                      {/* Use inline style for custom colors */}
                     
                        <div style={{ backgroundColor: item.color }} className='w-full h-full rounded-full' />
                      
                    </div>
                        <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">{item.name} </p>
                  </div>
              ) )}
         </div>
       </AccordionContent>
     </AccordionItem>
     <AccordionItem   value={`item 3`}>
       <AccordionTrigger className='bg-white px-3 font-bold'>CATEGORY </AccordionTrigger>
       <AccordionContent className='px-3 py-1.5'>
       <div className="h-[300px] overflow-y-auto flex flex-col  gap-3  ">
              {categories.map((item)=> (
                  <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5" key={item.id}>
                        <input type="checkbox" />
                        <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">{item.name} </p>
                  </div>
              ) )}
         </div>
       </AccordionContent>
     </AccordionItem>
     <AccordionItem   value={`item 4`}>
       <AccordionTrigger className='bg-white px-3 font-bold'>SORT BY </AccordionTrigger>
       <AccordionContent className='px-3 py-1.5'>
            <div className="flex flex-col gap-3">
            <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5">
                        <input type="checkbox" />
                        <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">price - low to high </p>
                  </div>
                  <div className="flex items-center pb-3 gap-1.5">
                        <input type="checkbox" />
                        <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">price - high to low </p>
                  </div>
            </div>
       </AccordionContent>
     </AccordionItem>
 
 
</Accordion>
    </div>
  )
}

export default FilterColumn