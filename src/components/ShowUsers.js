import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ShowUsers.css'

const ShowUsers = () => {
  const [userData, setUserData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/users')
        .then(res=> {
          setUserData(res.data)
          // console.log(userData)
        })
        .catch(err=> console.log(err.message))
    }, [])
  return (
    <div className='container1'>
      <h3>User Details :</h3>
        <div className='elements'>
            <div className='element-1'>
                <h4>Name</h4>
                {userData.map(user=> <p key={user.id}>{user.name}</p>)}
            </div>
            <div className='element-2'>
                <h4>Age</h4>
                {userData.map(user=> <p key={user.id}>{user.age}</p>)}
            </div>
            <div className='element-3'>
                <h4>Email ID</h4>
                {userData.map(user=> <p key={user.id}>{user.email}</p>)}
            </div>       
            <div className='element-4'>
                <h4>User-Role</h4>
                {userData.map(user=> <p key={user.id}>{user.role}</p>)}
            </div>    
        </div>
        <button>Home</button>
    </div>
  )
}

export default ShowUsers