/*
  Here we wrap entire app in shopContextProvider so that ShopContext availabe to entire application.
*/



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import "./index.css";
import ShopContextProvider from './context/ShopContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
)
