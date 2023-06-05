import React from 'react';
import './Home.scss';


function Portfolio() {
  return (
  <div className="home-content">
    <h1 className="counter-clock-write portfolio">PORTFOLIO</h1>
    <div className="square-content">
      <div className="square-box upper">
        <h1>Hello World</h1>
      </div>
      <div className="mais-um-square">
        <div className="square-box-inner">
          <h1 className="counter-clock-write medium-font">Design and code</h1>
        </div>
        <div className="square-box-inner">
          <h1 className="small-font">&#123;&#125;</h1>
          <h1 className="small-font">[]</h1>
          <h1 className="small-font">()</h1>
          <h1 className="small-font">;</h1>
          <h1 className="small-font">&gt;</h1>
          <h1 className="small-font">&lt;</h1>
          <h1 className="small-font">=</h1>
          <h1 className="small-font">!</h1>
        </div>
      </div>
      <div className="square-box">
        <h1 className="counter-clock-write medium-font">Raphael Rossi</h1>
        <h1 className="counter-clock-write small-font">Fullstack Developer</h1>
      </div>
    </div>
  </div>
  )
}

function Home() {
  return (
    <section className="home">
      <section className="aboutme">
        <div/>
        <h1 className="larger-font">Who Am I?</h1>
        <p className="medium-font"> Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
      </section>
    <Portfolio/>
   </section>
  )
}

export default Home;
