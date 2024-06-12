import Email from '@/components/Email'
import ProductCard from '@/components/ProductCard'
import ProfileTabs from '@/components/ProfileTabs'
import ProfileTop from '@/components/ProfileTop'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import React from 'react'


const page = () => {
    const shipping = null
  return (
    <section className="bg-[#eaecf0] py-3 h-full w-full" >
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
            <ProfileTabs />
            <div className='flex-1 max-lg:px-5 flex flex-col gap-5'>
              <div className='flex flex-col gap-1'>
                 <ProfileTop title="Active shipping address " text="Here you can check your address! edit it or delete it!" links={[
                    {
                        name: "Home",
                        href: "/"
                    },
                    {
                        name: "My account",
                        href: "/client/profile/87878"
                    },
                    {
                        name: "My Addresses",
                        href: "/client/address"
                    },

                 ]} />
                 
              </div>
                <div className='flex flex-col gap-3'>
                      <h2 className='font-bold text-black text-[20px]'>Adresses par défaut</h2>
                      {!shipping ? (
                         <div className='flex lg:items-center w-full lg:justify-between gap-3 lg:flex-row flex-col max-lg:gap-4 '>
                         <div>
                             <h3 className='font-medium text-[#111] text-base '>Adresse de facturation par défaut</h3>
                             <p className='text-black-1 text-sm font-normal '>Mr soufiane hmamou</p>
                             <p className='text-black-1 text-sm font-normal '>rue de Imam boussayri</p>
                             <p className='text-black-1 text-sm font-normal '>meknes , 5000 Morocco</p>
                             <p className='text-black-1 text-sm font-normal '>+212609547692</p>
                             <Button className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
                             Modifier L’adresse De Facturation
                             </Button>
                         </div>
                         <div>
                             <h3 className='font-medium text-[#111] text-base '>Adresse de facturation par défaut</h3>
                             <p className='text-black-1 text-sm font-normal '>Mr soufiane hmamou</p>
                             <p className='text-black-1 text-sm font-normal '>rue de Imam boussayri</p>
                             <p className='text-black-1 text-sm font-normal '>meknes , 5000 Morocco</p>
                             <p className='text-black-1 text-sm font-normal '>+212609547692</p>
                             <Button className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
                             Modifier L’adresse De Livraison
                             </Button>
                         </div>
                     </div>
                      ): (
                        <div className='flex items-center w-full lg:justify-between gap-3 lg:flex-row flex-col max-lg:gap-4 '>
                        <div>
                            <h3 className='font-medium text-[#111] text-base '>Adresse de facturation par défaut</h3>
                            <p className='text-black-1 text-sm font-normal '>Vous n'avez pas specifie d'address de facturation par default</p>
                            <Button className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
                                Ajouter L’adresse De Facturation
                            </Button>
                        </div>
                        <div>
                            <h3 className='font-medium text-[#111] text-base '>Adresse de livraison par défaut</h3>
                            <p className='text-black-1 text-sm font-normal '>Vous n'avez pas specifie d'address de livraison par default</p>
                            <Button className='w-fit mt-3 p-0 underline text-[#00afaa] ' type="button">
                               Ajouter L’adresse De livraison
                            </Button>
                        </div>
                    </div>
                      )}
                    

                </div>
            </div>
        </div>
    </section>
  )
}

export default page