import React from 'react';
import rapha from './raphael-rossi.svg';
import './App.css';
import './style.scss';
import Button from '@mui/material/Button';


function clickMe() {
  alert("You clicked me again 2!");
}

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={rapha} className="App-logo" alt="logo" />
      </header>
      <div>
        <Button variant="contained" onClick={clickMe}>Button</Button>
      </div>
      <div>
        <h1>Olá Mundo!</h1>
        <h1>{process.env.REACT_APP_APIKey}</h1>
      </div>
    </div>
  );
}

export default App;
