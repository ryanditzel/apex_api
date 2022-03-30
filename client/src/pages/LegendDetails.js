import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import AbilityForm from '../components/AbilityForm'

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
                            <ol>
                                <li>Tacical Ability: {ability.tactical}</li>
                                <li>Passive Ability: {ability.passive}</li>
                                <li>Ultimate Ability: {ability.ultimate}</li>
                            </ol>
                        </div>
                        )}
                        <div className='ability-form'>
                            <AbilityForm/>
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