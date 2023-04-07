import axios from 'axios'
import React, { useState } from 'react'

const AddLocations = ({ setSuccess,setMessage }) => {
    const [name, setName]= useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:4000/locations', {name, address, city, state, country})
        .then(res=>{
            // console.log(res.data)
        })
        .catch(err=>console.log(err.message))
        setSuccess(false)
        setMessage(true)
    }

  return (
    <div className='formContainer'>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <h2>Add Location</h2>
            <button id='show' onClick={()=>{setSuccess(false); setMessage(true)}}>Show Details</button>
        </div>
      <form onSubmit={handleSubmit}> 
          <div className='details'>
              <input type="text" value={name} placeholder='Location Name' name='name' required onChange={e=>setName(e.target.value)}/>
              <input type='text' value={address} placeholder='Address' name='address' required min='1' max='150' onChange={e=>setAddress(e.target.value)}/>
              <input type="text" value={city} placeholder='City' name='city' required onChange={e=>setCity(e.target.value)}/>
              <input type="text" value={state} placeholder='State' name='state' required onChange={e=>setState(e.target.value)}/>
              <input type="text" value={country} placeholder='Country' name='country' required onChange={e=>setCountry(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddLocations