import './App.css';
import LeftComponent from './components/LeftComponent';
import ShowUsers from './components/ShowUsers';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <LeftComponent />
      <User />
      <ShowUsers />
    </div>
  );
}

export default App;
