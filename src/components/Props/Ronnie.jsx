import React from 'react'

const Ronnie = () => {
  return (
    <div id='main'>
            <div className='main'>
                <div> <h1>Task list</h1></div>
                <div><button className='button'>
                + Add task
            </button></div>
            </div>
            

            <div>
                <table >
                    <tr className='one'>
                        <td>Task</td>
                        <td>priority</td>
                        <td rowSpan={2}><button>To Do</button></td>
                        <td rowSpan={2}>0</td>
                        <td rowSpan={2}>&&</td>
                    </tr>
                    <tr className='one'>
                        <th>Go to gym</th>
                        <th className='th1'>High</th>
                    </tr><br />

                    <tr className='two'>
                        <td>Task</td>
                        <td>priority</td>
                        <td rowSpan={2}><button>Done</button></td>
                        <td rowSpan={2}>0</td>
                        <td rowSpan={2}>&&</td>
                    </tr>
                    <tr className='two'>
                        <th>Read a book</th>
                        <th className='th2'>Low</th>
                    </tr><br />

                    <tr className='three'>
                        <td>Task</td>
                        <td>priority</td>
                        <td rowSpan={2}><button>In Progress</button></td>
                        <td rowSpan={2}>0</td>
                        <td rowSpan={2}>&&</td>
                    </tr>
                    <tr className='three'>
                        <th>Go to market</th>
                        <th className='th3'>Medium</th>
                    </tr><br />

                    <tr className='four'>
                        <td>Task</td>
                        <td>priority</td>
                        <td rowSpan={2}><button>To Do</button></td>
                        <td rowSpan={2}>0</td>
                        <td rowSpan={2}>&&</td>
                    </tr>
                    <tr className='four'>
                        <th>Restart Learning <br />Solidworks</th>
                        <th className='th1'>High</th>
                    </tr><br />
                    
                    <tr className='five'>
                        <td>Task</td>
                        <td>priority</td>
                        <td rowSpan={2}><button>Done</button></td>
                        <td rowSpan={2}>0</td>
                        <td rowSpan={2}>&&</td>
                    </tr>
                    <tr className='five'>
                        <th>Change slider to <br />scroll</th>
                        <th className='th1'>High</th>
                    </tr><br />

                    <tr className='six'>
                        <td>Task</td>
                        <td>priority</td>
                        <td rowSpan={2}><button>In Progress</button></td>
                        <td rowSpan={2}>0</td>
                        <td rowSpan={2}>&&</td>
                    </tr>
                    <tr className='six'>
                        <th>To publish the article</th>
                        <th className='th3'>Medium</th>
                    </tr>
                </table>
            </div>
    </div>
  )
}

export default Ronnie
