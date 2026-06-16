import React from 'react'

const Cbum = () => {
    let mt=["adults","men","women","children","boys","girls"]
    let food=["25%","145","39%","10%","9%","11%"]
    let evend=["5%","10%","1%","23%","18%","5%"]
    let music=["5%","5%","5%","39","38%","40%"]
    let videos=["1%","2%","0.5%","12%","18%","17"]
  return (
    <div className='table'>
       <table  border={1} >
            <tr>
             <th></th>
             <th>food</th>
             <th>electronic <br />equipement</th>
             <th>music</th>
               <th>videos</th>
            </tr>
              <tr>
             <td>{mt[0]}</td>
             <td>{food[0]}</td>
             <td>{evend[0]}</td>
             <td>{music [0]}</td>
             <td>{videos [0]}</td>
            </tr>
            <tr>
             <td>{mt[1]}</td>
             <td>{food[1]}</td>
             <td>{evend[1]}</td>
             <td>{music[1]}</td>
             <td>{videos[1]}</td>
            </tr>   
             <tr>
             <td>{mt[2]}</td>
             <td>{food[2]}</td>
             <td>{evend[2]}</td>
             <td>{music[2]}</td>
             <td>{videos[2]}</td>
            </tr>
              <tr>
             <td>{mt[0]}</td>
             <td>{food[0]}</td>
             <td>{evend[0]}</td>
             <td>{music[0]}</td>
             <td>{videos[0]}</td>
            </tr>
            <tr>
             <td>{mt[1]}</td>
             <td>{food[1]}</td>
             <td>{evend [1]}</td>
             <td>{music [1]}</td>
             <td>{videos [1]}</td>
            </tr>    
            <tr>
             <td>{mt[2]}</td>
             <td>{food[2]}</td>
             <td>{evend[2]}</td>
             <td>{music[2]}</td>
             <td>{videos[2]}</td>
            </tr>

        </table>
    </div>
  )
}

export default Cbum
