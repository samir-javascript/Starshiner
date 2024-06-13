"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles


const productDetailsSliders = () => {
  return (
    <div className='flex items-start w-full gap-4'>
        <div className='md:flex items-center  hidden flex-col border-2 border-gray-200 rounded-[10px] '>
               <div>
                   <img  className='rounded-tr-[10px] w-[180px] object-cover rounded-tl-[10px] ' src="https://photos-de.starshiners.ro/110330/709551-56x84-lo.jpg" alt="" />
               </div>
               <div>
                   <img className='opacity-[0.6] w-[180px] object-cover ' src="https://photos-de.starshiners.ro/110330/709551-56x84-lo.jpg" alt="" />
               </div>
               <div>
                   <img  className='rounded-br-[10px] w-[180px] object-cover opacity-[0.6] rounded-bl-[10px] ' src="https://photos-de.starshiners.ro/110330/709551-56x84-lo.jpg" alt="" />
               </div>
        </div>
        <div className='md:block hidden'>
         
             <img className='md:border-2 border-gray-300 md:rounded-[15px] ' src="https://photos.starshiners.com/110330/black-dress-from-veil-fabric-long-wrap-over-skirt-with-laced-sleeves-strass-S061534-2-709551.jpg" alt="" />
        </div>
      <div className='md:hidden w-full'>
        <Swiper
          spaceBetween={0}
          modules={[ Pagination, Navigation, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='w-full h-auto'>
            <img className='w-full h-auto object-cover' src="https://photos-de.starshiners.ro/106203/669598-372x558-lo.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className='w-full h-auto'>
            <img className='w-full h-auto object-cover' src="https://photos-de.starshiners.ro/106203/669598-372x558-lo.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-auto object-cover' src="https://photos-de.starshiners.ro/106203/669598-372x558-lo.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-auto object-cover' src="https://photos-de.starshiners.ro/106203/669598-372x558-lo.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default productDetailsSliders;

