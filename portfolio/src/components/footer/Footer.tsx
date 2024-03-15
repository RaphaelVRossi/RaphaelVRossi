import React from 'react';
import Logo from '../logo/Logo';
import './Footer.scss';

import {ReactComponent as PhoneIcon} from '../../assets/icons/phone-icon.svg'
import {ReactComponent as EmailIcon} from '../../assets/icons/email-icon.svg'
import {ReactComponent as GitHubIcon} from '../../assets/icons/github-icon.svg'
import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin-icon.svg'

function Footer() {
  return (
    <section className="footer">
      <h1 className="page-title">Contact</h1>
      <div className="logo-contact">
        <Logo/>
        <div className="contact">
          <div className="icon-text">
            <PhoneIcon className="icon"/>
          </div>
          <div className="icon-text">
            <EmailIcon className="icon"/>
          </div>
          <div className="icon-text">
            <GitHubIcon className="icon"/>
          </div>
          <div className="icon-text">
            <LinkedinIcon className="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
