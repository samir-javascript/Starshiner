"use client"

import { usePathname, useRouter } from "next/navigation"
import { FaEdit, FaTrash } from "react-icons/fa"

const ProductListTable = ({products}: {
    products: string
}) => {
    const pathname = usePathname()
    const router = useRouter()
    const parsedProducts = JSON.parse(products)
    const handleDeleteProduct = async(productId:string) => {
        if(window.confirm("are you sure you want to delete this product!")) {
            try {
                const response = await fetch('/api/products/deleteProduct', {
                    method: "DELETE",
                    body: JSON.stringify({
                        productId,
                        path: pathname
                    })
                })
                if(!response.ok) {
                   alert('failed to delete this product') 
                   return
                }
                router.refresh()
                // toast
            } catch (error) {
                console.log(error)
            }
        }
       
    }
  return (
    <>
        <table className='mt-4'>
                        <thead style={{borderCollapse: "inherit"}} className='bg-light-2'>
                             <tr>
                             <th className='p-2 border'>Image</th>
                                 <th className='p-2 border'>Name</th>
                                 <th className='p-2 border'
                                 >
                                 Category</th>
                                 <th className='p-2 border'>
                                 Price</th>
                                 <th className='p-2 border'>
                                 Actions</th>
                             </tr>
                        </thead>
                        <tbody className='w-full text-center'>
                             {parsedProducts.map((item: {
                                _id: string;
                                name: string;
                                price: number;
                                category: string;
                                images: {
                                    url: string[]
                                }[]
                             }) => (
                                <tr key={item._id} className=' border'>
                                <td className='p-3 border flex items-center justify-center'> 
                                     <img className='w-[80px] object-contain rounded-[10px] ' src={item.images[0].url[0]} alt={item.name} />
                                 </td>
                                <td className='p-3 border lg:max-w-[300px] '>
                                    <p className="text-base text-[#222] font-medium "> {item.name}</p>
                                </td>
                               
                                <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.category}</p> </td>
                                <td className='p-3 border  '> <p className="text-base text-[#222] font-medium ">{item.price} £</p>  </td>
                                <td className="">
                                     <div className="flex  w-full items-center gap-1">
                                         <FaEdit className="mx-auto cursor-pointer" color="green" />
                                         <FaTrash onClick={() => handleDeleteProduct(item._id)} className="mx-auto cursor-pointer" color="red" />
                                     </div>
                                </td>
                            </tr>
                             ))}
                            
                           
                        </tbody>
                     </table>
    </>
  )
}

export default ProductListTable