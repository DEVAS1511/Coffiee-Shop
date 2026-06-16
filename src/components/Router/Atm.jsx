import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Insertcard from './Insertcard'
import Language from './Language'
import Pin from './Pin'
import Options from './Options'
import Withdraw from './Withdraw'
import Amout from './Amout'
import Success from './Success'

const Atm = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Insertcard/>}/>
        <Route path='/language'element={<Language/>}/>
        <Route path='/pin' element={<Pin/>}/>
        <Route path='/options' element={<Options/>}/>
        <Route path='/withdraw'element={<Withdraw/>}/>
        <Route path='/amount' element={<Amout/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Atm
