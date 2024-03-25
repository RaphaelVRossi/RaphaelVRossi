import "./icons.scss"
import { ReactComponent as Icon } from '../../assets/icons/github-icon.svg'

function GitHubIcon() {
  return (
    <a href="https://github.com/raphaelvrossi" target="_blank" rel="noreferrer">
      <Icon className="icon" />
    </a>
  )
}

export default GitHubIcon;
