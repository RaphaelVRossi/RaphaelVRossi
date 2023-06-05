import React from 'react';
import './Navigation.scss'
import {ReactComponent as PhoneIcon} from '../../assets/icons/phone-icon.svg'
import {ReactComponent as EmailIcon} from '../../assets/icons/email-icon.svg'
import {ReactComponent as GitHubIcon} from '../../assets/icons/github-icon.svg'
import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin-icon.svg'

function Navigation() {
  return (
    <section className="navigation">
        <div className="square">
          <p>
            About Me
          </p>
        </div>
        <div className="square">
          <p>
            Projects 
          </p>
        </div>
        <div className="square">
          <p>
            Contact 
          </p>
        </div>
        <div className="square-2">
        <PhoneIcon className="icon"/>
        </div>
        <div className="square-2">
        <EmailIcon className="icon"/>
        </div>
        <div className="square-2">
        <GitHubIcon className="icon"/>
        </div>
        <div className="square-2">
        <LinkedinIcon className="icon"/>
        </div>
    </section>
  )
}

export default Navigation;
