
  import {
    AlertDialog,
  
    AlertDialogContent,
   
  } from "../ui/alert-dialog"
import {  FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

  
const CrossSellModal = ({open,setOpen,product} : {
    open: boolean;
    setOpen: (v:boolean) => void;
    product: {
        name:string;
        qty: number;
        image: string | null;
        price: number;
        size: string;
    }
}) => {
  const isWishlist = false;
  const isCategory = false
  const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(false)} >
   
    <AlertDialogContent className="bg-white !p-0 h-[90%]
     !m-0 !rounded-[15px]
      z-[999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999] ">
         <div className="shadow-md p-4">
   
   <FaTimes color="gray" cursor="pointer" className="" onClick={()=> setOpen(false) } />

</div>
     <div className="overflow-y-scroll">
     <div className="px-4 py-2.5 w-full  border-b border-gray-200 ">
    <h2 className='text-[#000] font-bold text-[18px] mb-3  '>The item has been added to the cart</h2>
    <div className='flex items-center gap-2'>
           
           <img className='lg:w-[90px] w-[70px]  object-cover '
            src={product.image || ""} alt={product.name} />
             <div className='flex flex-col'>
                 <p className='text-black-1'>{product.name}</p>
                 <p className='text-base text-black-1 '>Size: <span className="font-bold text-[#000] ">{product.size}</span> ( {product.qty} Pcs )</p>
                 <p className='text-base text-[#000] font-medium'>{formattedPrice} * {product.qty} </p>
             </div>
        </div>
      <Link href="/cart"> 
      <Button type="button"
            className='bg-green-1 mt-4  shadow-lg uppercase text-white font-medium text-base rounded-[15px]  w-full  '
            >
               SEE YOUR CART
           </Button>
      </Link>
          
          
       
    </div>
    <div className="flex flex-col   pt-3">
    <h2 className='text-[#000] px-4 font-bold text-[18px] mb-3  '>Customers also bought</h2>
    <div className="flex items-center gap-2 flex-wrap w-full justify-center">
          {[0,1,2,3,4].map((_,i) => (
              <Link key={i} href={`/product/5454`} className='flex flex-col md:w-[230px] max-sm:w-[161px] w-[190px] '>
              <div className='relative'>
                <img className='w-full'
               src={"https://photos-de.starshiners.ro/107176/679028-372x558-lo.jpg"}
                alt={""}/>
               {isWishlist  &&  <div  className='absolute cursor-pointer top-0 p-3 right-0'>
                    <FaTimes className='hover:text-gray-400 text-gray-500'  />
                </div>} 
               
                  
              
              </div>
                                  
                                    <article className='bg-white  p-3 flex flex-col items-center justify-center'>
                                         <p className="line-clamp-1 text-black-1 text-sm font-normal ">
Dress cotton accessorized with belt cloche </p>
                                         <div className="flex items-center gap-1">
                                             {["M","S", "L", "XL","2XL"].map(((x:string) => (
                                                 <p className="text-[#121212] text-sm font-normal" key={x}>{x}</p>
                                             )))}
                                         </div>
                                         <p className="font-bold text-black text-base ">49,99 £ </p>
                                    </article>
                                 </Link>
          ))}
    </div>
    </div>


     </div>
 

    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default CrossSellModal