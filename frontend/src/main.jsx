// main.js or main.jsx
// import 'bootstrap/dist/css/bootstrap.min.css';s
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <BrowserRouter>
  <HelmetProvider>
  <App />
  </HelmetProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
