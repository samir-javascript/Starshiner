"use client"
import React, { useState } from "react"
import { ShippingAddressValidationSchema} from "@/lib/FormValidation"
import { useAppDispatch } from "@/lib/hooks"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "../../components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
 
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { FaCheck } from "react-icons/fa"
import { usePathname } from "next/navigation"



const AddShippingModal = ({open,setOpen,_id,type}: {
    open: boolean;
    type: string;
   _id: string;
    setOpen: (v:boolean)=> void
}) => {
   // 1. Define your form.
   const [loading,setLoading] = useState(false)
   const pathname = usePathname()
   const dispatch = useAppDispatch()
   const form = useForm<z.infer<typeof ShippingAddressValidationSchema>>({
    resolver: zodResolver(ShippingAddressValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber:"",
      country: "",
      city: "",
      zipCode: ""
    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof ShippingAddressValidationSchema>) {
  setLoading(true)
   try {
      const response = await fetch("/api/shipping/addShipping", {
        method: "POST",
        body: JSON.stringify({
           userId: _id,
           address: values.address,
           firstName: values.firstName,
           lastName: values.lastName,
           phoneNumber: values.phoneNumber,
           city: values.city,
           zipCode: values.zipCode,
           country: values.country,
           path: pathname
        })
      })
      if(!response.ok) {
          throw new Error('something bad happened')
      }
      form.reset()
      setOpen(false)
      // success toast
      // save shipping addresses in localstorage 
   } catch (error) {
      console.log(error)
   }finally {
    setLoading(false)
   }
  }

  return (
    <Dialog  open={open} onOpenChange={() => setOpen(false)} >
    
    <DialogContent className="bg-white h-[90%] !p-0 !m-0 !rounded-[15px]  ">
      <DialogHeader>
        <DialogTitle className="text-[20px] p-5 ">Add another address</DialogTitle>
      </DialogHeader>
      <div className=" flex flex-col overflow-y-scroll h-[85%] ">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" px-5 space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input className="input-css py-4" placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LastName</FormLabel>
              <FormControl>
                <Input className="input-css py-4" placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input className="input-css py-4" placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input className="input-css py-4" placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input className="input-css py-4" placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input className="input-css py-4" placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZipCode</FormLabel>
              <FormControl>
                <Input className="input-css py-4" placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-1">
            <input className="!outline-none focus:border-none" type="checkbox" />
            <p className="font-medium text-[14px] text-black-1">Make this address my default address</p>
        </div>
        <Button className="flex rounded-[15px] h-[45px]  hover:opacity-[0.8] items-center justify-center
         gap-2 w-full bg-green-1 shadow-lg text-white " type="submit">
          {loading ? "Loading..." : <> 
            <FaCheck size={18} />
            <p className="font-semibold text-[18px]  tracking-wider ">Save</p>
          </> }  
        </Button>
      </form>
    </Form>
      </div>
    </DialogContent>
  </Dialog>
  
  )
}

export default AddShippingModal