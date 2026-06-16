import React from 'react'
import { useNavigate } from 'react-router-dom'

const Options = () => {
    const navigate=useNavigate();
  return (
    <div>
     <h2>Select Option</h2>
     <button onClick={()=>navigate("/amount")}>
        Withdraw
     </button>
    </div>
  )
}

export default Options
