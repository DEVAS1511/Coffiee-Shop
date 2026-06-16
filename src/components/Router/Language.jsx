import React from 'react'
import { useNavigate } from 'react-router-dom'

const Language = () => {
    const navigate=useNavigate();
  return (
    <div>
     <h2>Select Language</h2>
     <button onClick={()=>navigate("/pin")}>
        English
     </button>
     <button onClick={()=>navigate("/pin")}>
        Tamil
     </button>
     
    </div>
  )
}

export default Language
