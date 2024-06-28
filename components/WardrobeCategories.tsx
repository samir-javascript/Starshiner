"use client"
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

import { wardrobeColumn } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
const WardrobeCategories = () => {
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
    <div className='w-full bg-white py-5 px-6'>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-5 '>
           <h2 className="text-black font-semibold text-[18px]">Are you looking for inspiration for your wardrobe?</h2>
           <Swiper 
      className='flex-1 w-full h-full'
        spaceBetween={3}
        modules={[Navigation,  Scrollbar, A11y]}
        slidesPerView={isMobile ? 2 : 5}
        navigation
      
        autoplay={{ delay: 2500 }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('swipe')}
      >
        {wardrobeColumn.map((item) => (
            <SwiperSlide key={item.name}>
              <Link href={`/${item.name}`} className='flex flex-col items-center justify-center gap-1.5'>
                 <Image width={1000} height={1000}  className='rounded-[20px] ' src={item.img} alt={item.name}/>
                <p className='font-bold text-black text-base '>{item.name} </p>
              </Link>
          
  </SwiperSlide>
        ))}
       
       
       
        {/* Add more slides as needed */}
      </Swiper>
        </div>
    </div>
  )
}

export default WardrobeCategories