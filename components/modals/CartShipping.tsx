"use client";  // Ensure this directive is at the very top

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import EditShipping from './EditShipping';
import { MdPublishedWithChanges } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import ShippingCartModal from './ShippingCartModal';
import { useState } from 'react';

const CartShipping = ({ currentUser }: { currentUser: any }) => {
 
    const [open, setOpen] = useState(false);
    const parsedUser = JSON.parse(currentUser);
    const dispatch = useAppDispatch();
    const { selectedShippingAddress, shippingAddress } = useAppSelector((state: any) => state.cart);

    return (
        Object.keys(selectedShippingAddress?.length === 0) && shippingAddress.length === 0 ? (
            <div>
                <EditShipping type="create" userId={JSON.stringify(parsedUser._id)} />
            </div>
        ) : (
            <div className='flex flex-col'>
                <div className='bg-[#f2eeea] rounded-[10px] p-3'>
                    <div className="flex items-center border-b py-2.5 border-gray-200 justify-between">
                        <article className='flex items-start'>
                            <FaLocationDot color="gray" size={16} className='mr-1 mt-[4px]' />
                            <p className="font-bold text-[#000]">
                                {selectedShippingAddress?.lastName} {selectedShippingAddress?.firstName} - 
                                <span className='text-base font-normal text-black-1'>
                                    {selectedShippingAddress?.zipCode}, {selectedShippingAddress?.address}, 
                                    {selectedShippingAddress?.phoneNumber}, {selectedShippingAddress?.city}, 
                                    {selectedShippingAddress?.country}
                                </span>
                            </p>
                        </article>
                    </div>
                </div>
                <div onClick={() => setOpen(true)} className='flex text-[#000] hover:text-gray-400 transition-all duration-300 mt-3 cursor-pointer items-center gap-2'>
                    <MdPublishedWithChanges color="gray" size={20} />
                    <p className='uppercase font-bold text-[15px]'>change the address</p>
                </div>
                <ShippingCartModal _id={parsedUser._id} open={open} setOpen={setOpen} />
            </div>
        )
    );
}

export default CartShipping;
