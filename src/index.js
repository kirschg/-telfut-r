import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import App from './App';
import Home from './Pages/Home'
import Cities from './Pages/Cities'
import Restaurants from './Pages/Restaurants'
import Foods from './Pages/Foods';
import Order from './Pages/Order';
import Register from './Pages/Register';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="Cities" element={<Cities />} />
      <Route path=":City/Restaurants" element={<Restaurants />} />
      <Route path=":City/:Restaurant/Selection" element={<Foods />} />
      <Route path="YourOrder" element={<Order />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
