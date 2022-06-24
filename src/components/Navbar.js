import React from "react";
import logo from "../images/edited/logos/logo2_noback.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import hamburger from ""console.log();

export default function Navbar() {
  return (
    <nav>
      <img
        src={logo}
        alt="Advanced Dental Solutions Demo"
        className="nav--logo"
      />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <span class="material-symbols-outlined">menu</span>
    </nav>
  );
}
