
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState } from 'react';

// Import Swiper styles
interface Size {
  size: string;
  stock: number;
}

interface Color {
  color: string;
  sizes: Size[];
}

interface ImageDetails {
  url: string[];
  colors: Color[];
}

const ProductDetailsSlides = ({ images, selectedColor }: { images: ImageDetails[], selectedColor: string }) => {
  const filteredImages = images.filter((item) =>
    item.colors.some((color) => color.color === selectedColor)
  );

  const imagesToDisplay = filteredImages.length > 0 ? filteredImages : images;
 
  return (
    <div className='flex items-start w-full gap-4'>
      <div className='md:flex items-center hidden flex-col border-2 border-gray-200 rounded-[10px]'>
        {imagesToDisplay.map((item, i) => (
          <div key={i}>
            {item.url.map((url, urlIndex) => (
              <img
                key={urlIndex}
                className='rounded-tr-[10px] w-[100px] object-cover rounded-tl-[10px]'
                src={url}
                alt=""
              />
            ))}
          </div>
        ))}
      </div>
      <div className='md:block hidden w-full'>
        <img
          className='md:border-2 w-full object-cover border-gray-300 md:rounded-[15px]'
          src={imagesToDisplay[0].url[0]}
         
          alt=""
        />
      </div>
      <div className='md:hidden w-full'>
        <Swiper
          spaceBetween={0}
          modules={[Pagination, Navigation, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {imagesToDisplay.flatMap((item) =>
            item.url.map((url, urlIndex) => (
              <SwiperSlide key={urlIndex} className='w-full h-auto'>
                <img className='w-full h-auto object-cover' src={url} alt="" />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductDetailsSlides;
