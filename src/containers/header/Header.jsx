import React from 'react'
import "./header.css"
import headshot from "../../assets/headshot.jpg"

const Header = () => {
  return (
    <div className="mp__header section__padding">
      <div className="mp__header-content">
        <p>👋   Hello, I am</p>
        <div className="mp__header-title">
          <h1>Mubariz Ahmed!</h1> 
          <div className="mp__header-subtitle">
            <h3>Mechatronic Systems Engineer</h3>
            <h3>Developer</h3>
            <h3>Graphic Designer</h3>
          </div>
        </div>

      </div>
      <div class="mp__header-headshot">
        <img src= {headshot} alt="headshot"/>
      </div>
    </div>
  )
}

export default Header