import React from 'react'
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'


function Home() {
  return (
    
    <>
        <div className='container-fluid h-full w-full'>

            <NavigationBar/>
            <div>Home</div>
            <Outlet />
            <Footer/>

        </div>
        
    </>
    
  )
}


export default Home;