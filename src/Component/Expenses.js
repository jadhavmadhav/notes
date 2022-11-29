import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { getExpenses } from '../services/services';
import AddExpenses, { AddExpenseForm } from './addSelection/AddExpenses'
import { AddIncomeForm } from './addSelection/AddIncome';
import './Expenses.css'
import SpeadTable from './tables/SpeadTable';



export default function Expenses() {


const navigate =useNavigate()
  

  const [Expenses, setExpenses] = useState([]);

  const getExpenseInfo = async()=>{
    try {
      const req = await getExpenses()
      const res = await req.data 
      const result = res.sort((a,b)=>Number(a.date)-Number(b.date)).sort((a,b)=>a.time > b.time?-1:1)
      setExpenses(result)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
   getExpenseInfo()
  },[])



  const handleClick=(expensesId)=>{
    navigate('/view-detail', {state:{expensesId}})
  }

  return (
    <div className='speadContainer'>

      <div>
        <AddExpenses />
      </div>


      {/*----------show data here-------------------*/}
      <div className='list-item'>
        {
          Expenses.map((item) => { 
            const{userId,expensesType,catagory,amount,description,expensesId,date,day,time,_id}=item
            const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
            const red = {
              color: 'red'
            }
            const green = {
              color: 'green'
            }
            return (
              <div className='list-data mt-1 mb-1' key={expensesId} onClick={()=>handleClick(expensesId)}>
                <span className='catagory-name' style={{ color: `#${randomColor}` }}>{catagory}</span>
                <span className='catagory-amount' style={expensesType === 'Income' ? green : red}>{amount}</span>
                <span className='catagory-date'>{`${date}`}</span>
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
