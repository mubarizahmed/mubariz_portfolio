import React from 'react'

import { Navbar } from './components'
import { Header } from './containers'
import { Experience } from './containers'
import { Education } from './containers'
import { Competencies } from './containers'

import "./App.css";

const App = () => {
  const [language, setLanguage] = React.useState('en')

  return (
    <div className="gradient__bg">
        <Navbar />
        <Header />
        <Experience language={language} />
        <Education language={language} />
        <Competencies language={language} />
    </div>
  )
}

export default App