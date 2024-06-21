'use client';
import { arrivals, coats, colorsDropdown, eventsDropdown, jeans, lengthDropdown, materialDropdown, salesAndOffers, seasonalDropdown, shirtsandtshirts, skirts, typesDropdown } from '@/constants';
import { Button, MegaMenu as Mega, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

export default function MegaMenu() {
  return (
    <Mega className='w-full !relative z-[999999999999999999999999999999999999999999999999999999999999] max-md:!py-0 !pt-0 border-b border-gray-300'>
      <div className="hidden sm:!flex max-w-[1200px] !flex-wrap items-center justify-between lg:px-[4rem] md:space-x-8">
        <Navbar.Toggle />
        <Navbar.Collapse className='!flex items-center flex-wrap w-full'>
          <Link href='/' className='!py-0 flex-shrink-0'>
            <p className="uppercase whitespace-nowrap hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none">
              New collection
            </p>
          </Link>
          <Navbar.Link className='!py-0 flex-shrink-0'>
            <Mega.Dropdown toggle={
              <p className="uppercase z-[999999999999999999] hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none">
                Dresses
              </p>
            }>
              <ul className="grid z-[9999999999999999999] !mt-0 grid-cols-4">
                <div className="space-y-4 p-4">
                    <h2 className='text-[#000] font-bold text-[18px] '>Types</h2>
                    {typesDropdown.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                </div>
                <div className="flex flex-col gap-3 p-4">
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>length</h2>
                        {lengthDropdown.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>material</h2>
                        {materialDropdown.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                   
                </div>
                <div className="flex flex-col gap-3 p-4">
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>Events</h2>
                        {eventsDropdown.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>seasonal</h2>
                        {seasonalDropdown.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                   
                </div>
                <div className="space-y-4 p-4">
                    <h2 className='text-[#000] font-bold text-[18px] '> colors</h2>
                    {colorsDropdown.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                </div>
              </ul>
            </Mega.Dropdown>
          </Navbar.Link>
          <Navbar.Link className='!py-0 flex-shrink-0'>
            <Mega.Dropdown toggle={
              <p className="uppercase hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none">
                Clothing
              </p>
            }>
              <ul className="grid z-[9999999999999999999] !mt-0 grid-cols-2">
              <div className="flex flex-col gap-3 p-4">
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>BlousesS, Shirts, T-shirts</h2>
                        {shirtsandtshirts.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>Coats, Jackets, Blazers</h2>
                        {coats.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                   
                </div>
                <div className="flex flex-col gap-3 p-4">
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>Trouses, Jeans, jackets</h2>
                        {jeans.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-[#000] font-bold text-[18px] capitalize '>Skirts</h2>
                        {skirts.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
                    </div>
                   
                </div>
              
             
             
              </ul>
            </Mega.Dropdown>
          </Navbar.Link>
          <Navbar.Link className='!py-0 flex-shrink-0'>
            <Mega.Dropdown toggle={
              <p className="uppercase hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 whitespace-nowrap focus:outline-none">
                New arrivals 2024
              </p>
            }>
             <ul className="grid !mt-0 grid-cols-1">
                <div className="space-y-4 p-4">
                {arrivals.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
               
                </div>
               
              </ul>
            </Mega.Dropdown>
          </Navbar.Link>
          <Navbar.Link className='!py-0 flex-shrink-0'>
            <Mega.Dropdown toggle={
              <p className="uppercase hover:!text-primary-1 hover:underline transition-all whitespace-nowrap duration-300 rounded-lg text-sm font-semibold text-red-600 focus:outline-none">
                % sales & offers
              </p>
            }>
              <ul className="grid !mt-0 grid-cols-1">
                <div className="space-y-4 p-4">
                {salesAndOffers.map((item) => (
                       <li className='flex items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <a className='!text-[12px] ' href="">
                         {item}
                        </a></li>
                    ))}
               
                </div>
               
              </ul>
            </Mega.Dropdown>
          </Navbar.Link>
          {/* <Navbar.Link href='/' className='!py-0 flex-shrink-0'>
            <p className="uppercase whitespace-nowrap hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none">
              Plus size
            </p>
          </Navbar.Link>
          <Navbar.Link href='/' className='!py-0 flex-shrink-0'>
            <p className="uppercase whitespace-nowrap hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none">
              Best sellers
            </p>
          </Navbar.Link> */}
        </Navbar.Collapse>
      </div>
    </Mega>
  );
}
