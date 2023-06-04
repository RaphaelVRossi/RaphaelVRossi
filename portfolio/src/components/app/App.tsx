import React from 'react';
import {ReactComponent as ReactLogo} from './raphael-rossi.svg';
import './App.css';
import '../../styles/style.scss';
import Button from '@mui/material/Button';
import Logo from '../logo/logo'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import Navigation from '../navigation//Navigation'
import Projects from '../projects/Projects'


function clickMe() {
  alert("You clicked me again 2!");
}

function App() {
  console.log(process.env)

  return (
    <section className="App">
      <p>
        Hello World!
      </p>
      <Contact/>
      <Footer/>
      <Home/>
      <Navigation/>
      <Projects/>
    </section>
  );
}

export default App;
