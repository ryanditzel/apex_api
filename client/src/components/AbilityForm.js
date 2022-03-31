import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

const AbilityForm = (props) => {
  let navigate = useNavigate()
  
    const [data, setData] = useState({
        tactical: '',
        passive: '',
        ultimate: '',
   })
    function submit (e) {
      const url = `http://localhost:3001/api/legend/${props.legendId}/abilities/`
      e.preventDefault()
      Axios.post(url, {
        tactical: data.tactical,
        passive: data.passive,
        ultimate: data.ultimate,
      })
      .then(res => {
          console.log(res.data)
      })
      .catch((e) => {
        console.error('Create Ability Failed', e.message)
      })
    }
        function onChange(e) {
          const newdata = { ...data }
          newdata[e.target.name] = e.target.value
          setData(newdata)
          console.log(newdata)
        }

  return (
    <div>
    <h3>Add A New Ability</h3>
    <form onSubmit={ submit }>
      <input type="text area" name={'tactical'} placeholder={'Tactical'} onChange={(e) => onChange(e)}/>
      <input type="text area" name={'passive'} placeholder={'Passive'} onChange={(e) => onChange(e)}/>
      <input type="text area" name={'ultimate'} placeholder={'Ultimate'} onChange={(e) => onChange(e)}/>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default AbilityForm