"use client"
import React, {useState} from 'react'
import DeleteModal from "@/components/modals/DeleteModal"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
import { Button } from "../../components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddShippingModal from './../modals/AddShippingModal';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
type shippingsProps = {

    firstName: string;
     lastName: string;
     _id: string;
     phoneNumber: string;
     country: string;
     city: string;
     zipCode: string;
     address: string;
 
}
 const UserProfileAccordions = ({userId, shippings}: {
  userId: string;
  shippings: string
 }) => {
  const parsedShippings = JSON.parse(shippings)
  const parsedUserId = JSON.parse(userId)
  const router = useRouter()
    const [open,setOpen] = useState(false)
    const [pending,setPending] = useState(false)
    const [type,setType] = useState("")
    const [itemId,setItemId] = useState('')
    const [openDeleteModal,setOpenDeleteModal] = useState(false)
    const pathname = usePathname()
    const handleDeleteShipping = async() => {
      setPending(true)
        try {
          const response = await fetch("/api/shipping/deleteShipping", {
             method: "DELETE",
             body: JSON.stringify({
              shippingId: itemId,
               userId: parsedUserId ,path: pathname
             })
          })
          if(!response.ok) {
             throw new Error('Failed to delete shipping')
          }
          setOpenDeleteModal(false)
          router.refresh()
        } catch (error) {
           console.log(error)
        }finally {
          setPending(false)
        }
    }
  return (
    <>
    <Accordion  type="multiple" >
 
    <AccordionItem className="mb-4"  value={`item 1}`}>
    <AccordionTrigger  className='bg-white shadow-md px-3 py-4 rounded-tr-[17px] rounded-tl-[17px] font-bold'>Personal data </AccordionTrigger>
    <AccordionContent className='px-3 flex rounded-br-[17px] rounded-bl-[17px] flex-col gap-3 py-4 bg-white'>
          <form className="flex flex-col gap-5">
               <div className="flex flex-col gap-2 max-w-[600px] ">
                  <label className="font-medium text-black text-sm" htmlFor="firstName">First Name</label>
                   <input placeholder="Joe" className="outline-none border-[2px] border-gray-1 rounded-[10px] px-4 py-3 " id="firstName" type="text" />
               </div>
               <div className="flex flex-col gap-2 max-w-[600px]">
                  <label className="font-medium text-black text-sm" htmlFor="lastName">Last Name</label>
                   <input placeholder="Doe"  className="outline-none border-[2px] border-gray-1 rounded-[10px] px-4 py-3 " id="lastName" type="text" />
               </div>
               <div className="flex flex-col gap-2 max-w-[600px]">
                  <label className="font-medium text-black text-sm" htmlFor="Phone">Phone</label>
                   <input placeholder="Enter your Phone Number"  className="outline-none border-[2px] border-gray-1 rounded-[10px] px-4 py-3 " id="Phone" type="number" />
               </div>
              
               <Button className="bg-[#11a545] w-fit px-5 min-w-[150px] py-4 text-white rounded-[15px] " type="submit">
                   Save Changes
               </Button>
          </form>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem  value={`item 2}`}>
    <AccordionTrigger className='bg-white rounded-tr-[17px] shadow-md rounded-tl-[17px] px-3 font-bold'>Delivery & Invoice datas</AccordionTrigger>
    <AccordionContent className='px-3 rounded-br-[17px] rounded-bl-[17px] flex flex-col gap-3 py-4 bg-white'>
       <div>
       {parsedShippings.length > 0 ? parsedShippings.map((item:shippingsProps) => (

        <article key={item._id} className="flex items-center border-b py-2.5 border-gray-200 justify-between">
          <div className="flex items-center gap-1 text-base font-normal text-black-1">
            <p className="font-bold text-[#000] ">{item.lastName} {item.firstName} - </p>
            {item.zipCode}, {item.address}, {item.phoneNumber}, {item.city}, {item.country}
            <img src="https://stcnt.starshiners.ro/img/flags_16/ro.gif" alt="flag" />
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/client/address/edit/${item._id}`}>
              <FaEdit  color="green" size={16} />
            </Link>
           
            <FaTrash  cursor="pointer" onClick={() => {
               setItemId(item._id)
              setOpenDeleteModal(true)
             
            }} color="red" size={16} />
          </div>
        </article>
      )): (
         <div>
            no shipping address
         </div>
      )}
       </div>
         
        
         <Button onClick={() => {
          setOpen(true)
          setType("create")
         }} className="bg-primary-1 uppercase shadow-lg w-fit px-5 min-w-[150px] py-4 text-white rounded-[15px] " type="button"  >
             Add new address
         </Button>
    </AccordionContent>
  </AccordionItem>

 
</Accordion>
<AddShippingModal type={type} _id={parsedUserId} open={open} setOpen={setOpen} />
<DeleteModal loading={pending} open={openDeleteModal} setOpen={setOpenDeleteModal} handleClick={handleDeleteShipping} />
</>
  )
}

export default UserProfileAccordions