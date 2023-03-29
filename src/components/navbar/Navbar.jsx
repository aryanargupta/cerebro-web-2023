import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ isLandingPage }) {
  const navigate = useNavigate();
  function navigateToDashboard() {
    navigate('/dashboard');
  }
  return (
    <>
      <div className={`hamburger${isLandingPage ? '_landing' : ''}`}> </div>
      <button className="dashboard-btn" onClick={navigateToDashboard} type="button">
        Dashboard
      </button>
    </>
  );
}

export default Navbar;
