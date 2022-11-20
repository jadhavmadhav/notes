import React, { useContext ,useState,useEffect} from 'react' 
import './AddExpenses.css'



export default function AddExpenses({ handleRemoveSelectionModal }) {
     const [ExpensesType, setExpensesType] = useState('Spead');

     const userSpeadObj = {
       type: ExpensesType,
       catagory: '',
       price: '',
       description: ''
     }
     const userIncomeObj = {
       type: ExpensesType,
       catagory: '',
       price: '',
       description: ''
     }
     const [userSpeadForm, setuserSpeadForm] = useState(userSpeadObj);
     const [userIncomeForm, setuserIncomeForm] = useState(userIncomeObj);
     const [catagory, setCatagory] = useState([]);
   
   
     const [FinalIncome, setFinalIncome] = useState();
     const [FinalSpead, setFinalSpead] = useState();
   
   
     const handleType = (e) => {
       const value = e.target.value
       setExpensesType(e.target.value)
       value === "Income" && setuserIncomeForm({ ...userIncomeForm, type: value })
       value === "Spead" && setuserSpeadForm({ ...userSpeadForm, type: value })
     }
   
     const handleCatagory = (e) => {
       const value = e.target.value
       ExpensesType === "Income" && setuserIncomeForm({ ...userIncomeForm, catagory: value })
       ExpensesType === "Spead" && setuserSpeadForm({ ...userSpeadForm, catagory: value })
     }
   
     const handleAmount = (e) => {
       const value = e.target.value
       ExpensesType === "Income" && setuserIncomeForm({ ...userIncomeForm, price: value })
       ExpensesType === "Spead" && setuserSpeadForm({ ...userSpeadForm, price: value })
     }
     const handleDescription = (e) => {
       const value = e.target.value
   
       ExpensesType === "Income" && setuserIncomeForm({ ...userIncomeForm, description: value })
       ExpensesType === "Spead" && setuserSpeadForm({ ...userSpeadForm, description: value })
     }
   
     const handleSubmitData = (e) => {
       const randomColor = Math.floor(Math.random() * 16777215).toString(16);
       ExpensesType === "Income" && setFinalIncome({ ...userIncomeForm, color: randomColor })
       ExpensesType === "Spead" && setFinalSpead({ ...userSpeadForm, color: randomColor })
       setuserIncomeForm({ type: '', catagory: '', price: '', description: '' })
       setuserSpeadForm({ type: '', catagory: '', price: '', description: '' })
     }
   
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
   
     useEffect(() => {
       let temp = []
       Catagoreis.map((item) => {
         if (item.id === ExpensesType) {
           temp.push(item)
           setCatagory(temp)
         }
       })
     }, [ExpensesType])
   
   
    
     return (
          <div className='selection-container white-box'>
          <div className="expensesFields">
            <select
              onChange={handleType}>
              <option value="Spead" key="">Spead</option>
              <option value="Income" key="">Income</option>
            </select>
          </div>
          <div className="expensesFields">
            <select
              value={ExpensesType === "Spead" ? userSpeadForm.catagory : userIncomeForm.catagory}
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
            <input type="text" value={ExpensesType === "Spead" ? userSpeadForm.price : userIncomeForm.price} onChange={handleAmount} placeholder="Enter Amounts" />
          </div>
          <div className="expensesFields">
            <textarea cols="30" value={ExpensesType === "Spead" ? userSpeadForm.description : userIncomeForm.description} onChange={handleDescription} rows="1"></textarea>
          </div>

          <div className="expensesFields">
            <button onClick={handleSubmitData}>Add</button>
          </div>
        </div>
     );
}
