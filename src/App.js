import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React, { useEffect } from "react"
import {auth} from './firebase'
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';

//pages
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Login from './Login.js'
import Payment from './Payment.js'
import Orders from './Orders.js'


const promise = loadStripe("pk_test_51Kr3xjBMctXSOLp7zqXKmtz2fy1rhIFyhrqEUeAb9NAkHkN1QWUIfV9USiplm6KuuI0bMNpI9VBSHG7irzqKdO5v00A3IqVIvf");


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run once when the app component loads....
      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >',authUser)
        if(authUser){
          //the user just loggedin or was logged in
          dispatch({
            type:'SET_USER',
            user:authUser
          })
        }else{
          //the
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
  },[])

  return (
    <BrowserRouter>
    <div className="app">
      
      <Routes>

        <Route path="/" element={<><Header /><Home /></>} />

        <Route path="/checkout" element={<><Header /><Checkout /></>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment/></Elements></>} />

        <Route path="/orders" element={<><Header /><Orders></Orders></>} />
 
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
