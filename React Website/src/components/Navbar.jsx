import React from "react";
import "./Navbar.css";
import orcLogo from "../assets/orc_logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={orcLogo} alt="OrchestralHumanBody-Logo" />
        <h2>The Orchestral Human Body</h2>
      </nav>
    </header>
  );
};

export default Navbar;
