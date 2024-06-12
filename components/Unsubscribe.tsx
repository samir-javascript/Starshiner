"use client"

import { FormEvent } from "react"
import { Button } from "./ui/button"

const Unsubscribe = () => {
    const handleSubmit = async(e:FormEvent)=> {
         e.preventDefault()
         try {
            
         } catch (error) {
             console.log(error)
         }
    }
  return (
    <div className="bg-white shadow-lg rounded-[15px] mt-3 p-4 ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="max-w-[600px] flex flex-col gap-2 "> 
               <label className="text-[#000] font-bold text-sm " htmlFor="email">Email Address <span className="text-red-500">*</span></label>
               <input className="border-[2px] outline-none rounded-[10px] border-primary-1 px-5 py-3 " placeholder="Your e-mail address" type="text" />
          </div>
           
             <Button className="bg-primary-1 uppercase shadow-lg w-fit px-5 min-w-[250px] py-4 text-white rounded-[15px] " type="button">
                I Unsubscribe now
             </Button>
        </form>
    </div>
  )
}

export default Unsubscribe