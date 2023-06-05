import React from 'react';
import './App.css';
import '../../styles/style.scss';
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import Navigation from '../navigation/Navigation'
import Projects from '../projects/Projects'


function App() {
  console.log(process.env)

  return (
    <section className="App">
      <Navigation/>
      <p>
        Hello World!
      </p>
      <Contact/>
      <Home/>
      <Projects/>
      <Footer/>
    </section>
  );
}

export default App;
