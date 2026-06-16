import React, { useEffect, useState } from 'react'

const Program = () => {
    const[count,setcount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setcount((count)=>count +1)
        }, 1000);
    }, []);
  return (
    <div>
      <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default Program
