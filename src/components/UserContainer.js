import React, { useState } from 'react'
import LeftComponent from './LeftComponent'
import User from './User'
import ShowUsers from './ShowUsers'
import AddLocations from './AddLocations'

const UserContainer = ({message, success, setMessage, setSuccess, admin, setAdmin}) => {

  return (
    <>
        {success ? 
        <>
          <LeftComponent /> 
          <User setAdmin={setAdmin} setSuccess={setSuccess}/> 
        </> :
        message?
        <ShowUsers admin={admin} setAdmin={setAdmin} setMessage={setMessage} setSuccess={setSuccess}/> :
        <>
          <LeftComponent />
          <AddLocations setSuccess={setSuccess} setMessage={setMessage}/>
        </> }
    </>
  )
}

export default UserContainer