import React, { useEffect, useState } from 'react'
import { getExpenses } from '../services/services';
import AddExpenses, { AddExpenseForm } from './addSelection/AddExpenses'
import { AddIncomeForm } from './addSelection/AddIncome';
import './Expenses.css'
import SpeadTable from './tables/SpeadTable';



export default function Expenses() {



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

  const [Expenses, setExpenses] = useState([]);

  const getExpenseInfo = async()=>{
    try {
      const req = await getExpenses()
      const res = await req.data 
      setExpenses(res)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
   getExpenseInfo()
  },[])

  return (
    <div className='speadContainer'>

      <div>
        <AddExpenses />
      </div>


      {/*----------show data here-------------------*/}
      <div className='list-item'>
        {
          Expenses?.map((item) => {
            const{userId,expensesType,catagory,amount,description,date,day,time,_id}=item
            const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
            const red = {
              color: 'red'
            }
            const green = {
              color: 'green'
            }
            return (
              <div className='list-data mt-1 mb-1' key={_id}>
                <span style={{ color: `#${randomColor}` }}>{catagory}</span>
                <span style={expensesType === 'Income' ? green : red}>{amount}</span>
                <span>{`${date}`}</span>
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
