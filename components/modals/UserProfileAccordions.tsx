"use client"
import React, {FormEvent, useEffect, useState} from 'react'
import DeleteModal from "@/components/modals/DeleteModal"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
import { Button } from "../../components/ui/button";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
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
 const UserProfileAccordions = ({userId, currentUser, shippings}: {
  userId: string;
  currentUser: string;
  shippings: string
 }) => {
  const parsedUser = JSON.parse(currentUser)
  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState<number>();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 125 }, (_, i) => currentYear - i); // last 125 years
  const parsedShippings = JSON.parse(shippings)
  const parsedUserId = JSON.parse(userId)
  const router = useRouter()
    const [open,setOpen] = useState(false)
    const [pending,setPending] = useState(false)
    const [type,setType] = useState("")
    const [itemId,setItemId] = useState('')
    const [openDeleteModal,setOpenDeleteModal] = useState(false)
    const pathname = usePathname()
    const [isLoading,setIsLoading] = useState(false)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [phoneNumber,setPhoneNumber] = useState<number>()
    const [country,setCountry] = useState("")
    
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

    const handleUpdateUserInfo = async(e:FormEvent) =>  {
      e.preventDefault()
      setIsLoading(true)
      try {
         const response = await fetch("/api/users/updateInfo", {
           method: "PUT",
           body: JSON.stringify({
              firstName,
              lastName,
              phoneNumber,
              country,
            
              birthDay: {
                day: day,
                month: month,
                year: year
              }
           })
         })
         if(!response.ok) {
          throw new Error('Failed to update profile info')
         }
         // toast;
      } catch (error) {
         console.log(error)
      }finally {
        setIsLoading(false)
      }
    }
    useEffect(() =>{
        if(parsedUser !== null) {
            setFirstName(parsedUser?.firstName)
            setLastName(parsedUser.lastName)
            setPhoneNumber(parsedUser.phoneNumber)
            setCountry(parsedUser.country)
            setDay(Number(parsedUser.birthDay.day))
            setMonth(parsedUser.birthDay.month)
            setYear(Number(parsedUser.birthDay.year))
        }
    }, [])
  return (
    <>
    <Accordion  type="multiple" >
 
    <AccordionItem className="mb-4"  value={`item 1}`}>
    <AccordionTrigger  className='bg-white shadow-md px-3 py-4 rounded-tr-[17px] rounded-tl-[17px] font-bold'>Personal data </AccordionTrigger>
    <AccordionContent className='px-3 flex rounded-br-[17px] rounded-bl-[17px] flex-col gap-3 py-4 bg-white'>
          <form onSubmit={handleUpdateUserInfo} className="flex flex-col gap-5">
               <div className="flex flex-col gap-2 max-w-[600px] ">
                  <label className="font-medium text-black text-sm" htmlFor="firstName">First Name</label>
                   <input placeholder="Enter yout first Name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName" type="text" 
                     className="outline-none border-[2px] border-gray-1 rounded-[10px] px-4 py-3 "
                    />
                   
                   
               </div>
               <div className="flex flex-col gap-2 max-w-[600px]">
                  <label className="font-medium text-black text-sm" htmlFor="lastName">Last Name</label>
                   <input placeholder="Enter your last Name"  
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="outline-none border-[2px] border-gray-1 rounded-[10px] px-4 py-3 " id="lastName" type="text" />
               </div>
               <div className="flex flex-col gap-2 max-w-[600px]">
                  <label className="font-medium text-black text-sm"  

                   htmlFor="Phone">Phone</label>
                   <input placeholder="Enter your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(Number(e.target.value))}
                     className="outline-none border-[2px] border-gray-1 rounded-[10px] px-4 py-3 " id="Phone" type="number" />
               </div>
               <div className="flex flex-col gap-2 max-w-[600px]">
                  <label className="font-medium text-black text-sm" htmlFor="country">Country</label>
                   <input placeholder="where do you live"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                     className="outline-none border-[2px] border-gray-1 rounded-[10px] px-4 py-3 " id="country" type="text" />
               </div>
               <div>
               <label className="font-medium  mb-5 text-black text-sm" htmlFor="country">BirthDay</label>
               <div className="flex items-center mt-4 max-w-[600px]  gap-5">
                   <div className="">
                   <label className="lg:flex-1 font-medium text-black text-sm lg:w-full">
                Day:
                <Select onValueChange={(value:any) => setDay(value)}>
                    <SelectTrigger className="max-w-full focus-visible:ring-offset-0 focus-visible:ring-offset-transparent lg:w-[150px] focus-visible: lg:flex-1 text-[#000]">
                        <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#fff] lg:flex-1 text-black-1">
                        {days.map((d) => (
                            <SelectItem className="hover:bg-gray-100" key={d} value={d.toString()}>{d}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </label>
                   </div>
              
              
         <div>
         <label className="lg:flex-1 font-medium text-black text-sm lg:w-full">
                Month:
                <Select onValueChange={(value:string) => setMonth(value)}>
                    <SelectTrigger className="max-w-full focus-visible:ring-offset-0 focus-visible:ring-offset-transparent lg:w-[150px]  lg:flex-1 text-[#000]">
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent className="bg-white lg:flex-1 text-black-1">
                        {months.map((m, idx) => (
                            <SelectItem className="hover:bg-gray-100" key={m} value={(idx + 1).toString()}>{m}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </label>
         </div>
           
           <div>
           <label className="lg:flex-1 font-medium text-black text-sm lg:w-full ">
                Year:
                <Select onValueChange={(value:any) => setYear(value)}>
                    <SelectTrigger className="max-w-full focus-visible:ring-offset-0 focus-visible:ring-offset-transparent lg:w-[150px] focus-visible: lg:flex-1 text-[#000]">
                        <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent className="bg-white lg:flex-1 text-black-1">
                        {years.map((y) => (
                            <SelectItem className="hover:bg-gray-100" key={y} value={y.toString()}>{y}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </label>
           </div>
           

           </div>
               </div>
             
           
           <Button className='bg-green-1 shadow-xl mt-4 hover:opacity-[0.8] text-base font-medium  text-white w-[300px] h-[45px] flex items-center justify-center gap-2 rounded-[15px] ' type="submit">
               {isLoading ? "Loading..." : <>
                  
                   <p className="tracking-widest">Save Changes</p>
                </>}
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
          <div className="flex items-center gap-1 ">
            <p className="font-bold  text-[#000] "> {item.lastName} {item.firstName} - <span className='text-base font-normal text-black-1'>
            {item.zipCode}, {item.address}, {item.phoneNumber}, {item.city}, {item.country}
              </span> </p>
          
           
           
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
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
            <p className='text-red-400 font-medium text-[15px] '>You don`t have a delivery address saved yet!</p>
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