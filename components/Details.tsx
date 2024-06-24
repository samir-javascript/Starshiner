"use client"
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from 'react-icons/fa'
import ProductDetailsSlides from './productDetailsSliders'
import AccordionProductDetails from './AccordionProductDetails';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { Button } from './ui/button';
import { MdRestartAlt } from 'react-icons/md';
import { addToCart } from '@/lib/features/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useEffect, useOptimistic, useState } from 'react';
import { useRouter } from 'next/navigation';

import SizesModal from './modals/SizesModal';
import CrossSellModal from './modals/CrossSellModal';
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
const Details = ({result, currentUser}: {
  result: string;
  currentUser: string
}) => {
  const [qty,setQty] = useState(1)
  const [open,setOpen] = useState(false)
  const [product, setProduct] = useState({
    image: "" || null,
    name: "",
    size: "",
    price: 0,
    qty: 0
  });
  const router = useRouter()
  const [openSizeModal,setOpenSizeModal] = useState(false)
  const dispatch = useAppDispatch()
   const parsedResult = JSON.parse(result)
   const parsedUser = JSON.parse(currentUser)
   const [selectedColor, setSelectedColor] = useState(parsedResult.images[0].colors[0].color);
   const [selectedSize,setSelectedSize] = useState('')
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
 
  const sizes = getSizesForSelectedColor(selectedColor);
  const handleAddToCart = () => {
    if(!selectedSize)  {
      setOpenSizeModal(true)
      return
    }
    const filteredImages = parsedResult.images.filter((item:ImageDetails) =>
      item.colors.some((color) => color.color === selectedColor)
    );
    dispatch(addToCart({ ...parsedResult, qty , selectedColor, filteredImages, selectedSize}));
    if(openSizeModal) {
      setOpenSizeModal(false)
    }
    setProduct({
      image: filteredImages[0].url[0],
      name: parsedResult.name,
      size: selectedSize,
      price: parsedResult.price,
      qty: qty,
    })
    setOpen(true)
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem("starsItems");
      if (savedCart) {
        dispatch({ type: 'cart/resetCart', payload: JSON.parse(savedCart) });
      }
    }
  }, [dispatch]);
  const increase = () => {
     setQty((prev:number) => prev + 1)
  }
  const decrease = () => {
    if(qty === 1) return
    setQty((prev:number) => prev - 1)
 }
// const [isLiked, setIsLiked] = useState(parsedUser?.saved?.includes(parsedResult._id));
// const [optimisticLike, switchOptimisticLike] = useOptimistic(isLiked, (state) => !state);



const handleToggleWishlist = async () => {
 // switchOptimisticLike({}); // This toggles the optimistic like state
  try {
      const response = await fetch("/api/wishlist/toggleWishlist", {
          method: "POST",
          body: JSON.stringify({
              userId: parsedUser._id,
              productId: parsedResult._id
          })
      });
      if (!response.ok) {
          throw new Error('Failed to complete this action');
      }
      router.refresh()
    //  setIsLiked((prev:boolean) => !prev); // Successful toggle, state is already updated optimistically
  } catch (error) {
      console.log(error);
     // switchOptimisticLike({}); // This toggles back to the previous state in case of error
  }
};




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
            <div className='flex border-b border-gray-200 pb-3 items-center justify-between '>
           
          <div className='flex flex-col gap-2 '>
              
              <h2 className='text-[24px] font-bold text-[#000]'>{parsedResult.price},95 €</h2>
              <p className='text-black-1'>Shipping: 9,95 €</p>
            </div>
            {/* wishlist trigger */}
            <div
    onClick={handleToggleWishlist}
    className='h-[70px] p-3 w-[80px] bg-white hover:shadow-2xl cursor-pointer shadow-lg rounded-[10px] flex items-center justify-center'
>
    {parsedUser?.saved?.includes(parsedResult._id) ? (
        <FaHeart size={30} color='#E00697' />
    ) : (
        <FaRegHeart size={30} color='#E00697' />
    )}
</div>



           {/* wishlist trigger */}
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
                          onClick={() => {
                            setSelectedColor(color.color)
                            setSelectedSize('')
                          }}
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
        {sizes.map((size: {
           size: string;
           stock: number
        }, index: number) => (
                  <button
                 onClick={() => setSelectedSize(size.size)}
                    key={index}
                    disabled={size.stock === 0}
                    className={`${
                      size.stock === 0 ? 'bg-gray-100 line-through select-none cursor-default  ' : ''
                    } ${selectedSize === size.size ? "!border-2 !border-green-1" : ""} outline-none border border-gray-300 cursor-pointer hover:border-black-1 rounded-[10px] w-[80px] flex items-center justify-center px-3 py-3`}
                  >
                    <p
                      className={`${
                        size.stock === 0 ? 'text-gray-400' : 'text-[#000]'
                      } capitalize font-semibold text-[15px] whitespace-nowrap`}
                    >
                      {size.size}
                    </p>
                  </button>
                ))}
        </div>
      </div>
    </div>
      
      <div className='flex flex-col'>
        <div className='flex items-center justify-between gap-2'>
          <Button 
            className=' flex flex-1 hover:bg-green-1 items-center
             justify-center flex-col gap-1.5 h-[50px] w-full
              text-white border-2 border-[#45ab69] bg-[#45ab69] rounded-[15px]'
            type='button'
            onClick={handleAddToCart}
          >
            <div className='flex items-center gap-1'>
              <RiShoppingBasketFill size={20} />
              <p className='uppercase font-bold text-[18px]'>add to cart</p>
            </div>
            <p className='text-sm font-normal capitalize'>delivery in 10 days</p>
          </Button>
         <div className="flex flex-[0.5] px-4  w-full h-[50px] rounded-[15px] items-center justify-between border">
              <FaMinus onClick={decrease} cursor="pointer" color="green" />
              <p className="text-sm font-semibold text-black-1 ">{qty} </p>
              <FaPlus onClick={increase} cursor="pointer" color="green" />
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

           <SizesModal selectedSize={selectedSize} setSelectedSize={setSelectedSize} handleClick={handleAddToCart} open={openSizeModal} setOpen={setOpenSizeModal} sizes={sizes} />
            <AccordionProductDetails name={parsedResult.name} description={parsedResult.description} image={parsedResult.images[0].url}  />
          </div>
          <CrossSellModal open={open} setOpen={setOpen} product={product} />
        </div>
  )
}

export default Details