import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { sidebarData } from "./sidebarData";
import "../css/Navbar.css";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import logo from "../award_logo.png";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link>
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
          <Link to={"/filter"}>
            <BsIcons.BsFilter />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <img src={logo}></img>
            <h2>Awards Menu</h2>
            {sidebarData.map((item, i) => {
              return (
                <li key={i} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
