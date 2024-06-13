import AdminNavbar from '@/components/adminComponents/AdminNavbar'
import React from 'react'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <AdminNavbar />
      <main className='flex-1 flex-col flex'>
        {children}
      </main>
       
    </div>
  )
}

export default AdminLayout