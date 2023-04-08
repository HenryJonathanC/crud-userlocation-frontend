import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LeftComponent from './LeftComponent'

const Edit = ({setAdmin, setSuccess}) => {
    const [userData, setUserData] = useState([])
    const {id}=useParams()
    const [name, setName]= useState('')
    const [age, setAge]= useState()
    const[email, setEmail]=useState('')
    const [number, setNumber]= useState()
    const [location, setLocation]=useState()
    const [role, setRole]= useState('')

    const[locations, setLocations]= useState([])
    
    const handleSubmit =(e) =>{
      e.preventDefault()
      axios.put(`http://localhost:9000/users/${id}`, {name, age, email, number, role})
      // .then(res=>{
      //   console.log(res.data)
      // })
      // .catch(err=>console.log(err.message))
      // console.log(location)
      {role==='Admin' && setAdmin(true) }
      setSuccess(false)
      window.location.reload()
    }

    useEffect(()=>{
      axios.get('http://localhost:9000/locations')
      .then(res=>{
        // console.log(res.data)
        setLocations(res.data)
      })
      // .catch(err=>console.log(err.message))

      const fetchData = async () =>{
        await axios.get('http://localhost:9000/users')
        .then((res)=> {
          setUserData(res.data)
          // console.log(userData)
        })
        // .catch(err=> console.log(err.message))
      }
      fetchData()
    },[])

  return (
    <>
        <LeftComponent />
        <div className='formContainer'>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <h2>Edit {userData.name}</h2>
            <Link to={{ pathname: `/`}}>
                <button id='show' onClick={()=>setSuccess(false)}>Show Details</button>
            </Link>
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
                    <select value={location} name='location' onChange={e=>{setLocation(e.target.id); console.log(e.target.id)}}>
                        {locations.map(loc=> <option id={loc._id} key={loc._id}>{loc.city}</option>)}
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
            <Link to={{ pathname: `/`}}>
                <button type="submit">Submit</button>
            </Link>
        </form>
        </div>
    </>
  )
}

export default Edit