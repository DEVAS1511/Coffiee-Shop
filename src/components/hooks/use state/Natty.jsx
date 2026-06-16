import React, { useState } from 'react'
const Natty = () => {
    const [name,setname]=useState("devva")
    const [sentence1,sent1]=useState("click to view sentence")
    const [sentence2,sent2]=useState("click to view sentence")
    const [sentence3,sent3]=useState("click to view sentence")
    const [sentence4,sent4]=useState("click to view sentence")
  return (
    <div>
      <p>{name}</p>
      <button type='button' onClick={()=>setname("software developer")}>button</button>
      <p>{sentence1}</p>
      <button type='button' onClick={()=>setname("Tender and only beloved in the sight of my mother.")}>button1</button>
      <p>{sentence2}</p>
      <button type='button' onClick={()=>setname("Wisdom is the principal thing; therefore get wisdom:")}>button2</button>
      <p>{sentence3}</p>
      <button type='button' onClick={()=>setname("ractice makes a man perfect.")}>button3</button>
      <p>{sentence4}</p>
      <button type='button' onClick={()=>setname("Honesty is the best policy.")}>button4</button>
    </div>
  )
}

export default Natty

