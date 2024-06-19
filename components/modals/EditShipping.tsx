"use client"
import React, { useState } from "react"
import {
    Form,
    FormControl,
   
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../../components/ui/form" 
  import { ShippingAddressValidationSchema} from "../../lib/FormValidation"
  import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/ui/input"
import { useForm } from "react-hook-form"
import { FaCheck } from "react-icons/fa"
import { z } from "zod"
import { usePathname, useRouter } from "next/navigation"
import { useAppDispatch } from "../../lib/hooks"
import { Button } from "../ui/button"
  const EditShipping = ({shipping,type,userId}:  {
    shipping?: string;
    type: string;
    userId?: string;
  }) => {

    const parsedShipping =  type === "edit" ? JSON.parse(shipping as string) : null
    const parsedUserId = JSON.parse(userId as string)
    const [loading,setLoading] = useState(false)
   const pathname = usePathname()
   const dispatch = useAppDispatch()
   const router = useRouter()
   const form = useForm<z.infer<typeof ShippingAddressValidationSchema>>({
    resolver: zodResolver(ShippingAddressValidationSchema),
    defaultValues: {
      firstName: parsedShipping?.firstName || "",
      lastName: parsedShipping?.lastName || "",
      address: parsedShipping?.address || "",
      phoneNumber: parsedShipping?.phoneNumber || "",
      country: parsedShipping?.country || "",
      city: parsedShipping?.city || "",
      zipCode: parsedShipping?.zipCode || ""
    },
  })
  async function onSubmit(values: z.infer<typeof ShippingAddressValidationSchema>) {
    setLoading(true)
    if(type === "edit") {
      try {
        const response = await fetch("/api/shipping/updateShipping", {
          method: "PUT",
          body: JSON.stringify({
             shippingId: parsedShipping._id,
             address:  values.address,
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

        router.refresh()
      
        // success toast
        // save shipping addresses in localstorage 
     } catch (error) {
        console.log(error)
     }finally {
      setLoading(false)
     }
    }else if(type === "create")  {
      try {
        const response = await fetch("/api/shipping/addShipping", {
          method: "POST",
          body: JSON.stringify({
             userId: parsedUserId,
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
       
        // success toast
        // save shipping addresses in localstorage 
     } catch (error) {
        console.log(error)
     }finally {
      setLoading(false)
     }
    }
    
    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="  w-full space-y-4">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>FirstName</FormLabel>
            <FormControl>
              <Input className="input-css py-4" placeholder="Enter your first Name" {...field} />
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
              <Input className="input-css py-4" placeholder="Enter your last Name" {...field} />
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
              <Input className="input-css py-4" placeholder="Enter your Phone Number" {...field} />
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
              <Input className="input-css py-4" placeholder="Where do you live ?" {...field} />
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
              <Input className="input-css py-4" placeholder="In Which city do you live ?" {...field} />
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
              <Input className="input-css py-4" placeholder="Enter your address" {...field} />
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
              <Input className="input-css py-4" placeholder="Zip code" {...field} />
            </FormControl>
            
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <Button className="flex rounded-[15px] h-[45px]  hover:opacity-[0.8] items-center justify-center
       gap-2 w-full bg-green-1 shadow-lg text-white " type="submit">
        {loading ? "Loading..." : <> 
          <FaCheck size={18} />
          <p className="font-semibold text-[18px]  tracking-wider ">Save</p>
        </> }  
      </Button>
    </form>
  </Form>
  )
}

export default EditShipping