import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const AbilityForm = (props) => {

  const [isEdit, setEdit] = useState(!props.ability)
  const [data, setData] = useState(props.ability || {
      tactical: '',
      passive: '',
      ultimate: '',
  })

  function submit (e) {
    let url = `http://localhost:3001/api/legend/${props.legendId}/abilities/`
    if (data._id) {
      url += data._id
    }
    e.preventDefault()
    const method = data._id ? Axios.put : Axios.post
    method(url, {
      tactical: data.tactical,
      passive: data.passive,
      ultimate: data.ultimate,
    })
    .then(res => {
        console.log(res.data)
        window.location.reload()
    })
    .catch((e) => {
      console.error(`${isEdit ? `Update` : `Create`} Ability Failed`, e.message)
    })
  }
  function onChange(e) {
    const newdata = { ...data }
    newdata[e.target.name] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const onDelete = () => {
    const url = `http://localhost:3001/api/legend/${props.legendId}/abilities/${data._id}`
    Axios.delete(url).then((response) => {
        console.log(`Success`, response)
        window.location.reload()
    }).catch(() => {
        console.log('Error')
    })
}

  const ValueField = ({ name, value }) => {
    if (!isEdit) {
      return value;
    }
    return (
      <input
        type="textarea"
        name={name}
        placeholder={name}
        onChange={onChange}
        value={value}
      />
    );
  };

  return (
    <div>
      {!isEdit && <button className='legend-close-button' onClick={() => {onDelete()}} >x</button>}
      {!isEdit && <button className='legend-edit-button' onClick={() => {setEdit(true)}} >Edit</button>}
      <form onSubmit={ submit }>
        <div>
          <ul>
              <li>Tactical Ability: <ValueField name={'tactical'} value={data.tactical}/></li>
              <li>Passive Ability: <ValueField name={'passive'} value={data.passive}/></li>
              <li>Ultimate Ability: <ValueField name={'ultimate'} value={data.ultimate}/></li>
          </ul>
        </div>
        {isEdit && <button className='submit-legend-button' type='submit'>Submit</button> }
        {isEdit && <button className='legend-cancel-button' onClick={() => {setEdit(false)}}>Cancel</button> }
      </form>
    </div>
  );
}

export default AbilityForm