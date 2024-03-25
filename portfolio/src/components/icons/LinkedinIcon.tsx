import "./icons.scss"
import { ReactComponent as Icon } from '../../assets/icons/linkedin-icon.svg'

function LinkedinIcon() {
  return (
    <a href="https://www.linkedin.com/in/rapha-rossi/" target="_blank" rel="noreferrer">
      <Icon className="icon" />
    </a>
  )
}

export default LinkedinIcon;
