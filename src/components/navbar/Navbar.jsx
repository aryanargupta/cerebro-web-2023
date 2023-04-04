import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ isLandingPage }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  function navigateToDashboard() {
    navigate('/dashboard');
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className={`hamburger${isLandingPage ? '_landing' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <button className="dashboard-btn" onClick={navigateToDashboard} type="button">
        Dashboard
      </button>
      {showMenu && (
        <div className="menu">
          <a href="/faqs">FAQs</a>
          <a href="/timeline">Timeline</a>
          <a href="/events">Events</a>
          <a href="/">Home</a>
          <a href="/team">Teams</a>
        </div>
      )}
    </>
  );
}

export default Navbar;
