import React from 'react'

const LegendCard = (props) => {
  
  return (
    <div className="card park-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt={props.image} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default LegendCard