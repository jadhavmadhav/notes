import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import AddExpenses from "../AddExpenses";
import AddIncome from '../AddIncome'
import "./SelectionModal.css";

export const SelectionContext = createContext()

export default function SelectionModal({ handleRemoveSelectionModal }) {
  const navigate = useNavigate()

  const [selection, setSelection] = useState(true)
  const [addExpenses, setaddExpenses] = useState(false)
  const [addIncome, setaddIncome] = useState(false);

  const handleAddExpenses = () => {
    setaddExpenses(true)
    setaddIncome(false)
    setSelection(false)
  }

  const handleAddIncome = () => {
    setaddExpenses(false)
    setaddIncome(true)
    setSelection(false)
  }

  const contextObject = {
    selection,
    setSelection,
    setaddExpenses,
    setaddIncome
  }
  return (
    <SelectionContext.Provider value={contextObject}>
      <div className="modalContainer" onClick={() => { handleRemoveSelectionModal() }}>
        {
          addExpenses && <AddExpenses />
        }

        {addIncome && <AddIncome />}

        {selection && <div className="selectionButtons">
          <button onClick={handleAddIncome}>Add Income</button>
          <button onClick={handleAddExpenses}>Add Expenses</button>
          <button>Add Task </button>
          <button>Add Note</button>
        </div>}
      </div>
    </SelectionContext.Provider>
  );
}
