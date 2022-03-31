import React from "react"
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Checkout from "./Checkout.js"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout/>} />

      </Routes>

      
          

      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
