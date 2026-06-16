import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pin = () => {
    const navigate=useNavigate();
  return (
    <div>
     <h2>Enter PIN</h2>
<input type='password' placeholder='Enter PIN'/><br />
<br />
<button onClick={()=>navigate("/options")}>
    Submit
</button>
    </div>
  )
}

export default Pin
