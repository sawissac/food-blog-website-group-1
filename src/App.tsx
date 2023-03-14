import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Main />
      <Login />
      <Detail />
    </div>
  );
}

export default App;
