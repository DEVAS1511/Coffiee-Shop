import React from 'react'
import { useNavigate } from 'react-router-dom'

const Amout = () => {
    const navigate=useNavigate();
  return (
    <div>
     <h2>Enter Amount</h2>
     <input type="numper" placeholder='Enter Amount' />
     <br /><br />
     <button onClick={()=>navigate("/success")}>
      Withdraw
     </button>
    </div>
  )
}

export default Amout
