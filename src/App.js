import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import { Navbar, Footer } from './components'


import "./App.css";

const App = () => {
  const [info, setInfo] = useState([]);

  return (
    <div className="dotted__bg">
        <Navbar />
        <div className="outlet__margin">
          <Outlet context={setInfo}/>
        </div>
        <Footer linkedIn={info?.fields?.linkedIn} gitHub={info?.fields?.gitHub}/>
    </div>
  )
}

export default App