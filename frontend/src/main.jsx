import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <div className="bg-gray-900 text-white min-h-screen">
      <App />
      </div>
    </BrowserRouter>
    
  </React.StrictMode>,
)
