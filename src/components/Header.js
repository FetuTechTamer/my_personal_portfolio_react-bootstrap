import React from "react";
import { ReactTyped } from 'react-typed';

const Header = () => {
  return (
    <div className="Header-Wraper">
      <div className="main-info">
        <h1>WEBSITE DEVELOPMENT!</h1>
        <ReactTyped
          className="typed-text"
          strings={["Web Design", "Mobile App Development", "Advertisement", "UI/UX Design"]}
          typeSpeed={40}  
          backSpeed={60}   
          loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  );
}

export default Header;