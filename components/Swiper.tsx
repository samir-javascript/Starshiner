"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

//import Image from 'next/image';



const MySwiper = () => {
  return (
    <div className="max-w-[1200px] md:px-3  mx-auto flex md:flex-row flex-col  gap-3 md:mt-4  mb-5">
      <Swiper 
      className='flex-1 w-full h-full'
        spaceBetween={50}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        loop={true}

        navigation
        pagination={{ clickable: true }}
        //autoplay={{ delay: 2500 }}
        autoplay={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('swipe')}
      >
        <SwiperSlide>
                  <picture className="pc  md:flex hidden">
																	<img loading="lazy"   className='rounded-[20px] w-full' src="https://static.starshiners.ro/files/banners/slds/322_24_06_06__05_35_com_desktop.jpg" alt="online fashion store - StarShinerS" />
									</picture>
            <picture className="mobile  md:hidden block">
									 										<img    src="https://static.starshiners.ro/files/banners/slds/322_24_06_06__05_34_com_mobil.jpg" alt="online fashion store - StarShinerS" />
									 </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture className="pc md:flex hidden">
																		<img loading="lazy"  alt="online fashion store  - StarshinerS" className='rounded-[20px] ' src="https://static.starshiners.ro/files/banners/slds/193_24_05_14__02_54_desktop_1.jpg" />
									</picture>
                  <picture className="mobile md:hidden flex">
																<img loading="lazy"  alt="online fashion store  - StarshinerS"  src="https://static.starshiners.ro/files/banners/slds/193_24_05_14__02_55_hr_mobil.jpg" />
									</picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture className="pc md:flex hidden">
																		<img loading="lazy"  alt="online fashion store  - StarshinerS" className='rounded-[20px] ' src="https://static.starshiners.ro/files/banners/slds/64_24_05_14__01_23_i_love_denim_desktop.jpg" />
									</picture>
                  <picture className="mobile md:hidden flex">
																		<img loading="lazy" alt="online fashion store - StarshinerS"  src="https://static.starshiners.ro/files/banners/slds/64_24_05_14__01_24_i_love_denim_mobil.jpg" />
									</picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture className="pc md:flex hidden">
																<img loading="lazy" alt="online fashion store - StarshinerS"  className='rounded-[20px] ' src="https://static.starshiners.ro/files/banners/slds/316_24_03_25__02_37_com_office.jpg" />
									</picture>
                  <picture className="mobile md:hidden flex">
																		<img loading="lazy"  alt="online fashion store - StarshinerS" src="https://static.starshiners.ro/files/banners/slds/316_24_03_25__02_34_com_office_mobil.jpg" />
									</picture>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <div>
        <p className="md:hidden block mx-3 font-semibold mb-3 text-black-1 text-base ">Online Clothing store</p>
      <div className='flex md:flex-col mx-auto items-center justify-center flex-row gap-3  max-sm:px-3 '>
        <div className='flex flex-col gap-1.5 group items-center justify-center'>
            <img  loading='lazy' className='rounded-[20px] cursor-pointer group-hover:scale-[1.05] transition-all duration-300 h-[184px] object-cover' alt=''  src="https://static.starshiners.ro/files/banners/slds/webp/collection_24_05_30__12_17_patratica.webp"/>
            <p className='text-black font-semibold text-base'>New Collection</p>
        </div>
         
            <div className='flex flex-col group gap-1.5 items-center justify-center'>
                <img loading='lazy' className='h-[184px] cursor-pointer group-hover:scale-[1.05] transition-all duration-300 rounded-[20px] object-cover'
                 src='https://static.starshiners.ro/files/banners/dyn/webp/3793_107_1_7_1717684837.webp' />
                 <p className='text-black font-semibold text-base'>Sale</p>
            </div>
         
      </div>
      </div>
      
    </div>
    
  );
};

export default MySwiper;
