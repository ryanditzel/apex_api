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
import AbilityForm from './components/AbilityForm'


const  App = () => {

  const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api';

  const [legends, setLegend] = useState([])
  const [abilities, setAbilities] = useState([])
  const [newAbility, setNewAbility] = useState({
    id: '',
    tactical: '',
    passive: '',
    ultimate: '',
  })

  const getLegends = async() => {
    const legendList = await axios.get(`${BASE_URL}/legends`)
    console.log(legendList)
    setLegend(legendList.data)
  }

  const getAbilities = async() => {
    const abilitiesList = await axios.get(`${BASE_URL}/abilities`)
    console.log(abilitiesList)
    setAbilities(abilitiesList.data)
  }

  useEffect (() => {
    getLegends()
    getAbilities()
  },[])

  const addAbility = (e) => {
    e.preventDefault()
    const currentAbility = abilities
    const createdAbility = {
      ...newAbility, 
      id: parseInt(abilities.length + 1),
    }
    
    currentAbility.push(createdAbility)
    setNewAbility({id: '', tactical: '', passive: '', ultimate: ''})
  }

  const handleChange = (e) => {
    setNewAbility({ ...newAbility, [e.target.name]: e.target.value })
  }

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
          <Route path='legends/:id' element={<LegendDetails legends={legends} abilities={abilities}/>} />
          <Route path='new' element={ <AbilityForm newAbility={newAbility} handleChange={handleChange} addAbility={addAbility}/>} />
        </Routes>
      </main>
      {/* <footer>
        <Navbar />
      </footer> */}
    </div>
  );
}

export default App;
