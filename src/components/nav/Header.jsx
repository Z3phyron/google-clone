import React, { useState } from "react";
import { HeaderCont, HeaderNav } from "../../assets/style/styled";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import ninedots from "../../assets/images/nine-dots.png";
import SideNav from "./SideNav";

const Header = (props) => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }
  return (
    <HeaderCont>
          <SideNav toggle={toggle} handleClick={ handleClick }/>
      

      <HeaderNav>
       
          
              <ul className='nav'>
                  <li className="toggle" >
                      <FiMenu onClick={ handleClick }/>
                  </li>
            <li className="all">
              <Link to="/">
                All
              </Link>
            </li>
            <li className="gmail">
              <Link to="/" >
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
            <Link to="/" className="cta">
              Sign In
            </Link>
          </li>
        </ul>
      </HeaderNav>
    </HeaderCont>
  );
};

export default Header;
