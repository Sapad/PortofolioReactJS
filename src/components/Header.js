import React from "react";
import ReactTyped from "react-typed";
import '../layouts/header.css';
import CV from '../assets/CV.pdf'

const Header = () => {
  return (
    <div className="header-wraper" id="Header">
        <div className="main-info">
            <h1>Sapto Adiyanto</h1>
           <ReactTyped 
            className="typed-text"
            strings={["Mahasiswa Semester 6", "React JS", "HTML", "CSS", "Javascript"]}
            typeSpeed={40}
            backSpeed={60}
            loop
           />
           <a href={CV} className="btn-main-offer" download>Download CV</a>
        </div>
    </div>
    );
}

export default Header