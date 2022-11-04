import React,{useContext} from 'react'
import {SelectionContext} from './addSelection/SelectionModal'
import './AddExpenses.css'

export default function AddExpenses({ handleRemoveSelectionModal }) {
     const [select, setSelect] = React.useState('Select Catagories');

     const contextData = useContext(SelectionContext);
     const{setSelection,setaddExpenses,setaddIncome}=contextData
    const handleAdd=()=>{
      setSelection(true) 
      setaddExpenses(false)
      setaddIncome(false) 
    }
     return (
          <div className="addExpensesContainer">
          <h5>Add Expenses</h5>
               <div className="expensesFields">
                    <select>
                         <option value="" key="">Select Catagories</option>
                         <option value="" key="">Shopping</option>
                         <option value="" key="">Helth</option>
                         <option value="" key="">Enterments</option>
                    </select>
               </div>
               <div className="expensesFields">
                    <select>
                         <option value="" key="">Select Catagories</option>
                         <option value="" key="">Shopping</option>
                         <option value="" key="">Helth</option>
                         <option value="" key="">Enterments</option>
                    </select>
               </div>
               <div className="expensesFields">
                    <input type="text" placeholder="Enter Amounts" />
               </div>
               <div className="expensesFields">
                    <textarea cols="30" rows="5"></textarea>
               </div>

               <div className="expensesFields">
                    <button onClick={handleAdd}>Add</button>
               </div>

          </div>
     );
}
