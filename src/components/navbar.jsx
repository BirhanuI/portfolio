import Logo from "./../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [toggle, useToggle] = useState(false);
  const link = [
    { link: "home", title: "Home" },
    { link: "bio", title: "Bio" },
    { link: "skill", title: "Skills" },
    { link: "about", title: "About" },
    { link: "contact", title: "Contact" },
  ];
  return (
    <div className="navbar">
      <div className="nav">
        <img src={Logo} alt="" srcset="" />
        <ul>
          {link.map((link) => (
            <li key={link.link}>{link.title}</li>
          ))}
        </ul>
        <div
          className="menu"
          onClick={() => {
            useToggle(!toggle)
          }}
        >
          <AiOutlineMenu />
        </div>
        <div className={`nav-module ${toggle ? "show" : ""}`}>
          {link.map((link) => (
            <div className="menu-link" key={link.link}>
              {link.title}
            </div>
          ))}
        </div>
        <div className={`module ${toggle ? "show" : ""}`} onClick={
            ()=>{useToggle(!toggle)}
        }></div>
      </div>
    </div>
  );
};

export default Navbar;
