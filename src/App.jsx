import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Events from './pages/Events/Events';
import Team from './pages/Team/Team';
import Faqs from './pages/FAQs/Faqs';
import Timeline from './pages/Timeline/Timeline';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import Dashboard from './pages/Dashboard/Dashboard';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/account/email-verify" element={<VerifyEmail />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
