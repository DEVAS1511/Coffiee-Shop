import React from 'react'

const Arnold = () => {
  let  firstname =["A1","A2","A3","A4","A5"]
  let lastname =["B1","B2","B3","B4","B5",]
  let age =[ "c1", "c2", "c3", "c4" ,"c5"]
  return (
    <div>
      <table className='table1' border={1} >
  <tr>
   <th>firstname</th>
   <th>Lastname</th>
   <th>Age</th> 
  </tr>
  <tr>
    <td>{firstname [0]}</td>
      <td>{lastname [0]}</td>
       <td>{age [0]}</td>
  </tr>
    <tr>
      <td>{firstname [1]}</td>
      <td>{lastname [1]}</td>
       <td>{age [1]}</td>
    </tr>
       <tr>
      <td>{firstname [2]}</td>
      <td>{lastname [2]}</td>
       <td>{age [2]}</td>
    </tr>
       <tr>
      <td>{firstname [3]}</td>
      <td>{lastname [3]}</td>
       <td>{age [3]}</td>
    </tr>
       <tr>
      <td>{firstname [4]}</td>
      <td>{lastname [4]}</td>
       <td>{age [4]}</td>
    </tr>
    <tr>
    <td>{firstname [0]}</td>
      <td>{lastname [0]}</td>
       <td>{age [0]}</td>
  </tr>
    <tr>
      <td>{firstname [1]}</td>
      <td>{lastname [1]}</td>
       <td>{age [1]}</td>
    </tr>
       <tr>
      <td>{firstname [2]}</td>
      <td>{lastname [2]}</td>
       <td>{age [2]}</td>
    </tr>
       <tr>
      <td>{firstname [3]}</td>
      <td>{lastname [3]}</td>
       <td>{age [3]}</td>
    </tr>
       <tr>
      <td>{firstname [4]}</td>
      <td>{lastname [4]}</td>
       <td>{age [4]}</td>
    </tr>
</table>
    </div>
  )
}

export default Arnold
