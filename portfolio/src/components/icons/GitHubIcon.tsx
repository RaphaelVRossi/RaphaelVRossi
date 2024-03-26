import "./icons.scss"
import { ReactComponent as Icon } from '../../assets/icons/github-icon.svg'

function GitHubIcon() {
  return (
    <a href="https://github.com/raphaelvrossi" target="_blank" rel="noreferrer" aria-label="Go to my GitHub page">
      <Icon className="icon" />
    </a>
  )
}

export default GitHubIcon;
