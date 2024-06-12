"use client"
import Autoplay from "embla-carousel-autoplay"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useRef } from 'react'

import { authoritySlides } from "@/constants"
import Link from "next/link"
import Image from "next/image"
export default function CategoriesSlider() {
   const plugin = useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <div className="border-t border-b border-gray-300 py-3 w-full">
<div className="max-w-6xl mx-auto">
  <Carousel
  ref={plugin}
  plugins={[plugin.current]}
  
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.play}

      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full carousel max-lg:overflow-x-hidden "
    >
      <CarouselContent>
        {authoritySlides.map((item, index) => (
          <CarouselItem key={index} className="max-sm:basis-1/2 md:basis-1/4 lg:basis-1/5">
             <div className="flex items-center justify-center    gap-2 lg:mx-4 mx-auto">
               <Image width={35} height={35}  className='  object-contain '
                          src={item.icon} alt={item.name} />
                    <p className="text-[#141415]  font-bold line-clamp-2 uppercase text-[13px]  ">{item.name} </p>
                   
            </div>
          
           
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
    
  
  )
}


