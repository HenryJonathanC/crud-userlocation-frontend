import React, { useEffect, useState } from 'react'
import './User.css'
import axios from 'axios'

const User = ( {setSuccess} ) => {
    const [name, setName]= useState('')
    const [age, setAge]= useState()
    const[email, setEmail]=useState('')
    const [number, setNumber]= useState()
    const [location, setLocation]=useState()
    const [role, setRole]= useState('')

    const[locations, setLocations]= useState([])
    
    const handleSubmit =(e) =>{
      e.preventDefault()
      axios.post('http://localhost:4000/users', {name, age, email, number, role})
      // .then(res=>{
      //   console.log(res.data)
      // })
      // .catch(err=>console.log(err.message))
      // console.log(location)
      setSuccess(false)
    }

    useEffect(()=>{
      axios.get('http://localhost:4000/locations')
      .then(res=>{
        // console.log(res.data)
        setLocations(res.data)
      })
      // .catch(err=>console.log(err.message))
    },[])

  return (
    <div className='formContainer'>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <h2>User Information</h2>
        <button id='show' onClick={()=>setSuccess(false)}>Show Details</button>
      </div>
      <form onSubmit={handleSubmit}> 
          <div className='details'>
              <input type="text" value={name} placeholder='Name' name='name' required onChange={e=>setName(e.target.value)}/>
              <input type='number' value={age} placeholder='Age' name='age' required min='1' max='150' onChange={e=>setAge(e.target.value)}/>
              <input type="email" value={email} placeholder='Email Address' name='email' required onChange={e=>setEmail(e.target.value)}/>
              <input type="text" value={number} placeholder='Phone' name='phone' required onChange={e=>setNumber(e.target.value)}/>
              <div className='drop'>
                <div className='drop1'>
                  <label htmlFor='location'>Select Location:</label>
                  <select value={location} name='location' onChange={e=>setLocation(e.target.value)}>
                    {locations.map(loc=> <option key={loc._id}>{loc.city}</option>)}
                  </select>
                </div>
                <div className='drop1'>
                  <label htmlFor='role'>Select User Type</label>
                  <select value={role} onChange={e=>setRole(e.target.value)} name='role' required>
                    <option>User</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
          </div>
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default User