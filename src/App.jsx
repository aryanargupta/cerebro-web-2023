import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Events from './pages/Events/Events';
import Sponsors from './pages/Sponsors/Sponsors';
import Team from './pages/Team/Team';
// import Navbar from './components/Navbar';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
  return (
    // <div className="main__page">
    //   <h1 className="main__page__test__h1">Welcome to Cerebro 2023</h1>
    // </div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="events" element={<Events />} />
      <Route path="sponsors" element={<Sponsors />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/team" element={<Team />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
