
import React from 'react'
import './SpeadTable.css'

export default function SpeadTable({ tableData}) {
     const keys = Object.keys(tableData[0]) 
     return (
          <div>
               <table>
                    <thead>
                         <tr>
                              {
                                   keys?.map((keys, ind) => <th key={ind}>{keys}</th>)
                              }
                         </tr>
                    </thead>
                    {
                         tableData?.map((data) => {

                              return (<tr> 
                                   <td>{data.type}</td>
                                   <td>{data.catagory}</td>
                                   <td>{data.date}</td>
                                   <td>{data.day}</td>
                                   <td>{data.price}</td>
                                   <td>{data.description}</td> 
                              </tr>
                              )
                         })
                    }

               </table>
          </div>
     )
}
