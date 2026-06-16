import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Insertcard = () => {
    const navigate=useNavigate();
    return (
    <div className="container">
 <h2>Insert Your Card</h2>
 <button onClick={()=>navigate("/language")}>
    Inserd Your Card
 </button>
    </div>
  )
}

export default Insertcard
