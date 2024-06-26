"use client"
import { useAppSelector } from '@/lib/hooks'
import { Button } from './ui/button'
import ShippingModalOptions from './modals/ShippingModalOptions'
import { useState } from 'react'
import AddShippingModal from './modals/AddShippingModal'

const Address = ({addresses, userId}: {
    addresses:string;
    userId:string;
}) => {
    const [open,setOpen] = useState(false)
    const [openCreateModal,setOpenCreateModal] = useState(false)
    const parsedUserId = JSON.parse(userId)
    const { selectedShippingAddress } = useAppSelector((state:any) => state.cart)
    const parsedAddresses =  JSON.parse(addresses)
  return (
    <div className='flex flex-col gap-3'>
    <h2 className='font-bold text-black text-[20px]'>Adresses par défaut</h2>
    {selectedShippingAddress && parsedAddresses.length > 0 ? (
       <div className='flex lg:items-center w-full lg:justify-between gap-3 lg:flex-row flex-col max-lg:gap-4 '>
       <div>
           <h3 className='font-medium text-[#111] text-base '>Adresse de facturation par défaut</h3>
           <p className='text-black-1 text-sm font-normal '>Mr {selectedShippingAddress?.firstName || parsedAddresses[0].firstName} {selectedShippingAddress?.lastName || parsedAddresses[0].lastName}</p>
           <p className='text-black-1 text-sm font-normal '>{selectedShippingAddress.address || parsedAddresses[0].address} </p>
           <p className='text-black-1 text-sm font-normal '>{selectedShippingAddress.city || parsedAddresses[0].city} , {selectedShippingAddress.zipCode || parsedAddresses[0].zipCode} {selectedShippingAddress.country || parsedAddresses[0].country}</p>
           <p className='text-black-1 text-sm font-normal '>{selectedShippingAddress.phoneNumber || parsedAddresses[0].phoneNumber} </p>
           <Button onClick={() => setOpen(true)} className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
           Modifier L’adresse De Facturation
           </Button>
       </div>
       <ShippingModalOptions userId={parsedUserId}  addresses={parsedAddresses} open={open} setOpen={setOpen} selectedShippingAddress={selectedShippingAddress} />
       <div>
       <h3 className='font-medium text-[#111] text-base '>Adresse de facturation par défaut</h3>
           <p className='text-black-1 text-sm font-normal '>Mr {selectedShippingAddress?.firstName || parsedAddresses[0].firstName} {selectedShippingAddress?.lastName || parsedAddresses[0].lastName}</p>
           <p className='text-black-1 text-sm font-normal '>{selectedShippingAddress.address || parsedAddresses[0].address} </p>
           <p className='text-black-1 text-sm font-normal '>{selectedShippingAddress.city || parsedAddresses[0].city} , {selectedShippingAddress.zipCode || parsedAddresses[0].zipCode} {selectedShippingAddress.country || parsedAddresses[0].country}</p>
           <p className='text-black-1 text-sm font-normal '>{selectedShippingAddress.phoneNumber || parsedAddresses[0].phoneNumber} </p>
           <Button  onClick={() => setOpenCreateModal(true)} className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
           Modifier L’adresse De Livraison
           </Button>
       </div>
   </div>
    ): (
      <div className='flex items-center w-full lg:justify-between gap-3 lg:flex-row flex-col max-lg:gap-4 '>
      <div>
          <h3 className='font-medium text-[#111] text-base '>Adresse de facturation par défaut</h3>
          <p className='text-black-1 text-sm font-normal '>Vous n'avez pas specifie d'address de facturation par default</p>
          <Button onClick={() => setOpenCreateModal(true)} className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
              Ajouter L’adresse De Facturation
          </Button>
      </div>
      <div>
          <h3 className='font-medium text-[#111] text-base '>Adresse de livraison par défaut</h3>
          <p className='text-black-1 text-sm font-normal '>Vous n'avez pas specifie d'address de livraison par default</p>
          <Button onClick={() => setOpen(true)} className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
             Ajouter L’adresse De livraison
          </Button>
      </div>
  </div>
    )}
  <AddShippingModal _id={parsedUserId} type='create' open={openCreateModal} setOpen={setOpenCreateModal} />

</div>
  )
}

export default Address