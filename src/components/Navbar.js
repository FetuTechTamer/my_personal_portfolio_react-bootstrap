import React from 'react';
import logo from '../logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className='container-fluid' >
        <a className="navbar-brand" href="#">
          <img src={logo} className="img-fluid rounded-circle" alt="logo" style={{ width: '100px', height: '100px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;