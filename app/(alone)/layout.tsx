import AloneNavbar from '@/components/AloneNavbar'
import AloneFooter from '@/components/AloneFooter'
import React from 'react'

const AloneLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div >
    <AloneNavbar />
   <main className='flex flex-1 flex-col  '>
     {children}
   </main>
     <AloneFooter />

 </div>
  )
}

export default AloneLayout