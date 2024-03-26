import "./icons.scss"
import { ReactComponent as Icon } from '../../assets/icons/email-icon.svg'

function EmailIcon() {
  return (
    <a href="mailto:contact@raphaelrossi.io" aria-label="Link to my email contact@raphaelrossi.io">
      <Icon className="icon" />
    </a>
  )
}

export default EmailIcon;
