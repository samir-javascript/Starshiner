"use client"
import { FaRegHeart, FaStar } from 'react-icons/fa'
import ProductDetailsSlides from './productDetailsSliders'
import AccordionProductDetails from './AccordionProductDetails';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { Button } from './ui/button';
import { MdRestartAlt } from 'react-icons/md';
import { addToCart } from '@/lib/features/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProductProps } from '@/types';

const Details = ({result}:any) => {
  const [qty,setQty] = useState(1)
  const router = useRouter()
  
  const dispatch = useAppDispatch()
   const parsedResult = JSON.parse(result)
   const [selectedColor, setSelectedColor] = useState(parsedResult.images[0].colors[0].color);
   const getSizesForSelectedColor = (selectedColor: string) => {
    for (let image of parsedResult.images) {
      for (let color of image.colors) {
        if (color.color === selectedColor) {
          return color.sizes;
        }
      }
    }
    return [];
  };
  useEffect(() => {
    const savedCart = localStorage.getItem('startsCart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.cartItems.forEach((item:ProductProps) => {
        dispatch(addToCart(item));
      });
    }
  }, [dispatch]);
  const sizes = getSizesForSelectedColor(selectedColor);
  const handleAddToCart = () => {
      dispatch(addToCart({...parsedResult,qty}));
      router.push("/cart")
  }
  return (
    <div className='flex lg:gap-7 gap-5 md:flex-row flex-col'>
          <div className='flex-1'>
            <ProductDetailsSlides selectedColor={selectedColor} images={parsedResult.images} />
          </div>
          <div className='flex-1 gap-3 px-3 flex flex-col'>
            <div className='flex flex-col gap-2 border-b border-gray-200 pb-3'>
              <h2 className='text-[#000] font-bold text-[18px]'>
                {parsedResult.name}
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
              <h2 className='text-[24px] font-bold text-[#000]'>{parsedResult.price},95 €</h2>
              <p className='text-black-1'>Shipping: 9,95 €</p>
            </div>
            <div className='flex flex-col border-b border-gray-200 pb-3 gap-3'>
            
            <div className="flex flex-col gap-5">
      <div>
        <h3 className='font-normal text-base mb-2 '>COLOR: <span>{selectedColor} </span></h3>
        <div className="flex items-center gap-2">
        {parsedResult.images.flatMap((item: any) =>
                      item.colors.map((color: any, index: number) => (
                        <div
                          key={index}
                          className="border-2 border-gray-300 flex items-center justify-center rounded-full w-[40px] h-[40px] p-[2px]"
                          onClick={() => setSelectedColor(color.color)}
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
        {sizes.map((size: any, index: number) => (
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
                ))}
        </div>
      </div>
    </div>
      
      <div className='flex flex-col'>
        <div className='flex items-center gap-2'>
          <Button
            className='flex hover:bg-green-1 items-center justify-center flex-col gap-1.5 h-[70px] w-full text-white border-2 border-[#45ab69] bg-[#45ab69] rounded-[15px]'
            type='button'
            onClick={handleAddToCart}
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


            <AccordionProductDetails name={parsedResult.name} description={parsedResult.description} image={parsedResult.images[0].url}  />
          </div>
        </div>
  )
}

export default Details