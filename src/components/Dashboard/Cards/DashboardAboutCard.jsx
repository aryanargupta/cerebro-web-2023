// import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import './DashboardAboutCard.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Cerebro-logo.png';
import useAuth from '../../../hooks/useAuth';
import { redirect } from 'react-router-dom';

function DashboardAboutCard({ name, instituteName, email, mobileNo }) {
  const auth = useAuth();
  const logout = () => {
    auth.logout();
    redirect("/");
  }
  return (
    <div className="dashboard-about-card">
      <div className="dashboard-about-card__logo">
        <img src={logo} alt="" />
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Name</div>
        <div className="dashboard-about-card__row__value">{name}</div>
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Institute</div>
        <div className="dashboard-about-card__row__value">{instituteName}</div>
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Email</div>
        <div className="dashboard-about-card__row__value">{email}</div>
      </div>
      <div className="dashboard-about-card__row">
        <div className="dashboard-about-card__row__title">Contact No.</div>
        <div className="dashboard-about-card__row__value">{mobileNo}</div>
      </div>
      <div className="Links-outer">
        <div className="pass-reset-main">
          <Link to="/change-password">
            <p className="pass-reset-text">Reset Password</p>
          </Link>
          <Link to="/faqs">
            <p className="pass-reset-text">FAQs</p>
          </Link>
          <Link to="/timeline">
            <p className="pass-reset-text">Timeline</p>
          </Link>
        </div>
        <div className="pass-reset-alt">
          <Link to="/events">
            <p className="pass-reset-text">Events</p>
          </Link>
          <Link to="/team">
            <p className="pass-reset-text">Team</p>
          </Link>
          <p onClick={logout} className="pass-reset-text">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardAboutCard;
