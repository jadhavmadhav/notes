import React, { useEffect, useState } from 'react'
import { AddExpenseForm } from './addSelection/AddExpenses'
import { AddIncomeForm } from './addSelection/AddIncome';
import './Spead.css'
import SpeadTable from './tables/SpeadTable';



export default function Spead() {
  const [ExpensesType, setExpensesType] = useState('Spead');

  const userSpeadObj = {
    type: ExpensesType,
    catagory: '',
    price: '',
    description: ''
  }
  const userIncomeObj={
    type:ExpensesType,
    catagory:'',
    price:'',
    description:''
  }
  const [userIncomeForm, setuserIncomeForm] = useState(userIncomeObj);
  const [userSpeadForm, setuserSpeadForm] = useState(userSpeadObj); 

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



  const Catagoreis = [
    {
      id: 'Spead',
      cName: 'Rent'
    },
    {
      id: 'Spead',
      cName: 'Transportation'
    },
    {
      id: 'Spead',
      cName: 'Groceries'
    },
    {
      id: 'Spead',
      cName: 'Home and Utilities'
    },
    {
      id: 'Spead',
      cName: 'Insurance'
    },
    {
      id: 'Spead',
      cName: 'Bill'
    },
    {
      id: 'Spead',
      cName: 'Education'
    },
    {
      id: 'Spead',
      cName: 'Health and personal care'
    },
    {
      id: 'Income',
      cName: 'Salary',
    }, {
      id: 'Income',
      cName: 'House Property'
    }, {
      id: 'Income',
      cName: 'Profit'
    }, {
      id: 'Income',
      cName: 'Gain of Business'
    }, {
      id: 'Income',
      cName: 'farming'
    }
  ]
  const [tableData, setTableData] = useState(expanseData)

  useEffect(() => {
    let temp = []
    Catagoreis.map((item) => {
      if (item.id === ExpensesType) {
        temp.push(item)
        setCatagory(temp)
      }
    })
  }, [ExpensesType])


  useEffect(() => {
    if (ExpensesType === 'Spead') {
      setTableData(expanseData)
    }
    else {
      setTableData(IncomeData)

    }
  }, [ExpensesType]);

  const handleType = (e) => {
    const value=e.target.value
    setExpensesType(e.target.value)
    value === "Income" && setuserIncomeForm({ ...userIncomeForm, type:value }) 
    value==="Spead"&& setuserSpeadForm({ ...userSpeadForm, type:value})
  }

  const handleCatagory = (e) => {
    const value=e.target.value
    ExpensesType === "Income"&& setuserIncomeForm({ ...userIncomeForm, catagory: value}) 
    ExpensesType==="Spead"&& setuserSpeadForm({ ...userSpeadForm, catagory:value })
  }

  const handleAmount = (e) => {
    const value=e.target.value
    ExpensesType === "Income" && setuserIncomeForm({ ...userIncomeForm, price:value })
    ExpensesType==="Spead"&& setuserSpeadForm({ ...userSpeadForm, price:value })
  }


  const handleDescription = (e) => {
    const value=e.target.value

    ExpensesType === "Income" && setuserIncomeForm({ ...userIncomeForm, description:value })
    ExpensesType ==="Spead"&& setuserSpeadForm({ ...userSpeadForm, description:value })
  }

  const [FinalIncome, setFinalIncome] = useState();
  const [FinalSpead, setFinalSpead] = useState();
    

  const handleSubmitData=(e)=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);  
    ExpensesType==="Income"&&setFinalIncome({...userIncomeForm,color:randomColor})
    ExpensesType==="Spead"&& setFinalSpead({...userSpeadForm,color:randomColor})
    setuserIncomeForm({type:'',catagory:'',price:'',description:''})
    setuserSpeadForm({type:'',catagory:'',price:'',description:''})
  }

  return (
    <div className='speadContainer'>


      <div>

        <div>
          <div className="expensesFields">
            <select
              onChange={handleType}>
              <option value="Spead" key="">Spead</option>
              <option value="Income" key="">Income</option>
            </select>
          </div>
          <div className="expensesFields">
            <select
              value={ExpensesType === "Spead" ?userSpeadForm.catagory:userIncomeForm.catagory}
              onChange={handleCatagory}>
              <option value="">Select {ExpensesType} Catagory</option>
              {
                catagory?.map((item, ind) => {
                  const { id, cName } = item
                  return <option value={cName} key={ind}>{cName}</option>

                })
              }
            </select>
          </div>
          <div className="expensesFields">
            <input type="text" value={ExpensesType==="Spead"?userSpeadForm.price:userIncomeForm.price} onChange={handleAmount} placeholder="Enter Amounts" />
          </div>
          <div className="expensesFields">
            <textarea cols="30" value={ExpensesType==="Spead"?userSpeadForm.description:userIncomeForm.description} onChange={handleDescription} rows="1"></textarea>
          </div>

          <div className="expensesFields">
            <button onClick={handleSubmitData}>Add</button>
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
