import React from 'react'
import { Link } from 'react-router-dom'
import { FooterCont, FooterLinks } from '../../assets/style/styled'
import leaf from '../../assets/images/download.png'

const Footer = () => {
    return (
      <FooterCont>
        <div className="country">
          <p>Nigeria</p>
        </div>
        <hr />
        <FooterLinks>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Advertising</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
          </ul>
          <Link to="/" className='copyright'>
            <img src={leaf} alt="" />
            Central neutral since 2007
          </Link>
          <ul>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
          </ul>
        </FooterLinks>
      </FooterCont>
    );
}

export default Footer
