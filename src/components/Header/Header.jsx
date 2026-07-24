

import React from 'react'
import TopBar from '../TopBar/TopBar.jsx'
import Navbar from '../Navbar/NavBar.jsx'
import  './Header.css'

function Header() {
  return (
    <div className='aurelia-header'>
      <TopBar />
      <Navbar />
    </div>
  )
}

export default Header

