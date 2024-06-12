import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import UpNav from '@/components/UpNav'
import React from 'react'

const RootLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div >
       <UpNav />
      <Nav />
      <MobileNav  />
      <main className='flex flex-1 flex-col  '>
        {children}
      </main>
        <Footer />

    </div>
  )
}

export default RootLayout