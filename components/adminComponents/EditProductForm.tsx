"use client"
import React, { FormEvent, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'

const EditProductForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [name,setName] = useState<string>('')
    const [description,setDescription] = useState<string>('')
    const [images,setImages] = useState<any[]>([])
    const [price,setPrice] =  useState<number | null>(null)
    const [prevPrice,setPrevPrice] = useState<number | null>(null)
    const [category,setCategory] = useState<string>("")
    const [position,setPosition] = useState<string>('')
    const [isNew,setIsNew] = useState<boolean>(false)
    const pathname = usePathname()
    const router = useRouter()
    const handleSubmit = async(e:FormEvent)  => {

          e.preventDefault()
          try {
             const res = await fetch('/api/products/updateProduct', {
                method: "PUT",
                body: JSON.stringify({
                    
                })
             })
             if(!res.ok) {
                toast({
                    title: "something went wrong",
                    variant: "destructive"
                })
                return
             }
             setName("")
             setDescription('')
             setPrice(null)
             setPrevPrice(null)
             setCategory('')
             setPosition('')
             router.back()
            return toast({
                title: "product has been updated successfuly",
                variant: "default"
             })


          } catch (error) {
            console.log(error)
          }
    }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[700px] ">
                  <div className='flex flex-col gap-2'>
                       <label htmlFor="name">Product Name</label>
                       <textarea value="" onChange={(e) => {}} rows={5} name="name" id="name" />
                  </div>
                  <div className='flex flex-col gap-2'>
                       <label htmlFor="description">Product Description</label>
                       <textarea value="" onChange={(e) => {}} rows={5} name="description" id="description" />
                  </div>
                  <div className='flex flex-col gap-2'>
                       <label htmlFor="price">Product Price</label>
                       <input type="number" value="" onChange={(e) => {}} name="price" />
                  </div>
                  <div className='flex flex-col gap-2'>
                       <label htmlFor="PrevPrice">Product PrevPrice</label>
                       <input type="number" value="" onChange={(e) => {}}  name="prevPrice" />
                  </div>
                  <div className='flex flex-col gap-2'>
                       <label htmlFor="category">Product Category</label>
                       <input value="" onChange={(e) => {}}  name="category" />
                  </div>
                  <div className='flex flex-col gap-2'>
                       <label htmlFor="Position">Product Position</label>
                       <input value="" onChange={(e) => {}}  name="Position" />
                  </div>
                  <div className='flex flex-col gap-2'>
                       <label htmlFor="PrevPrice">is New Product</label>
                       <input value="" type="checkbox" onChange={(e) => {}}  name="prevPrice" />
                  </div>
                  <Button className='bg-primary-1 rounded-[10px] px-3 py-2 w-full ' type="submit">Update Product</Button>
             </form>
  )
}

export default EditProductForm