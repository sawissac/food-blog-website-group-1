import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Detail from './components/Detail';
import Navbar from './components/Navbar';

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
