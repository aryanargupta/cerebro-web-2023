import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import PrivateRoute from "./components/RouteElements/PrivateRoute";
import PublicRoute from "./components/RouteElements/PublicRoute";
import useAuth from "./hooks/useAuth";
import './App.scss';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account/email-verify" element={<VerifyEmail />} />
            <Route
              path="/account/password-reset/:uidb64/:token"
              element={<ResetPassword />}
            />
        </Route>
        <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/team" element={<Team />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/events" element={<Events />} />        
      </Routes>
  );
}

export default App;
