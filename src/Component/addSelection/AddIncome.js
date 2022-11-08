import React, { useContext } from 'react' 
import { SelectionContext } from './SelectionModal'


export default function AddIncome() {

  const contextData = useContext(SelectionContext);
  const { setSelection, setaddExpenses, setaddIncome, handleBackButton } = contextData
  const handleAdd = () => {
    setSelection(true)
    setaddExpenses(false)
    setaddIncome(false)
  }
  return (
    <> 

      <div className="addExpensesContainer">
        <h5>Add Income</h5>
        <div>
          <button className='backButton' onClick={() => handleBackButton()}> <span>&#8592;</span> back</button>
        </div>
        <div className="expensesFields">
          <select>
            <option value="" key="">Select Type</option>
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
    </>
  )
}
