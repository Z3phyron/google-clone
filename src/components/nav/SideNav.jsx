import React from "react";
import { FiHome } from "react-icons/fi";
import { BiHistory } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { CgPlayListSearch } from "react-icons/cg";
import { IoMdHelp } from "react-icons/io";
import { RiShieldUserFill } from "react-icons/ri";
import { BiHide } from "react-icons/bi";
import { HiDocumentSearch } from "react-icons/hi";
import { MdFeedback, MdSettings } from "react-icons/md";
import { SideNavCont } from "../../assets/style/styled";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Links = [
  {
    icon: <FiHome />,
    title: "Home",
  },
  {
    icon: <BiHistory />,
    title: "Search history",
  },
  {
    icon: <BsFillBookmarksFill />,
    title: "Collections",
  },
  {
    icon: <CgPlayListSearch />,
    title: "Offline Searches",
  },
  {
    icon: <MdSettings />,
    title: "Settings",
  },
  {
    icon: <RiShieldUserFill />,
    title: "Your data in Search",
  },
  {
    icon: <BiHide />,
    title: "Your data in Search",
  },
  {
    icon: <HiDocumentSearch />,
    title: "How Search works",
  },
  {
    icon: <IoMdHelp />,
    title: "Help",
  },
  {
    icon: <MdFeedback />,
    title: "Send Feedback",
  },
];

const SideNav = ({toggle, handleClick}) => {
  return (
    <SideNavCont className={toggle ? "active" : ""}>
      <div className="logo">
        <img src={logo} alt="" onClick={handleClick} />
      </div>

      <ul className="links">
        {Links.map((el, index) => (
          <li key={index}>
            <Link to="/" onClick={handleClick}>
              <span className="icon">{el.icon}</span>
              <span className="title">{el.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </SideNavCont>
  );
};

export default SideNav;
