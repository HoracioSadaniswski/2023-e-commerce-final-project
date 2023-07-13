import React from 'react';
import { Home } from '../Home'
import { AboutUs } from '../AboutUs'
import { Contact } from '../Contact'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutUs/>
      <Contact/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <SignIn/>
    </div>
  );
}

export default App;
