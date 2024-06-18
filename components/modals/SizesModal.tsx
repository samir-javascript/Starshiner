import {
    AlertDialog,
  
    AlertDialogContent,
   
  } from "../ui/alert-dialog"
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from '../ui/button';
import { RiShoppingBasketFill } from "react-icons/ri";
const SizesModal = ({open,setOpen,sizes, setSelectedSize, selectedSize, handleClick }: {
    open: boolean;
    setOpen: (v:boolean)=> void;
    handleClick: () => void;
    selectedSize: string;
    setSelectedSize: (v:string) => void;
    sizes: {
      size: string;
      stock: number;
    }[]
}) => {
  return (
    <AlertDialog open={open} onOpenChange={()=> setOpen(false)} >
    
    <AlertDialogContent className='bg-white !p-0 !m-0 !rounded-[15px] '>
      <div className="shadow-md p-4">
     
            <FaTimes color="gray" cursor="pointer" onClick={()=> setOpen(false) } />
     
      </div>
         <div className='flex px-4  shadow-md py-2.5 flex-col'>
              <h2 className='text-[#000] font-bold text-[24px]  '>Choose your size</h2>
         </div>
         <div className='flex flex-col px-4 py-2.5  gap-2'>
              <h4>Available sizes: </h4>
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
        <Button 
            className=' flex flex-1 hover:bg-green-1 items-center
             justify-center flex-col gap-1.5 h-[50px] w-full
              text-white border-2 border-[#45ab69] bg-[#45ab69] rounded-[15px]'
            type='button'
            onClick={handleClick}
          >
            <div className='flex items-center gap-1'>
              <RiShoppingBasketFill size={20} />
              <p className='uppercase font-bold text-[18px]'>add to cart</p>
            </div>
            <p className='text-sm font-normal capitalize'>delivery in 10 days</p>
          </Button>
         </div>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default SizesModal