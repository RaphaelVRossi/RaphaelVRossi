import './Talks.scss';
import Carousel from '../carousel/Carousel';

const hacktoberFest = (
  <div className="talk">
    <h1 className="medium-font">HacktoberFest na Globo: Como funciona?</h1>
    <iframe src="https://www.youtube.com/embed/akUO6jP-HJ8" title="GlobotechCast | Episódio 54 – HacktoberFest na Globo: Como funciona?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <p className="small-font">
      #openSource #globo #hacktoberFest
    </p>
  </div>
)

const gitlabCi = (
  <div className="talk">
    <h1 className="medium-font">Gitlab-CI: O que é e por que utilizar?</h1>
    <iframe src="https://www.youtube.com/embed/DcjGNgso314" title="Engcast #07 - Gitlab-CI: O que é e por que utilizar?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <p className="small-font">
      #gitlab-ci #engdb #devops
    </p>
  </div>
)

const microservicos = (
  <div className="talk">
    <h1 className="medium-font">Microsserviços modulares em produção</h1>
    <iframe src="https://www.youtube.com/embed/nItgmEkZqEY" title="Engcast #02 - Microsserviços modulares em produção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <p className="small-font">
      #microservicos #engdb #develop
    </p>
  </div>
)

const engeek2 = (
  <div className="talk">
    <h1 className="medium-font">Engeek Tech Beer - Episodio 02</h1>
    <iframe src="https://www.youtube.com/embed/SNYWsZDTYs0" title="Engeek Tech Beer - Episodio 02" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <p className="small-font">
      #engdb
    </p>
  </div>
)

const engeek1 = (
  <div className="talk">
    <h1 className="medium-font">Engeek Tech Beer -  Episodio 01</h1>
    <iframe src="https://www.youtube.com/embed/WTUIqA5Jrbg" title="Engeek Tech Beer -  Episodio 01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <p className="small-font">
      #engdb
    </p>
  </div>
)

function Talks() {
  return (
    <section className="talks" id="talks">
      <h1 className="page-title">Talks</h1>
      <div className="talks-list">
        {
          Carousel(
            {
              components: [
                hacktoberFest,
                gitlabCi,
                microservicos,
                engeek2,
                engeek1
              ]
            }
          )
        }
      </div>
    </section>
  )
}

export default Talks;
