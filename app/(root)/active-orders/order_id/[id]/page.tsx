import { getOrderById } from '@/actions/product.actions'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async({params}: {
    params: {
        id: string
    }
}) => {
  const order = await getOrderById({id: params.id})
  if(order == null) return notFound()
  return (
    <div>
         {order.id}
    </div>
  )
}

export default page