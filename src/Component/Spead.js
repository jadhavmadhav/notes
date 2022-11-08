import React, { useEffect, useState } from 'react'
import { AddExpenseForm } from './addSelection/AddExpenses'
import { AddIncomeForm } from './addSelection/AddIncome';
import './Spead.css'
import SpeadTable from './tables/SpeadTable';



export default function Spead() {

  const [Expanse, setExpense] = useState(true);
  const [Income, setIncome] = useState(false);

  

  var expanseData = [
    {
      type: 'Shopping',
      catagory: 'grocery',
      date: '12/04/2021',
      day: 'monday',
      price: '500',
      description: 'test here'
    },  {
      type: 'Shopping',
      catagory: 'grocery',
      date: '12/04/2021',
      day: 'monday',
      price: '500',
      description: 'test here'
    }
  
  ]
  var IncomeData = [
    {
      type: 'Salary',
      catagory: 'job',
      date: '12/04/2021',
      day: 'monday',
      price: '1500',
      description: 'test here'
    } ,
  ]
  const [tableData, setTableData] = useState(expanseData)


  const handleAddExpanses = () => {
    setExpense(true)
    setIncome(false)
    setTableData(expanseData)
  }
  const handleAddIncome = () => {
    setExpense(false)
    setIncome(true)
    setTableData(IncomeData)
  }
  
 

  return (
    <div className='speadContainer'>
      <div className='speadButtons'>
        <button onClick={handleAddExpanses}>Add Expanse</button>
        <button onClick={handleAddIncome}>Add Income</button>
      </div>

      <div>
        {
          Expanse && (
            <div>
              <div className="expensesFields">
                <select>
                  <option value="" key="">Select Expanse Type</option>
                  <option value="" key="">Shopping</option>
                  <option value="" key="">Helth</option>
                  <option value="" key="">Enterments</option>
                </select>
              </div>
              <div className="expensesFields">
                <select>
                  <option value="" key="">Select Expanse Catagory</option>
                  <option value="" key="">Shopping</option>
                  <option value="" key="">Helth</option>
                  <option value="" key="">Enterments</option>
                </select>
              </div>
              <div className="expensesFields">
                <input type="text" placeholder="Enter Amounts" />
              </div>
              <div className="expensesFields">
                <textarea cols="30" rows="1"></textarea>
              </div>

              <div className="expensesFields">
                <button>Add</button>
              </div>
            </div>
          )
        }
        {
          Income && (
            <div>
              <div className="expensesFields">
                <select>
                  <option value="" key="">Select Income Type</option>
                  <option value="" key="">Shopping</option>
                  <option value="" key="">Helth</option>
                  <option value="" key="">Enterments</option>
                </select>
              </div>
              <div className="expensesFields">
                <select>
                  <option value="" key="">Select Income Catagory</option>
                  <option value="" key="">Shopping</option>
                  <option value="" key="">Helth</option>
                  <option value="" key="">Enterments</option>
                </select>
              </div>
              <div className="expensesFields">
                <input type="text" placeholder="Enter Amounts" />
              </div>
              <div className="expensesFields">
                <textarea cols="30" rows="1"></textarea>
              </div>

              <div className="expensesFields">
                <button>Add</button>
              </div>
            </div>
          )
        }
      </div>

      {/*----------show data here-------------------*/}

      <div className='speadTable'>
        <SpeadTable tableData={tableData} />
      </div>
    </div>
  )
}
