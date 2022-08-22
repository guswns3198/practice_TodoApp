import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React, {useState} from 'react';

function App() {

  const [number, setNumber] = useState(0);

  const handleButtonClick = () => {
    setNumber(
      num => num + 1
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{number}</span>
        <button onClick={handleButtonClick}>Click!</button>       
      </header>
    </div>
  );
}

export default App;
