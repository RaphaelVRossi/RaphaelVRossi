import './Projects.scss';
import project1 from "../../assets/images/project-1.png"
import project2 from "../../assets/images/project-2.png"
import project3 from "../../assets/images/project-3.png"

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="page-title">Projects</h1>
      <div className="project-list">
        <div className="project">
          <h1 className="medium-font">Under Construction</h1>
          <img src={project1} alt="Project 1"/>
          <p className="small-font">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.  
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.  
          </p>
        </div> 
        <div className="project">
          <h1 className="medium-font">Under Construction</h1>
          <img src={project2} alt="Project 2"/>
          <p className="small-font">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.  
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.  
          </p>
        </div> 
        <div className="project">
          <h1 className="medium-font">Under Construction</h1>
          <img src={project3} alt="Project 3"/>
          <p className="small-font">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.  
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.  
          </p>
        </div> 
      </div>
    </section>
  )
}

export default Projects;
