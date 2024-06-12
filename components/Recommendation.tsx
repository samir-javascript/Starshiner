"use client";
import React, { useRef, useState , useEffect} from 'react';
import { Virtual, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronForwardSharp } from "react-icons/io5";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Link from 'next/link';

const Recommendation = ({title, items, url, hasBg = false}: {
   title: string;
   url: string;
   hasBg: boolean;
   items: any
}) => {
 
  // Create array with 500 slides
  const [isMobile, setIsMobile] = useState(false);
 
   useEffect(() => {
     const mediaQuery = window.matchMedia('(max-width: 768px)');
     setIsMobile(mediaQuery.matches);
 
     const handleMediaQueryChange = (event:any) => {
       setIsMobile(event.matches);
     };
 
     mediaQuery.addEventListener('change', handleMediaQueryChange);
     return () => {
       mediaQuery.removeEventListener('change', handleMediaQueryChange);
     };
   }, []);


  


  return (
    <div className={`${hasBg ? "bg-gray-1": ""}  px-6 w-full py-5`}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
        <h2 className="text-black font-semibold text-[18px]">{title} </h2>
        <Swiper 
      className='flex-1 w-full h-full'
        spaceBetween={3}
        modules={[Navigation,  Scrollbar, A11y]}
        slidesPerView={isMobile ? 2 : 4}
        navigation
      
        autoplay={{ delay: 2500 }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('swipe')}
      >
        {items.map((item: any,i:number) => (
            <SwiperSlide key={i}>
              <div className='flex flex-col'>
                 <img src={"https://photos-de.starshiners.ro/103884/708240-372x558-lo.jpg"} alt={item.name}/>
                 <article className='bg-white  p-3 flex flex-col items-center justify-center'>
                      <p className="line-clamp-1 text-black-1 text-sm font-normal ">{item.name} </p>
                      <div className="flex items-center gap-1">
                          {item.sizes.map(((x:string) => (
                              <p className="text-[#121212] text-sm font-normal" key={x}>{x}</p>
                          )))}
                      </div>
                      <p className="font-bold text-black text-base ">{item.price}.99 £ </p>
                 </article>
              </div>
          
  </SwiperSlide>
        ))}
       
       
       
        {/* Add more slides as needed */}
      </Swiper>
      <Link className="flex items-center group gap-1 justify-center w-full mt-2" href={url}>
           <p className="uppercase group-hover:underline text-black font-semibold text-base ">SEE ALL</p>
            <IoChevronForwardSharp />
      </Link>
      </div>
    </div>
  );
};

export default Recommendation;
