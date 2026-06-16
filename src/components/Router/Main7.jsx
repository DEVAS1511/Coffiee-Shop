import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navlink7 from './Navlink7'
import Home7 from './Home7'
import About7 from './About7'
import Contact7 from './Contact7'
import Company7 from './Company7'
import Team7 from './Team7'

const Main7 = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Navlink7/>}>
        <Route index element={<Home7/>}/>
        <Route path='/about7'element={<About7/>}/>
        <Route path='/contact7'element={<Contact7/>}/>
        <Route path='/company7'element={<Company7/>}/>
        <Route path='/team7'element={<Team7/>}/>
        </Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main7
