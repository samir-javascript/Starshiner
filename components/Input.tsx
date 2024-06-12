import React from 'react'
import { FaSearch } from "react-icons/fa";
const InputSearch = () => {
  return (
    <div className='flex flex-1 max-w-[600px] items-center justify-between bg-white rounded-[25px] border border-primary-1 px-3 py-1 '>
         <input className='bg-transparent outline-none border-none flex-1 w-full' placeholder='find the item you want' type="text" />
          <FaSearch  color="gray" size={18} />
    </div>
  )
}

export default InputSearch