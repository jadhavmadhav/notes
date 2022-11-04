import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Login from "./Component/Login/Login";
import Registration from "./Component/Login/Registration";
import Home from "./Component/Home";
import { useSelector } from "react-redux";
import Header, { MobileBottomHeader } from "./Component/header/Header";
import SelectionModal from "./Component/addSelection/SelectionModal";
import AddExpenses from "./Component/AddExpenses";

function App() {
  let isLogin = true;
  const [AddSelectionModal, setAddSelectionModal] = useState(false);
  const [AddExpense, setAddExpense] = useState(false);

  const handelSelectionModal = () => {
    setAddSelectionModal(true);
  };
  const handleRemoveSelectionModal=()=>{
    // setAddSelectionModal(false)
  }
  
  const myStyle = {
    PointerEvent: "none",
    opacity: "0.5",
  };
  return (
    <BrowserRouter>
      <div className="maincontainer">
        <div className="mobileTopHeader">
          <MobileBottomHeader handelSelectionModal={handelSelectionModal} />
        </div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          {AddSelectionModal && <SelectionModal handleRemoveSelectionModal={handleRemoveSelectionModal} />}
          {AddExpense && <AddExpenses handleRemoveSelectionModal={handleRemoveSelectionModal}  />}
          <Routes>
            {isLogin ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="/registration" element={<Registration />} /> 

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
