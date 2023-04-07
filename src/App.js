import { useState } from 'react';
import './App.css';
import AddLocations from './components/AddLocations';
import LeftComponent from './components/LeftComponent';
import ShowUsers from './components/ShowUsers';
import User from './components/User';

function App() {
  const [success, setSuccess]= useState(true)
  const [message, setMessage]= useState(true)


  return (
    <div className="App">
      {/* <LeftComponent />
      <User /> */}
      {/* <ShowUsers /> */}
      {/* <LeftComponent />
      <AddLocations /> */}
      {success ? 
        <>
          <LeftComponent /> 
          <User setSuccess={setSuccess}/> 
        </> :
        message?
        <ShowUsers setMessage={setMessage} setSuccess={setSuccess}/> :
        <>
          <LeftComponent />
          <AddLocations setSuccess={setSuccess} setMessage={setMessage}/>
        </> }
    </div>
  );
}

export default App;
