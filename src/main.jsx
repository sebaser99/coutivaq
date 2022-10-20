import React from 'react'
import ReactDOM from 'react-dom/client'
import { CoutivaqApp } from './CoutivaqApp'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoutivaqApp/>
    </BrowserRouter>
  </React.StrictMode>
)
