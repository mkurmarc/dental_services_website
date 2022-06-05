import React from "react";
import logo from "../images/edited/logos/logo2.png";

export default function Navbar() {
  return (
    <nav>
      <img
        src={logo}
        alt="Advanced Dental Solutions Demo"
        className="nav--logo"
      />
      <header></header>
    </nav>
  );
}
