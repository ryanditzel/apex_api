import React from 'react'
import { useNavigate } from 'react-router-dom'

const Legends = (props) => {
    let navigate = useNavigate()
  
    const showLegends = (legends) => {
      navigate(`${legends._id}`)
    }

    return (
      <div className="legend-grid">
        {
        props.legends.map((legend) => (
          <div className="legend-card" onClick={() => showLegends(legend)} key={legend._id}>
            <h3 className='legend-name'>{legend.name}</h3>
            <img className='legend-image' style={{ display: 'block' }} src={legend.img} alt={legend.name} />
          </div>
        ))} 
      </div>
    )
  }
  
  export default Legends