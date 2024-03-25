import "./icons.scss"
import { ReactComponent as Icon } from '../../assets/icons/phone-icon.svg'

function PhoneIcon() {
  return (
    <a href="tel:+5511941460992" target="_blank" rel="noreferrer">
      <Icon className="icon" />
    </a>
  )
}

export default PhoneIcon;
