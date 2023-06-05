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
      <div className="content">
        <Home/>
        <p>
          Hello World!
        </p>
        <p>
          From ENV: { process.env.REACT_APP_APIKEY }
        </p>
        <Contact/>
        <Projects/>
        <Footer/>
      </div>
    </section>
  );
}

export default App;
