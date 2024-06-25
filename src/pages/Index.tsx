import React from 'react'
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'


function Index() {
  return (
    
    <>
        <div className='container-fluid h-full w-full'>

            <NavigationBar/>
            <Outlet />
            <Footer/>

        </div>
        
    </>
    
  )
}


export default Index;