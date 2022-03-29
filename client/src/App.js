import './styles/App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Legends from './pages/Legends'
import Search from './components/Search'
import LegendDetails from './pages/LegendDetails'

const  App = () => {

  const [legends, setLegend] = useState('')

  const getLegends = async() => {
    const legendList = await axios.get('http://localhost:3001/api/legends')
    console.log(legendList)
    setLegend(legendList.data)
  }


  useEffect (() => {
    getLegends()
  },[])

  return (
    <div className="App">
      <header className="Navbar">
       <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home legends={legends} />} />
          <Route path='legends' element={<Legends legends={legends} />} />
          <Route path='about' element={<About />} />
          <Route path='search' element={<Search />} />
          <Route path='legends/:id' element={<LegendDetails legends={legends} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
