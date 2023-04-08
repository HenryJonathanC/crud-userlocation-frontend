import { useState } from 'react';
import './App.css';
// import AddLocations from './components/AddLocations';
// import LeftComponent from './components/LeftComponent';
// import ShowUsers from './components/ShowUsers';
// import User from './components/User';
import UserContainer from './components/UserContainer';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';

function App() {
  const[admin, setAdmin]= useState(false)
  const [success, setSuccess]= useState(true)
  const [message, setMessage]= useState(true)

  return (
    <div className="App">
      {/* <LeftComponent />
      <User /> */}
      {/* <ShowUsers /> */}
      {/* <LeftComponent />
      <AddLocations /> */}
      <Routes>
        <Route path='/' element={<UserContainer message={message} success={success} setMessage={setMessage} setSuccess={setSuccess} admin={admin} setAdmin={setAdmin}/>} />
        <Route path='/edit/:id' element={<Edit  essage={message} success={success} setMessage={setMessage} setSuccess={setSuccess} admin={admin} setAdmin={setAdmin}/>} />
      </Routes>
      {/* <UserContainer /> */}
    </div>
  );
}

export default App;
