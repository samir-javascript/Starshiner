import EditProductForm from "../../../../components/adminComponents/EditProductForm"
import {getProductById} from "../../../../actions/product.actions"
import React from 'react'
import { notFound } from "next/navigation"

const page = async({params}: {params: {id:string}}) => {
  const product = await getProductById({productId:params.id})
  if(!product) return notFound()
  return (
    <div className='w-full bg-white py-7 px-3 '>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-5 '>
             <h2 className='font-semibold text-[#000] text-[18px] '>Edit Product</h2>
             <EditProductForm product={JSON.stringify(product)} />
        </div>
    </div>
  )
}

export default page