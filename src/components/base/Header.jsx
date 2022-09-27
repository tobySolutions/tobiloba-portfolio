import React from "react";
import logo from "../../Assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
// import {}

function Header() {
  // I essentially want an header that has my logo on the left side and an hamburger on the right hand side
  const style = {width: "27px", height: "27px", borderRadius: '50%', color: '#fff'};
  return (
    <header className="bg-[#023E8A]">
      <nav className="relative w-[90%] max-w-[900px] my-0 mx-auto py-[.7em]">
        <div className="left-top pt-[.4em]">
          <img
            src={logo}
            alt="tobiloba solutions logo"
            className="w-[60px] h-[60px] object-contain"
          />
        </div>
        <div className="right-top absolute top-[1.7em] right-[1em]">
          <GiHamburgerMenu style={style} />
          <div className="my-sidebar-as-role">
            {/* I want the nav bar to show up from the entire top or it could be a sidebar */}
            <ul className="list">
              <li>About</li>
              <li>Skills</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
