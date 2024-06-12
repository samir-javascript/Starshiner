import Image from 'next/image'
import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-full relative h-screen">
      <div className="absolute size-full">
        <Image src="https://t4.ftcdn.net/jpg/06/86/35/19/360_F_686351989_uZW9La8rsFkU9MsNU5xOAbEKnSUsdTaL.jpg" alt="background" fill className="size-full object-cover" />
      </div>
        {children}
    </div>
  )
}

export default AuthLayout