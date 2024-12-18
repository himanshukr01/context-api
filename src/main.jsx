import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import UserContex from './context/UserContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContex>
      <App /> 
    </UserContex>
)
