import { getProductById } from '@/actions/product.actions';
import AccordionProductDetails from '@/components/AccordionProductDetails';
import Details from '@/components/Details';
import Recommendation from '@/components/Recommendation';
import ProductDetailsSlides from '@/components/productDetailsSliders';
import { Button } from '@/components/ui/button';
import { recommendedProducts } from '@/constants';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdRestartAlt } from 'react-icons/md';
import { RiShoppingBasketFill } from 'react-icons/ri';
interface props {
  params: {
    id: string;
  }
}
const Page = async({params}:props) => {
  const result = await getProductById({productId: params.id})
  if(result == null) return notFound()

  return (
    
    <div className='w-full bg-white py-4 h-full'>
      <div className='max-w-[1200px] flex flex-col mx-auto'>
        <div className='flex items-center px-3 mb-3 gap-1'>
          <Link className='text-black-1 text-sm hover:underline font-medium' href="/">
            StarShinerS.com
          </Link>
          <IoChevronForwardSharp />
          <Link className='text-black-1 text-sm hover:underline font-medium' href="/">
            dresses
          </Link>
          <IoChevronForwardSharp />
          <Link className='text-black-1 text-sm hover:underline font-medium' href="/">
            Gowns
          </Link>
        </div>
        {/* <div className='flex lg:gap-7 gap-5 md:flex-row flex-col'>
          <div className='flex-1'>
            <ProductDetailsSlides images={JSON.stringify(result.images)} />
          </div>
          <div className='flex-1 gap-3 px-3 flex flex-col'>
            <div className='flex flex-col gap-2 border-b border-gray-200 pb-3'>
              <h2 className='text-[#000] font-bold text-[18px]'>
                {result.name}
              </h2>
              <div className='flex items-center justify-between'>
                <p className='text-gray-500 text-sm font-medium'>Item code: S-061534-2</p>
                <div className='flex items-center gap-1'>
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <p className='text-gray-500 text-sm font-medium'>5.0 (9 votes)</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 border-b border-gray-200 pb-3'>
              <h2 className='text-[24px] font-bold text-[#000]'>{result.price},95 €</h2>
              <p className='text-black-1'>Shipping: 9,95 €</p>
            </div>
            <div className='flex flex-col border-b border-gray-200 pb-3 gap-3'>
            
            <div className="flex flex-col gap-5">
      <div>
        <h3 className='font-normal text-base mb-2 '>COLOR: <span>Cream</span></h3>
        <div className="flex items-center gap-2">
          {result.images.flatMap((item:any) =>
            item.colors.map((color:any, index:number) => (
              <div
                key={index}
                className="border-2 border-gray-300 flex items-center justify-center rounded-full w-[40px] h-[40px] p-[2px]"
              >
                <div
                  style={{ backgroundColor: color.color }}
                  className="w-full h-full rounded-full"
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div>
        <h3 className='font-normal text-base mb-2 '>CHOOSE A SIZE</h3>
        <div className="flex items-center gap-3 flex-wrap">
          {result.images.flatMap((item:any) =>
            item.colors.flatMap((color:any) =>
              color.sizes.map((size:any, index:number) => (
                <div
                  key={index}
                  className={`${
                    size.stock === 0 ? 'bg-gray-100 line-through' : ''
                  } border border-gray-300 cursor-pointer hover:border-black-1 rounded-[10px] w-[80px] flex items-center justify-center px-3 py-3`}
                >
                  <p
                    className={`${
                      size.stock === 0 ? 'text-gray-400' : 'text-[#000]'
                    } capitalize font-semibold text-[15px] whitespace-nowrap`}
                  >
                    {size.size}
                  </p>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
      
      <div className='flex flex-col'>
        <div className='flex items-center gap-2'>
          <Button
            className='flex hover:bg-green-1 items-center justify-center flex-col gap-1.5 h-[70px] w-full text-white border-2 border-[#45ab69] bg-[#45ab69] rounded-[15px]'
            type='button'
          >
            <div className='flex items-center gap-1'>
              <RiShoppingBasketFill size={25} />
              <p className='uppercase font-bold text-[22px]'>add to cart</p>
            </div>
            <p className='text-sm font-normal capitalize'>delivery in 10 days</p>
          </Button>
          <div
            className='h-[70px] p-3 w-[80px] bg-white hover:shadow-2xl cursor-pointer shadow-lg rounded-[10px] flex items-center justify-center'
          >
            <FaRegHeart size={30} color='#E00697' />
          </div>
        </div>
        <div className='flex mt-3 items-center gap-[3px]'>
          <MdRestartAlt size={20} color='gray' />
          <p className='text-black-1 text-[16px] font-normal'>
            14 days size change return policy.
          </p>
        </div>
        <div className='flex mt-1 items-center gap-[3px]'>
          <FaStar size={20} color='#888' />
          <p className='text-black-1 text-[16px] font-normal'>
            Buy this item and you will get <span className='text-primary-1'>+2 £</span>
          </p>
        </div>
      </div>
    </div>


            <AccordionProductDetails name={result.name} description={result.description} image={result.images[0].url}  />
          </div>
        </div> */}
        <Details result={JSON.stringify(result)} />
       
      </div>
      <div className='mt-7'>
         <Recommendation url="/" hasBg={true} items={recommendedProducts} title='Black Tight Lycra Top with Low Neckline - StarShinerS - In the same collection' />
      </div>
      <div className='max-w-[1200px] w-full mt-7 px-3 mx-auto '>
           <div className='flex w-full flex-col gap-1'>
                 <h2 className='font-bold text-[#000] text-[20px] '>Overall rating of the item</h2>
                 <div className='flex items-center gap-1'>
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <FaStar color="black" />
                  <p className='text-gray-500 text-sm font-medium '>5.0 (9 votes)</p>
                </div>
                <div>
                 <div className='flex w-full mt-3 flex-col gap-4'>
                      <Button type="button" className='bg-[#4d4d4d] hover:opacity-[0.8] w-full lg:w-[500px] rounded-[25px] tracking-wider shadow-md text-white uppercase font-bold h-[45px]  '>
                          Add a review
                      </Button>
                      <Button type="button" className='bg-[#f7f7f7] hover:opacity-[0.8]  w-full lg:w-[500px] rounded-[25px] tracking-wider shadow-md text-[#000] uppercase font-bold h-[45px]  '>
                          ask a question
                      </Button>
                 </div>
           </div>
           </div>
           
      </div>
      
    </div>
    
  );
};

export default Page;
