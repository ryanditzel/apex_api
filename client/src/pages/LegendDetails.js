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
                            <AbilityForm legendId={id} key={ability._id} ability={ability} />
                        )}
                        <div className='ability-form'>
                            <h3>Add A New Ability</h3>
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