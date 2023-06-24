import React from "react";
import logo from "../assets/file.png";
import '../layouts/navbar.css'
// react fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// ms-auto boostrap 5 ke bawah ml-auto
function Navbar() {
  return (
        <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-light bg-success">
            <div className="container"> 
            <a className="navbar-brand" href="#Header"><img className="logo" src={logo} alt="gambar..."/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={ {color: "#fff"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto "> 
                <li className="nav-item">
                <a className="nav-link" href="#Myproject">My Project</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#about">About Me</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Me</a>
                </li>
                
            </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar