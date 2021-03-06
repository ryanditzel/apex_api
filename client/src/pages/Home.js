import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../components/Search'
import LegendCard from '../components/LegendCard'
import YoutubeEmbed from '../components/YoutubeEmbed'


const Home = (props) => {

    const [searchResults, setSearchResults] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
  
    const searchOnChange = (e) => {
      const value = e.target.value
      console.log(value)
      setSearchQuery(value)
    }
  
    const searchOnSubmit = function (e) {
      const legends = props.legends
      let results = legends.filter((legend) => {
        return legend.name.toLowerCase().includes(searchQuery.toLowerCase())
      })
      console.log(results)
  
      setSearchResults(results)
    }

    let navigate = useNavigate()

    const showLegends = (legends) => {
        navigate(`legends/${legends._id}`)
    }

    return (
        <div className='home'>
            <h1>Apex Legends Database</h1>
            <div className='search-bar'>
            <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
            </div>
            <section className='search-results container-grid'>
                {searchResults.map((result) => {
                return <LegendCard key={result._id} onClick={() => showLegends(result)} image={result.img} name={result.name} />
                })}
            </section>
            <div className="youtube-embedded">
              <YoutubeEmbed embedId="5OUu_p16oe0" />
            </div>

        </div>
    )
}

export default Home