import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navlink7 = () => {
  return (
    <div>
    <nav style={{marginBottom:'20px'}}>
        <Link to='/'>Home</Link>
        <Link to='about7'>About</Link>
        <Link to='/contact7'>Contact</Link>
        
    </nav>
    <Outlet/>
    </div>
  )
}

export default Navlink7
