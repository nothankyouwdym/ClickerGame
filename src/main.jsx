import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Clicker from './Clicker'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route element={<App />} path={"/"}></Route>
            <Route element={<Clicker />} path="/Clicker"></Route>
        </Routes>
  </BrowserRouter>
)
