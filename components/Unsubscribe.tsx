"use client"

import { FormEvent, useState } from "react"
import { Button } from "./ui/button"

const Unsubscribe = () => {
  const [email, setEmail] = useState('');
    const [loading,setLoading] =  useState(false)
    const [message, setMessage] = useState('');
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if(!email) return
       setLoading(true)
       try {
        const res = await fetch('/api/unsibscribe', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
    
        const data = await res.json();
    
        if (data.error) {
          setMessage(data.error);
        } else {
          setMessage('you have unsubscribed successfuly!');
        }
        setEmail('')
       } catch (error) {
         console.log(error)
       }finally {
        setLoading(false)
       }
      
      };
  return (
    <div className="bg-white shadow-lg rounded-[15px] mt-3 p-4 ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="max-w-[600px] flex flex-col gap-2 "> 
               <label className="text-[#000] font-bold text-sm " htmlFor="email">Email Address <span className="text-red-500">*</span></label>
               <input className="border-[2px] outline-none rounded-[10px] border-primary-1 px-5 py-3 " 
                placeholder="Your e-mail address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" />
          </div>
           
             <Button className="bg-primary-1 uppercase shadow-lg w-fit px-5 min-w-[250px] py-4 text-white rounded-[15px] " type="button">
                {loading ? "Loading..." :  "I Unsubscribe now"}
             </Button>
        </form>
    </div>
  )
}

export default Unsubscribe