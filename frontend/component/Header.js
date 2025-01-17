import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RoomCSS/header.css';

const Header = () => {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img src="https://img.icons8.com/?size=100&id=8021&format=png&color=000000" alt="" className="logo" />
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;