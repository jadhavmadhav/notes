import React, { useEffect, useState } from 'react'
import { AddExpenseForm } from './addSelection/AddExpenses'
import { AddIncomeForm } from './addSelection/AddIncome';
import './Spead.css'
import SpeadTable from './tables/SpeadTable';



export default function Spead() {
const [ExpensesType, setExpensesType] = useState('spe'); 
 const [catagory, setCatagory] = useState([]);
 
  var expanseData = [
    {
      type: 'Shopping',
      catagory: 'grocery',
      date: '12/04/2021',
      day: 'monday',
      price: '500',
      description: 'test here'
    },
    {
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
    },
  ]

 

const Catagoreis=[
  {
    id:'spe',
    cName:'Rent'
  },
  {
    id:'spe',
    cName:'Transportation'
  },
  {
    id:'spe',
    cName:'Groceries'
  },
  {
    id:'spe',
    cName:'Home and Utilities'
  },
  {
    id:'spe',
    cName:'Insurance'
  },
  {
    id:'spe',
    cName:'Bill'
  },
  {
    id:'spe',
    cName:'Education'
  },
  {
    id:'spe',
    cName:'Health and personal care'
  },
  {
    id:'in',
    cName:'Salary',
  },{
    id:'in',
    cName:'House Property'
  },{
    id:'in',
    cName:'Profit'
  },{
    id:'in',
    cName:'Gain of Business'
  },{
    id:'in',
    cName:'farming'
  }
]
  const [tableData, setTableData] = useState(expanseData)

  useEffect(()=>{
    let temp=[]
    Catagoreis.map((item)=>{
      if(item.id===ExpensesType){ 
          temp.push(item)
          setCatagory(temp)
      }
    })
  },[ExpensesType])
 

  useEffect(() => {
    if(ExpensesType==='spe'){
      setTableData(expanseData) 
    }
    else{
      setTableData(IncomeData) 

    }
  }, [ExpensesType]);

   



  return (
    <div className='speadContainer'>
      

      <div>
        
        <div>
              <div className="expensesFields">
                <select onChange={(e)=>setExpensesType(e.target.value)}> 
                  <option value="spe" key="">Spead</option>
                  <option value="in" key="">Income</option> 
                </select>
              </div>
              <div className="expensesFields">
                <select>
                <option value="">Select {ExpensesType} Catagory</option>
                {
                  catagory?.map((item,ind)=>{
                    const {id,cName}=item
                    console.log(cName)
                  return  <option value='' key={ind}>{cName}</option>

                  })
                } 
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

      </div>

      {/*----------show data here-------------------*/}

      <div className='speadTable'>
        <SpeadTable tableData={tableData} />
      </div>
    </div>
  )
}
