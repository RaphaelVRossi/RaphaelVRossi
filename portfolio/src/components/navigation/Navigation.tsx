import './Navigation.scss'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import Button from '../button/Button';

function Navigation() {
  return (
    <section className="navigation">
      <Button> About Me </Button>
      <Button> Projects </Button>
      <Button> Contact </Button>
      <PhoneIcon />
      <EmailIcon />
      <GitHubIcon />
      <LinkedinIcon />
    </section>
  )
}

export default Navigation;
