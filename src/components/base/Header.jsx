import { useState } from "react";

import logo from "../../Assets/logo.svg";
import {AiOutlineClose} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"
import {style} from "../../Data/data"

function Header() {
  // I essentially want an header that has my logo on the left side and an hamburger on the right hand side
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  

  return (
    <header className="bg-[#023E8A]">
      <nav className="relative w-[90%] max-w-[900px] my-0 mx-auto py-[.7em]">
        <div className="left-top pt-[.4em]">
          <Link to="/">
            <img
              src={logo}
              alt="tobiloba solutions logo"
              className="w-[60px] h-[60px] object-contain"
            />
          </Link>
        </div>
        <div className="right-top absolute top-[1.7em] right-[.4em]">
          {navOpen === false ? <GiHamburgerMenu style={style} onClick={toggleNav} /> : <AiOutlineClose style={style} onClick={toggleNav} />}
        </div>
        {navOpen && (
          <div className="my-sidebar-as-role">
            {/* I want the nav bar to show up from the entire top or it could be a sidebar */}
            <ul className="list">
              <li className="list-item">
                <Link to="/">About </Link>
              </li>
              <li className="list-item">
                <Link to="/skills">Skills </Link>
              </li>
              <li className="list-item">
                <Link to="/works">Work</Link>
              </li>
              <li className="list-item">
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
