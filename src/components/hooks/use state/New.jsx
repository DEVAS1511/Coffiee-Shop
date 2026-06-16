import React, { useState } from 'react'

const New = () => {
    const [value,setvalue]=useState("")
    const[num1,setnum1]=useState("")
    const handleSubmit=()=>{
        setnum1(value)
    }
  return (
    <div>
      <input type="text"
      value={value}
      onChange={(e)=>setvalue(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>click</button>
      <h1>result={num1}</h1>
    </div>
  );
};

export default New;
