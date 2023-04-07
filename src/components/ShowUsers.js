import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ShowUsers.css'

const ShowUsers = ({setSuccess, setMessage}) => {
  const [userData, setUserData] = useState([])
  const [locationData, setLocationData] = useState([])

    useEffect(()=>{
      const fetchData = async () =>{
        await axios.get('http://localhost:4000/users')
        .then((res)=> {
          setUserData(res.data)
          // console.log(userData)
        })
        // .catch(err=> console.log(err.message))
      }
      fetchData()
      const fetchLocation = async ()=>{
        await axios.get('http://localhost:4000/locations')
        .then((res)=>{
          setLocationData(res.data)
        })
        // .catch(err=> console.log(err.message))
      }
      fetchLocation()
    }, [])

  return (
    <>
      <div className='container1'>
        <h3>User Details :</h3>
          <div className='elements'>
              <div className='element-1'>
                  <h4>Name</h4>
                  {userData.map(user=> <p key={user._id}>{user.name}</p>)}
              </div>
              <div className='element-2'>
                  <h4>Age</h4>
                  {userData.map(user=> <p key={user._id}>{user.age}</p>)}
              </div>
              <div className='element-3'>
                  <h4>Email ID</h4>
                  {userData.map(user=> <p key={user._id}>{user.email}</p>)}
              </div>   
              <div className='element-4'>
                  <h4>Phone</h4>
                  {userData.map(user=> <p key={user._id}>{user.number}</p>)}
              </div>      
              <div className='element-4'>
                  <h4>Location</h4>
                  {userData.map(user=> user.location ? <p key={user._id}>{user.location.city}</p> : <p>-- </p>)}
              </div>      
              <div className='element-4'>
                  <h4>User-Role</h4>
                  {userData.map(user=> user.role?  <p key={user._id}>{user.role}</p> : <p>--</p>)}
              </div>    
          </div>
            <button className='add' onClick={()=> setSuccess(true)}>Add user</button>
            <h3>Location Details :</h3>
        <div className='elements'>
            <div className='element-1'>
                <h4>Name</h4>
                {locationData.map(location=> <p key={location._id}>{location.name}</p>)}
            </div>
            <div className='element-2'>
                <h4>Address</h4>
                {locationData.map(location=> <p key={location._id}>{location.address}</p>)}
            </div>
            <div className='element-3'>
                <h4>City</h4>
                {locationData.map(location=> <p key={location._id}>{location.city}</p>)}
            </div>   
            <div className='element-4'>
                <h4>State</h4>
                {locationData.map(location=> <p key={location._id}>{location.state}</p>)}
            </div>      
            <div className='element-4'>
                <h4>Country</h4>
                {locationData.map(location=> <p key={location._id}>{location.country}</p>)}
            </div>      
        </div>
            <button className='add' style={{marginBottom: '3rem'}} onClick={()=> setMessage(false)}>Add Location</button>
      </div>
    </>
  )
}

export default ShowUsers