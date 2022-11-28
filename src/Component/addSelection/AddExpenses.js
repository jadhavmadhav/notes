import React, { useContext, useState, useEffect } from 'react'
import { postExpenses } from '../../services/services';
import './AddExpenses.css'


const Catagoreis = [
  {
    catagoryType: 'Expenses',
    catagoryName: 'Rent'
  },
  {
    catagoryType: 'Expenses',
    catagoryName: 'Transportation'
  },
  {
    catagoryType: 'Expenses',
    catagoryName: 'Groceries'
  },
  {
    catagoryType: 'Expenses',
    catagoryName: 'Home and Utilities'
  },
  {
    catagoryType: 'Expenses',
    catagoryName: 'Insurance'
  },
  {
    catagoryType: 'Expenses',
    catagoryName: 'Bill'
  },
  {
    catagoryType: 'Expenses',
    catagoryName: 'Education'
  },
  {
    catagoryType: 'Expenses',
    catagoryName: 'Health and personal care'
  },
  {
    catagoryType: 'Income',
    catagoryName: 'Salary',
  }, {
    idexpenses: 'Income',
    catagoryName: 'House Property'
  }, {
    catagoryType: 'Income',
    catagoryName: 'Profit'
  }, {
    catagoryType: 'Income',
    catagoryName: 'Gain of Business'
  }, {
    catagoryType: 'Income',
    catagoryName: 'farming'
  }
]

export default function AddExpenses({ handleRemoveSelectionModal }) {

  const [postObj, setPostObj] = useState({
    expensesType: 'Expenses',
    userId:'EUM1'
  })

  const [catagories, setcatagories] = useState([]);
 
  const handleChangeForm = (e) => {
    setPostObj({ ...postObj, [e.target.name]: e.target.value })
  }

  const ExpensesInfo = async (Data) => { 
    try {
      const req = await postExpenses(Data)
      const res = await req.data
      
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitData = () => {
ExpensesInfo(postObj)

setPostObj({expensesType:'Expenses',catagory:'',amount:'',description:''})
  }

  useEffect(() => {
    let temp = []
    Catagoreis.map((item) => {
      if (item.catagoryType === postObj.expensesType) {
        temp.push(item)
        setcatagories(temp)
      }
    })
  }, [postObj.expensesType])


  return (
    <div className='selection-container white-box'>
      <div className="expensesFields">
        <select value={postObj.expensesType} name='expensesType' onChange={handleChangeForm}>
          <option value="Expenses" key="">Expenses</option>
          <option value="Income" key="">Income</option>
        </select>
      </div>
      <div className="expensesFields">
        <select value={postObj.catagory} name='catagory' onChange={handleChangeForm}>
          <option >Select {postObj.expensesType} Catagory</option>
          {
            catagories.map(({ catagoryName }, ind) => {
              return <option value={catagoryName} key={ind}>{catagoryName}</option>
            })
          }
        </select>
      </div>
      <div className="expensesFields">
        <input type="text" value={postObj.amount} name='amount' onChange={handleChangeForm} placeholder="Enter Amounts" />
      </div>
      <div className="expensesFields">
        <textarea cols="30" value={postObj.description} name='description' onChange={handleChangeForm} rows="1"></textarea>
      </div>

      <div className="expensesFields">
        <button onClick={handleSubmitData}>Add</button>
      </div>
    </div>
  );
}
