import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import Main2 from './components/Main2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Main2 />
      <Login />
      <Detail />
      
    </div>
  );
}

export default App;
