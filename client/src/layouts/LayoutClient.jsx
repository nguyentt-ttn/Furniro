import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const LayoutClient = () => {
  return (
    <div >
        <Header/>
        <div className="container">
        <Outlet/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default LayoutClient
