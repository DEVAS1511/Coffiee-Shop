import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate=useNavigate();
  return (
    <div>
     <h2>Transaction Successful</h2>
     <p>Please Collect Your Cash</p>
<button onClick={()=>navigate("/")}>
  Finish
</button>
    </div>
  )
}

export default Success
