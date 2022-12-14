import React from 'react';
import './App.css';
import Home from "./Home"
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
