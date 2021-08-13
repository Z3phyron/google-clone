import React from "react";
import { HomeCont } from "../../assets/style/styled";
import Search from "../blocks/Search";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeCont>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Search />
      <div className="lang_offered">
        <p>
          Google offered in.
          <Link to="/">Hausa</Link>
          <Link to="/">Igbo</Link>
          <Link to="/">Ede Yoruba</Link>
          <Link to="/">Nigerian Pidgin</Link>
        </p>
      </div>
    </HomeCont>
  );
};

export default Home;
