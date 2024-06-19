"use client"
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { decreaseQty, increaseQty, removeFromCart } from "@/lib/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { ProductProps } from "@/types"
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import DeleteItemFromCartModal from "./DeleteItemFromCartModal"
import { useState } from "react"

const CartItems = () => {
    const { cartItems  } = useAppSelector((state:any) => state?.cart)
    const [productId,setProductId] = useState('')
    const [open,setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);
    const dispatch = useAppDispatch()
   
    const handleDeleteItemFromCart = () => {
      if (selectedProduct) {
          dispatch(removeFromCart({
              _id: selectedProduct._id,
              selectedColor: selectedProduct.selectedColor,
              selectedSize: selectedProduct.selectedSize,
          }));
          setOpen(false);
      }
  };
    const handleDecreaseQty = (item:ProductProps) => {
      if(item.qty === 1) return;
       dispatch(decreaseQty({
        _id: item._id, selectedColor: item.selectedColor, selectedSize: item.selectedSize
       }))
    }
    const handleIncreaseQty = (item:ProductProps) => {
      dispatch(increaseQty({
       _id: item._id, selectedColor: item.selectedColor, selectedSize: item.selectedSize
      }))
   }

  console.log(productId, "product ID")
  return (
    <>
    <AccordionItem  value={`item 1`}>
    <AccordionTrigger className='bg-white hover:no-underline shadow-md px-3 data-[state=closed]:!rounded-[15px]  rounded-tr-[15px]  rounded-tl-[15px] font-bold'>
         <p>My Cart ({(cartItems.length && cartItems?.length)} items) </p>
    </AccordionTrigger>
    <AccordionContent  className='bg-white px-3 py-4 rounded-br-[15px] rounded-bl-[15px] '>
      {cartItems.map((item:any) => (
        <div className="flex flex-col border-b gap-3 border-gray-300 pb-3 " key={item._id}>
 <div  className='flex  items-center justify-between w-full'>
           <div className='flex items-center gap-2'>
           
                 <img className='lg:w-[90px] w-[70px]  object-cover '
                  src={item.filteredImages[0].url[0]} alt={item.name} />
                   <div className='flex flex-col'>
                       <p className='text-black-1'>{item.name}</p>
                       <p className='text-base text-black-1'>Size: <span className="font-bold text-[#000] ">{item.selectedSize}</span> ( {item.qty} Pcs )</p>
                   </div>
              </div>
              <FaTrash
  onClick={() => {
    setSelectedProduct(item);
    setOpen(true);
  }}
  style={{ marginLeft: 10 }}
  className="cursor-pointer lg:hidden"
  size={18}
  color="red"
/>
              <div className='lg:flex hidden flex-col gap-2 items-end '>
                
              <FaTrash onClick={() => {
                                    setSelectedProduct(item);
                                    setOpen(true);
                                }} color="red" size={18} cursor="pointer" />
                 <div className="flex  justify-between items-center border border-gray-200 px-2 rounded-[10px] py-1.5">
                            <FaMinus onClick={() => handleDecreaseQty(item)} style={{ marginRight: 10 }}   className={`${item.qty === 1 ? "select-none cursor-default " : "cursor-pointer"}`} size={18} color="#00afaa" />
                            <div className="border-r border-l border-gray-100 px-7">
                              <p className="font-bold text-base text-black">{item.qty }</p>
                            </div>
                            <FaPlus onClick={()  => handleIncreaseQty(item)} style={{ marginLeft: 10 }} className="cursor-pointer"  size={18} color="#00afaa" />
                          </div>
                  <div className="flex flex-col justify-end">
                  <h4 className="font-semibold text-[17px] ">{item.price * item.qty},95 €
                  </h4>
                  <p className="text-gray-400 line-through text-sm ">{item.prevPrice * item.qty},95 £ </p>
                  </div>
              </div>
           </div>
           <div className="lg:hidden flex items-center justify-between">
           <div className="flex  justify-between items-center border border-gray-200 px-2 rounded-[10px] py-1.5">
                            <FaMinus  onClick={() => handleDecreaseQty(item)} style={{ marginRight: 10 }}  className={`${item.qty === 1 ? "select-none cursor-default " : "cursor-pointer"}`} size={18} color="#00afaa" />
                            <div className="border-r border-l border-gray-100 px-7">
                              <p className="font-bold text-base text-black">{item.qty}</p>
                            </div>
                            <FaPlus onClick={()  => handleIncreaseQty(item)} style={{ marginLeft: 10 }} className="cursor-pointer"  size={18} color="#00afaa" />
                          </div>
                          <div className="flex flex-col ">
                  <h4 className="font-semibold text-[17px] ">{item.price},95 €
                  </h4>
                  <p className="text-gray-400 line-through text-sm ">{item.prevPrice},95 £ </p>
                  </div>
           </div>
           <DeleteItemFromCartModal
  handleClick={handleDeleteItemFromCart}
  open={open}
  setOpen={setOpen}
  title={selectedProduct?.name || ''}
  qty={selectedProduct?.qty || 0}
  image={selectedProduct?.filteredImages[0]?.url[0] || ''}
  selectedSize={selectedProduct?.selectedSize || ''}
/>
        </div>
          
      ))}
        <div>
      
            <div className='pt-3 '>
                 <p className='text-base font-normal '>Earn <span className='text-primary-1 font-medium'>4 EUR</span>  - Loyalty points</p>
            </div>
        </div>
    </AccordionContent>
  </AccordionItem>
  
  </>
  )
}

export default CartItems