import React, { useState } from 'react'

const Object = () => {
    const [name,setname]=useState({
     id:'keys',
     name:'devv',
     age:'24'  
    })
  return (
    <div>
      <h1>{name.id}</h1>
    </div>
  )
}

export default Object
