import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import AddExpenses from "./pages/AddExpenses";


function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>

          {/* <Home /> */}
          <Route path="/" element={<Home />} />
          <Route path="add-expense" element={<AddExpenses />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
