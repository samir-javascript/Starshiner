// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// // Import Swiper styles
// interface Size {
//   size: string;
//   stock: number;
// }

// interface Color {
//   color: string;
//   sizes: Size[];
// }

// interface ImageDetails {
//   url: string;
//   colors: Color[];
// }


// const productDetailsSliders = ({images}:any) => {
//   const images = JSON.parse(images)
//   return (
//     <div className='flex items-start w-full gap-4'>
//         <div className='md:flex items-center  hidden flex-col border-2 border-gray-200 rounded-[10px] '>
//              {images.map((item:any,i:any) => (
//               <div key={i}>
//                    <img  className='rounded-tr-[10px] w-[180px] object-cover rounded-tl-[10px] ' src={item.url} alt="" />
//                </div>
//              ))}
               
              
//         </div>
//         <div className='md:block hidden w-full'>
         
//              <img className='md:border-2 flex-1 min-w-[500px]  object-cover border-gray-300 md:rounded-[15px] ' src={images[0].url} alt="" />
//         </div>
//       <div className='md:hidden w-full'>
//         <Swiper
//           spaceBetween={0}
//           modules={[ Pagination, Navigation, Scrollbar, A11y]}
//           slidesPerView={1}
//           navigation
//           loop={true}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 2500 }}
//           scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log('slide change')}
//         >
//           {images.map(((x:any) => (
//  <SwiperSlide key={x.url} className='w-full h-auto'>
//  <img className='w-full h-auto object-cover' src={x.url} alt="" />
// </SwiperSlide>
//           )))}
         
          
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default productDetailsSliders;

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
  url: string;
  colors: Color[];
}

const ProductDetailsSlides = ({ images, selectedColor }: any) => {
 

  const filteredImages = images.filter((item: any) =>
    item.colors.some((color: Color) => color.color === selectedColor)
  );

  const imagesToDisplay = filteredImages.length > 0 ? filteredImages : images;

  return (
    <div className='flex items-start w-full gap-4'>
      <div className='md:flex items-center hidden flex-col border-2 border-gray-200 rounded-[10px] '>
        {imagesToDisplay.map((item: any, i: any) => (
          <div key={i}>
            <img
              className='rounded-tr-[10px] w-[180px] object-cover rounded-tl-[10px]'
              src={item.url}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className='md:block hidden w-full'>
        <img
          className='md:border-2 w-full object-cover border-gray-300 md:rounded-[15px]'
          src={imagesToDisplay[0].url}
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
          {imagesToDisplay.map((x: any) => (
            <SwiperSlide key={x.url} className='w-full h-auto'>
              <img className='w-full h-auto object-cover' src={x.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductDetailsSlides;
