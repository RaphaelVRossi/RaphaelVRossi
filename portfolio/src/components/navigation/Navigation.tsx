import './Navigation.scss'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import Button from '../button/Button';

function Navigation() {
  return (
    <section className="navigation">
      <Button href="#home"> About Me </Button>
      <Button href="#projects"> Projects </Button>
      <Button href="#talks"> Talks </Button>
      <Button href="#contact"> Contact </Button>
      <PhoneIcon />
      <EmailIcon />
      <GitHubIcon />
      <LinkedinIcon />
    </section>
  )
}

export default Navigation;
