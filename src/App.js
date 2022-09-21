import React from 'react'
import {Outlet} from 'react-router-dom'
import { Navbar } from './components'


import "./App.css";

const App = () => {
  return (
    <div className="dotted__bg">
        <Navbar />
        <div className="outlet__margin">
          <Outlet />
        </div>
    </div>
  )
}

export default App