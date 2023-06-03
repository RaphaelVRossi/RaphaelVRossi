import React from 'react';
import rapha from './raphael-rossi.svg';
import './App.css';


function clickMe() {
  alert("You clicked me!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rapha} className="App-logo" alt="logo" />
      </header>
      <div>
        <button onClick={clickMe}>Button</button>
      </div>
    </div>
  );
}

export default App;
