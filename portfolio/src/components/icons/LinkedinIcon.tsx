import "./icons.scss"
import { ReactComponent as Icon } from '../../assets/icons/linkedin-icon.svg'

function LinkedinIcon() {
  return (
    <a href="https://www.linkedin.com/in/rapha-rossi/" target="_blank" rel="noreferrer" aria-label="Go to my Linkedin profile">
      <Icon className="icon" />
    </a>
  )
}

export default LinkedinIcon;
