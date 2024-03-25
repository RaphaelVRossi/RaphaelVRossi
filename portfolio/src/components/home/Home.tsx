import './Home.scss';
import Portfolio from '../portfolio/Portfolio';

function Home() {
  return (
    <section className="home" id="home">
      <section className="aboutme">
        <div />
        <h1 className="larger-font">Who Am I?</h1>
        <p className="medium-font">
        I am a tech enthusiast with a passion for code, debugging, and retro gaming. Ever since I was a kid, I have been fascinated by how computers work and how they can be used to create amazing things.
        </p>
        <p className="medium-font">
          I started programming as a teenager and quickly fell in love with the art of turning ideas into code. I love the challenge of solving complex problems and finding elegant solutions. I am also a big fan of retro games, especially Final Fantasy and Pokemon.
        </p>
        <p className="medium-font">
          In addition to programming and gaming, I am also passionate about working in a simple yet efficient environment, which is why I love using the terminal, especially VIM!
        </p>
        <p className="medium-font">
          I am currently working as a full-stack developer at a large entertainment company, using Python and Go for the backend and React with Material UI for the frontend.
        </p>
        <p className="medium-font">
          I am a contributor to open source projects and I am always looking for new projects to contribute to.
          Outside of work, I enjoy spending time with my wife and friends, playing video games, and collecting and playing Magic: the Gathering cards.
          I am excited to see what the future holds for technology.</p>
      </section>

      <div className="home-content">
        <Portfolio />
      </div>
    </section >
  )
}

export default Home;
