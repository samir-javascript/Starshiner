import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { footerItems } from '@/constants'
import Link from 'next/link'
const MobileFooter = () => {
  return (
    <div className="flex lg:hidden  flex-col ">
<Accordion  type="single" collapsible>
  {footerItems.map((item,i)=> (
       <AccordionItem key={i}  value={`item ${i}`}>
       <AccordionTrigger className='bg-white px-3 font-bold'>{item.head} </AccordionTrigger>
       <AccordionContent className=''>
       <ul>
                      {item.items.map(x => (
                        <li  className='p-3 border-b border-gray-300 ' key={x.name}>
                            <Link className="text-black-1 flex items-center text-sm font-normal "
                             href="/">
                              {x.icon && (
                                 <img className='w-[20px] mr-1 h-[20px] object-contain ' src={x.icon} alt={x.name} />
                              )}
                                 {x.name}
                            </Link>
                        </li>
                      ))}
                   </ul>
       </AccordionContent>
     </AccordionItem>
  ))}
 
</Accordion>
    </div>
    
  )
}

export default MobileFooter