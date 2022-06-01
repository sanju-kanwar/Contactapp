import React from "react";
import Contact from "./componet/contect";
import './App.css'
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={ <Contact/>} />
      </Routes>
      </Router>
   
    </div>
  );
}

export default App;
