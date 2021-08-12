import React from "react";
import { HeaderCont, HeaderNav, HeaderToggle } from "../../assets/style/styled";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'
import ninedots from '../../assets/images/nine-dots.png'
import SideNav from "./SideNav";

const Header = () => {
  return (
      <HeaderCont>
          <SideNav className='sidenav'/>
          <HeaderToggle>
              <FiMenu/>
      </HeaderToggle>

      <HeaderNav>
        <ul>
          <li>
            <Link to="/" className="all">
              All
            </Link>
          </li>
          <li>
            <Link to="/" className="gmail">
              Gmail
            </Link>
          </li>
          <li>
            <Link to="/">Images</Link>
          </li>
        </ul>
        <ul className="user_info">
          <li>
            <Link to="/">
              <img src={ninedots} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/" className='cta'>
                Sign In
            </Link>
          </li>
        </ul>
          </HeaderNav>
          

    </HeaderCont>
  );
};

export default Header;
