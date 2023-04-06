import React, { useState } from 'react'
import './User.css'
import axios from 'axios'

const User = () => {
    const [name, setName]= useState('')
    const [age, setAge]= useState()
    const[email, setEmail]=useState('')
    const [phone, setPhone]= useState()
    const [location, setLocation]=useState()
    const [userType, setUserType]= useState('')
    
    const handleSubmit =() =>{
      axios.post('http://localhost:4000/users', {name, age, email, phone, location})
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>console.log(err.message))
    }

  return (
    <div className='formContainer'>
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}> 
          <div className='details'>
              <input type="text" value={name} placeholder='Name' name='name' required onChange={e=>setName(e.target.value)}/>
              <input type='number' value={age} placeholder='Age' name='age' required min='1' max='150' onChange={e=>setAge(e.target.value)}/>
              <input type="email" value={email} placeholder='Email Address' name='email' required onChange={e=>setEmail(e.target.value)}/>
              <input type="tel" value={phone} placeholder='Phone' pattern='[6-9][0-9]{9}' name='phone' required onChange={e=>setPhone(e.target.value)}/>
              <div className='drop'>
                <div className='drop1'>
                  <label htmlFor='location'>Select Location:</label>
                  <select value={location} name='location' onChange={e=>setLocation(e.target.value)}>
                    <option>Bangalore</option>
                  </select>
                </div>
                <div className='drop1'>
                  <label htmlFor='usertype'>Select User Type</label>
                  <select value={userType} onChange={e=>setUserType(e.target.value)} name='usertype' required>
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