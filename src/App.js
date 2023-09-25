import './App.css';
import Eight from './eightBall.js'
import { React,useState } from 'react'


function App() {
  return (
  <div className="win-container">
    <header className="header">
      <h1>Maigc 8 Ball</h1>
      <h3>Type your question/statement and click Submit...or press [Enter]</h3>
    </header>
    <div className="ball-container">
      <Eight/>
    </div>
  </div>
  );
}

export default App;
