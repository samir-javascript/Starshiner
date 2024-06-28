import EditProductForm from '@/components/adminComponents/EditProductForm'

import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-white py-7 px-3 '>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-5 '>
             <h2 className='font-semibold text-[#000] text-[18px] '>Edit Product</h2>
             <EditProductForm />
        </div>
    </div>
  )
}

export default page