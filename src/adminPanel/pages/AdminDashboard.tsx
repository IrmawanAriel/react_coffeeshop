import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../component/AdminNavbar'
import AdminSidebar from '../component/AdminSidebar'

export default function AdminDashboard() {
    return (
    
        <>
            <div className='container-fluid h-full w-full' >
                <AdminNavbar/>
                <div className='flex flex-row'>
                    <AdminSidebar/>
                    <Outlet />
                </div>
    
            </div>
            
        </>
        
      )
}
