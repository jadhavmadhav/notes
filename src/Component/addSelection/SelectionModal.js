import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import AddExpenses from "./AddExpenses";
import AddIncome from './AddIncome';
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
  const handleBackButton = () => {
    setSelection(true)
    setaddExpenses(false)
    setaddIncome(false)
  }

  const contextObject = {
    selection,
    setSelection,
    setaddExpenses,
    setaddIncome,
    handleBackButton
  }

  // --------------------------



  return (
    <SelectionContext.Provider value={contextObject}>
      <div className="modalContainer">
        <AddExpenses />
      </div>
    </SelectionContext.Provider>
  );
}
