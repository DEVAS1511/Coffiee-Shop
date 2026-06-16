import React, { useState } from 'react'

const Comp = () => {
    const [num1, setnum1]=useState("")
    const [num2, setnum2]=useState("")
    const [result,setresult]=useState("")

    const add =()=>{
        setresult(Number(num1)+Number(num2))
    }

    const multifly =()=>{
      setresult (Number(num1) * Number(num2))
    }
    const subtract =()=>{
      setresult (Number(num1)-Number(num2))
    }
    const divide =()=>{
      setresult (Number(num1)% Number(num2))
    }
  return (
    <div>
      <h1>Hello This is my Page or COMP.js File</h1>

      <input 
      type="text"
      value={num1}
      onChange={(e)=>setnum1(e.target.value)}
        />
      <br />
      <input 
      type="text"
      value={num2} 
      onChange={(e)=>setnum2(e.target.value)}
      />
      <br />
      <br />
      <button onClick={add}>Add</button>
      <br/>
      <button onClick={multifly}>Multifly</button>
      <br/>
      <button onClick={subtract}>Subtract</button>
      <br/>
      <button onClick={divide}>Divide</button>
      <br />
      <h3>Your Numers are:{result}</h3>
    </div>
  )
}

export default Comp
