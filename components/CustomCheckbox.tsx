"use client"
import React, { useState } from 'react'

const CustomCheckbox = () => {
    const [checked,setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!checked);
  };
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
       checked={checked}
        className="hidden"
        onChange={handleCheckboxChange}
        id="custom-checkbox"
      />
      <label
        htmlFor="custom-checkbox"
        className={`w-7 h-7 border-2 rounded-full  border-gray-300  cursor-pointer flex items-center justify-center ${
          checked ? 'bg-green-500 ' : 'bg-white'
        }`}
      >
        {checked && (
          <svg
            className="w-6 h-6  text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </label>
    </div>
  )
}

export default CustomCheckbox