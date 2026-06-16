import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About7 = () => {
  return (
    <div>
      <h1>Aboutpage</h1>
     <nav>
       <Link to='/company7'>Our Company</Link>
      <Link to='/team7'>Our Team</Link>
     </nav>
     <Outlet/>
    </div>
  )
}

export default About7
