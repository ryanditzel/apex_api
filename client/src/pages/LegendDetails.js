import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import AbilityForm from '../components/AbilityForm'
import Axios from 'axios'



const LegendDetails = (props) => {

    let {id} = useParams()

    const [selectedLegend, setLegend] = useState('')

    useEffect(() => {
        let selectedLegend = props.legends.find(
        (legend) => legend._id === (id)
        )
        setLegend(selectedLegend)
    
    }, [props.legends, id])

    const [selectedAbilities, setAbilities] = useState('')

    useEffect(() => {
        console.log(id)
        let selectedAbilities = props.abilities.filter(
        (ability) => ability.legend_id === (id)
        )
        setAbilities(selectedAbilities)
    }, [props.legends, props.abilities, id])
    
    const onDelete = (abilityId) => {
        const url = `http://localhost:3001/api/legend/${id}/abilities/${abilityId}`
        Axios.delete(url).then((response) => {
            console.log(`Success`, response)
            // window.location.reload()
        }).catch(() => {
            console.log('Error')
        })
    }
    
    if(selectedLegend) {
    
    return (
        <div>
            <div className='legend-details'>
                <img src={selectedLegend.img} alt='legend poster'/>
                <h1>{selectedLegend.name}</h1>
                <h2>{selectedLegend.tag_line}</h2>
                <p>{selectedLegend.description}</p>
                    <div className='ability-details'>
                        {selectedAbilities.map((ability) =>
                        <div key={ability._id}>
                            <button onClick={() => {onDelete(ability._id)}} >x</button>
                            <ul>
                                <li>Tacical Ability: {ability.tactical}</li>
                                <li>Passive Ability: {ability.passive}</li>
                                <li>Ultimate Ability: {ability.ultimate}</li>
                            </ul>
                        </div>
                        )}
                        <div className='ability-form'>
                            <AbilityForm legendId={id}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

    else {
        return (
        <div className='loading-content-wrapper'>
            Error, please refresh page.
        </div>
        )
    }}
export default LegendDetails