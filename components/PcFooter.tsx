import { footerItems } from '@/constants'
import Link from 'next/link'
import React from 'react'


const PcFooter = () => {
  return (
    <footer className='lg:flex hidden border-t px-5 border-b py-3 border-gray-300 w-full '>
       <div className='flex items-start justify-between  w-full flex-wrap'>
           {footerItems.map((item => (
              <div key={item.head}>
                   <h2 className='font-bold text-black text-[17px] mb-3 '>{item.head} </h2>
                   <ul>
                      {item.items.map(x => (
                        <li className='mb-1' key={x.name}>
                            <Link className="text-black-1 flex items-center text-sm font-normal "
                             href="/">
                              {x.icon && (
                                 <img className='w-[20px] mr-1 h-[20px] object-contain ' src={x.icon} alt={x.name} />
                              )}
                                 {x.name}
                            </Link>
                        </li>
                      ))}
                   </ul>
              </div>
           )))}
       </div>
    </footer>
  )
}

export default PcFooter