import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

const ParkForm = (props) => {
  let navigate = useNavigate()
  
    const url = 'http://localhost:3001//api/abilities/add-new'
    const [data, setData] = useState({
        id: '',
        tactical: '',
        passive: '',
        ultimate: '',
   })
    function submit (e) {
         e.preventDefault()
         Axios.post(url, {
          id: data.id,
          tactical: data.tactical,
          passive: data.passive,
          ultimate: data.ultimate,
        })
        .then(res => {
           console.log(res.data)
           navigate('/legends')
        })
      }
        function onChange(e) {
          const newdata = { ...data }
          newdata[e.target.id] = e.target.value
          setData(newdata)
          console.log(newdata)
        }

  return (
    <div>
    <h3>Add A New Ability</h3>
    <form onSubmit={ submit }>
      <input type="text area" id={'tactical'} name={'tactical'} placeholder={'Tactical'} onChange={(e) => onChange(e)}/>
      <input type="text area" id={'passive'} name={'passive'} placeholder={'Passive'} onChange={(e) => onChange(e)}/>
      <input type="text area" id={'ultimate'} name={'ultimate'} placeholder={'Ultimate'} onChange={(e) => onChange(e)}/>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default ParkForm