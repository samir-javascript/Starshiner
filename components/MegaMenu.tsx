
'use client';
import { arrivals, coats, colorsDropdown, eventsDropdown, jeans, lengthDropdown, materialDropdown, salesAndOffers, seasonalDropdown, shirtsandtshirts, skirts, typesDropdown } from '@/constants';
import { MegaMenu as Mega, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useOptimistic, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

export default function MegaMenu() {
  const [isLiked, setIsLiked] = useState(false);
  const [optimisticLike, switchOptimisticLike] = useOptimistic(isLiked, (state, value) => {
    return !state;
  });
// <button onClick={() => switchOptimisticLike()}>{optimisticLike ? 'Unlike' : 'Like'}</button>
  
  return (
    <Mega className='w-full !relative z-[999] max-md:!py-0 !pt-0 border-b border-gray-300'>
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
              <p className="uppercase z-[999] hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none">
                Dresses
              </p>
            }>
              <ul className="grid z-[9999] !mt-0 grid-cols-4">
                <article className="space-y-4 p-4">
                  <h2 className='text-[#000] font-bold text-[18px] '>Types</h2>
                  <ul>
                    {typesDropdown.map((item) => (
                      <li className='flex items-center mb-1.5 gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <Link className='!text-[12px] ' href="/">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
                <div className="flex flex-col gap-3 p-4">
                  <div className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Length</h2>
                    <ul>
                      {lengthDropdown.map((item) => (
                        <li className='flex items-center mb-1.5 gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Material</h2>
                    <ul>
                      {materialDropdown.map((item) => (
                        <li className='flex items-center mb-1.5 gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <div className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Events</h2>
                    <ul>
                      {eventsDropdown.map((item) => (
                        <li className='flex items-center mb-1.5 gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <article className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Seasonal</h2>
                    <ul>
                      {seasonalDropdown.map((item) => (
                        <li className='flex items-center mb-1.5 gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
                <article className="space-y-4 p-4">
                  <h2 className='text-[#000] font-bold text-[18px] '>Colors</h2>
                  <ul>
                    {colorsDropdown.map((item) => (
                      <li className='flex items-center mb-1.5 gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <Link className='!text-[12px] ' href="">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </ul>
            </Mega.Dropdown>
          </Navbar.Link>
          <Navbar.Link className='!py-0 flex-shrink-0'>
            <Mega.Dropdown toggle={
              <p className="uppercase hover:!text-primary-1 hover:underline transition-all duration-300 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none">
                Clothing
              </p>
            }>
              <ul className="grid z-[9999] !mt-0 grid-cols-2">
                <div className="flex flex-col gap-3 p-4">
                  <article className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Blouses, Shirts, T-shirts</h2>
                    <ul>
                      {shirtsandtshirts.map((item) => (
                        <li className='flex items-center mb-1.5 gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Coats, Jackets, Blazers</h2>
                    <ul>
                      {coats.map((item) => (
                        <li className='flex items-center mb-1.5 gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <article className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Trousers, Jeans, Jackets</h2>
                    <ul>
                      {jeans.map((item) => (
                        <li className='flex items-center mb-1.5  gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article className='space-y-4'>
                    <h2 className='text-[#000] font-bold text-[18px] capitalize '>Skirts</h2>
                    <ul>
                      {skirts.map((item) => (
                        <li className='flex items-center mb-1.5 gap-1' key={item}>
                          <FaChevronLeft color="gray" size={10} />
                          <Link className='!text-[12px] ' href="/">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
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
                <article className="space-y-4 p-4">
                  <ul>
                    {arrivals.map((item) => (
                      <li className='flex items-center mb-1.5 gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <Link className='!text-[12px] ' href="/">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
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
                <article className="space-y-4 p-4">
                  <ul className=''>
                    {salesAndOffers.map((item) => (
                      <li className='flex mb-1.5 items-center gap-1' key={item}>
                        <FaChevronLeft color="gray" size={10} />
                        <Link className='!text-[12px] ' href="/">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </ul>
            </Mega.Dropdown>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Mega>
  );
}
