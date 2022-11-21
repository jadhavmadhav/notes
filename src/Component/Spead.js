import React, { useEffect, useState } from 'react'
import AddExpenses, { AddExpenseForm } from './addSelection/AddExpenses'
import { AddIncomeForm } from './addSelection/AddIncome';
import './Spead.css'
import SpeadTable from './tables/SpeadTable';



export default function Spead() {



  var expanseData = [
    {
      type: 'income',
      catagory: 'salary',
      date: '01/04/2021',
      day: 'mon',
      price: '25000',
      description: 'test here'
    },
    {
      type: 'expenses',
      catagory: 'recharge',
      date: '12/04/2021',
      day: 'wed',
      price: '600',
      description: 'test here'
    }

  ]

  const [tableData, setTableData] = useState(expanseData)

 return (
    <div className='speadContainer'>

      <div>
        <AddExpenses />
      </div>


      {/*----------show data here-------------------*/}
      <div className='list-item'>
        {
          tableData?.map((item) => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            console.log("randomColor", randomColor)
   const red={
    color:'red'
   }
   const green={
    color:'green'
   }
            return ( 
                <div className='list-data mt-1 mb-1'>
                  <span style={{ color: `#${randomColor}` }}>{item.catagory}</span>
                  <span style={item.type==='income'?green:red}>{item.price}</span>
                  <span>{`${item.date}`}</span>
                  <p style={{
                    backgroundColor: `#${randomColor}`, position: 'absolute',
                    right: '-3%',
                    width: '3px',
                    top: '10%',
                    height: '80%',
                    borderRadius: '6px',
                  }} > </p>
                </div> 
            )
          })
        }
      </div>
 
    </div>
  )
}
