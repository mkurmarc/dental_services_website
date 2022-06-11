import React from "react";
import logo from "../images/edited/logos/logo2_noback.png";
// import hamburger from ""console.log();

export default function Navbar() {
  return (
    <nav>
      <img
        src={logo}
        alt="Advanced Dental Solutions Demo"
        className="nav--logo"
      />
      <span class="material-symbols-outlined">menu</span>
    </nav>
  );
}
