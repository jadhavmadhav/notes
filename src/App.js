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
import Expenses from "./Component/Expenses";
import Notes from "./Component/Notes";
import Task from "./Component/Task";
import Profile from "./Component/profile/Profile";
import ViewDetails from "./Component/ViewDetails";
 

function App() {
  let isLogin = true;
  const [AddSelectionModal, setAddSelectionModal] = useState(false);
  const [AddExpense, setAddExpense] = useState(false);

  const handelSelectionModal = () => {
    setAddSelectionModal(AddSelectionModal?false:true);
  };
  const handleRemoveSelectionModal=()=>{
    setAddSelectionModal(false)
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
           
          <Routes>
            {isLogin ? (
              <Route path="/" element={<Home />} /> 
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="/registration" element={<Registration />} /> 
             <Route path="expenses" element={<Expenses /> } />
             <Route path='task' element={<Task />} />
             <Route path='notes' element={<Notes />} />
             <Route path='profile' element={<Profile />} />
             <Route path="view-detail" element={<ViewDetails />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
