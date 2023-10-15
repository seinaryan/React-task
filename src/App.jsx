import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import WordCounter from './Pages/WordCounter'
import AgeCal from './Pages/AgeCal'
import Calculator from './Pages/Calculator'
import ColorPicker from './Pages/ColorPicker'
import DummyData from './Pages/DummyData'
import Portfolio from './Pages/Portfolio'


import './App.css'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact Component={WordCounter} />
        <Route path='/task2' Component={Calculator} />
        <Route path='/task3' Component={ColorPicker} />
        <Route path='/task4' Component={DummyData} />
        <Route path='/task5' Component={AgeCal} />
        <Route path='/portfolio' Component={Portfolio} />
      </Routes>
    </Router>
  )
}

export default App
