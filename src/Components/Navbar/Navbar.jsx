import React from "react";
import "../Navbar/Navbar.css";
import Brightlogo2 from "../Assets/BrightBridge2.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Brightlogo2} alt="" />
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="buttons">
            <Link to="/signup"><button id="signup">Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
