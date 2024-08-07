
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { ImageDetails } from '@/types';

// flatmap and indexof
// Import Swiper styles


const ProductDetailsSlides = ({ images, selectedColor }: { images: ImageDetails[], selectedColor: string }) => {
  const filteredImages = images.filter((item) =>
    item.colors.some((color) => color.color === selectedColor)
  );

  const imagesToDisplay = filteredImages.length > 0 ? filteredImages : images;
  const [selectedImage,setSelectedImage] = useState(imagesToDisplay[0].url[0])
  const handleThumbnailClick = (thumbnail:string) => {
    setSelectedImage(thumbnail);
  };
  useEffect(() => {
    setSelectedImage(imagesToDisplay[0].url[0])
  }, [selectedColor])
  return (
    <div className='flex items-start w-full gap-4'>
      <div className='md:flex items-center hidden flex-col border-2 border-gray-200 rounded-[10px]'>
        {imagesToDisplay.map((item, i) => (
          <div key={i}>
            {item.url.map((url, urlIndex) => (
              <img  

              onClick={() => handleThumbnailClick(url)}
                key={urlIndex}
                width={100}
                 loading='lazy'
                height={100}
                className={`${selectedImage === url ? "opacity-[0.7] " : ""} rounded-tr-[10px] cursor-pointer w-[100px] transition-all duration-300 hover:opacity-[0.8] object-cover rounded-tl-[10px]`}
                src={url}
                alt={url}
              />
            ))}
          </div>
        ))}
      </div>
      <div className='md:block hidden w-full'>
        <img
          className='md:border-2 w-full object-cover border-gray-300 md:rounded-[15px]'
          src={selectedImage}
         
         loading='lazy'
          alt={selectedImage}
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
         
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {imagesToDisplay.flatMap((item) =>
            item.url.map((url, urlIndex) => (
              <SwiperSlide key={urlIndex} className='w-full h-auto'>
                <img loading='lazy' className='w-full h-auto object-cover' src={url} alt={url} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductDetailsSlides;
