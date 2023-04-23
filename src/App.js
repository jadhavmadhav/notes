import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import AddExpenses from "./pages/AddExpenses";
import PaymentStatus from "./pages/PaymentStatus";
import Activitys from "./pages/Activitys";
import Analysis from "./pages/Analysis";
import Header from "./component/Header";


function App() {
  console.log("App")
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="position-sticky top-0 w-100" style={{zIndex:10}}>
          <Header />
        </div>
        <Routes>

          {/* <Home /> */}
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<AddExpenses />} />
          <Route path="/add-expense/status" element={<PaymentStatus />} />
          <Route path="/activitys" element={<Activitys />} />
          <Route path="/expense-anaylsis" element={<Analysis />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
