"use client"
import { useState } from 'react';
import { Button } from './ui/button'

const Email = ({newsLetter = false}) => {
    const [email, setEmail] = useState('');
    const [loading,setLoading] =  useState(false)
    const [message, setMessage] = useState('');
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        if(!email) return
       setLoading(true)
       try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
    
        const data = await res.json();
    
        if (data.error) {
          setMessage(data.error);
        } else {
          setMessage('Thank you for subscribing!');
        }
        setEmail('')
       } catch (error) {
         console.log(error)
       }finally {
        setLoading(false)
       }
      
      };
  return (
    <div className={`${!newsLetter ? "max-w-[700px] mx-auto" : "max-w-[600px] mt-5 "} flex  flex-col px-5 gap-2`}>
  {!newsLetter && <h2 className="text-black font-bold text-[18px] mb-3  ">	
    SUBSCRIBE AND GET <span className='text-red-500'>10% DISCOUNT</span> ON YOUR NEXT ORDER!</h2>} 
<input value={email} required onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Your e-mail address' className='border-[2px] border-primary-1 outline-none  bg-white px-3 py-2.5 rounded-[15px] ' />
<div className='flex items-center gap-1 mt-3'>
    <input  type="checkbox"  />
    <p className='text-[12px] text-black '>I agree with <span className='text-blue-400 underline'>terms and conditions</span> and <span className='text-blue-400 underline'>Data Security Policy</span></p>
</div>
<Button onClick={handleSubmit} className='w-full py-3 hover:opacity-[0.9] shadow-lg bg-primary-1 uppercase text-white font-semibold rounded-[15px] ' type="button">
  {loading ? "Loading..." : "I subscribe now"}  
</Button>
{message && <p>{message}</p>}
</div>
  )
}

export default Email