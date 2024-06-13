import ProfileTabs from "@/components/ProfileTabs"
import ProfileTop from "@/components/ProfileTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FormEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const page = () => {
  // const handleSavePersonalData = async(e:FormEvent) =>{
  //      e.preventDefault()
  //      try {
        
  //      } catch (error) {
  //         console.log(error)
  //      }
  // }
  return (
    <section className="bg-[#eaecf0] py-3 px-3  w-full ">
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
           <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
                <ProfileTop title="Member Profile" 
                 links={[
                   {
                     name: "Home",
                     href: "/"
                   },
                   {
                    name: "My Account",
                    href: "/"
                  },
                  {
                    name: "Account settings",
                    href: "/"
                  }
                 ]}
                text="Welcome to StarShinerS! Here you can edit your personal information, personalize your profile and change your password!" />
                 <div className="flex w-full  flex-col gap-4">
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
            <div className="flex items-center border-b py-2.5 border-gray-200 justify-between">
                   <div className="flex items-center gap-1 text-base font-normal text-black-1"><span className="font-bold text-[#000] ">hmamou soufiane - </span> 50000, darb imam boussayri, Meknes, Morocco, România <img src="https://stcnt.starshiners.ro/img/flags_16/ro.gif" alt="flag" /></div>
                   <div className="flex items-center gap-2">
                        <FaEdit color="green" size={16} />
                        <FaTrash color="red" size={16} />
                   </div>
            </div>
            <div className="flex items-center border-b py-2.5  border-gray-200 justify-between">
                   <div className="flex items-center gap-1 text-base font-normal text-black-1"><span className="font-bold text-[#000] ">hmamou soufiane - </span> 50000, darb imam boussayri, Meknes, Morocco, România <img src="https://stcnt.starshiners.ro/img/flags_16/ro.gif" alt="flag" /></div>
                   <div className="flex items-center gap-2">
                        <FaEdit color="green" size={16} />
                        <FaTrash color="red" size={16} />
                   </div>
            </div>
            <Button className="bg-primary-1 uppercase shadow-lg w-fit px-5 min-w-[150px] py-4 text-white rounded-[15px] " type="button"  >
                Add new address
            </Button>
       </AccordionContent>
     </AccordionItem>
  
    
</Accordion>

                 </div>
                <div className="rounded-[17px] w-full bg-white shadow-lg flex flex-col p-5 ">
                     <h2 className="font-bold mb-2 text-[#000] text-[20px] ">Unsubscribe Newsletter</h2>
                     <p className="text-sm text-black-1 font-normal ">If you unsubscribe from the Newsletter, you won`t be aware of StarShinerS SPECIAL OFFERS. Unsubcribe <span> <Link className="underline text-blue-500" href="/newsletter/unsubscribe">here.</Link></span></p>
                </div>


            </div>
        </div>
    </section>
  )
}

export default page