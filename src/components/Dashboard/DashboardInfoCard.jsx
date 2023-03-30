import DashboardAboutCard from './Cards/DashboardAboutCard';
import './DashboardInfoCard.scss';

function DashboardInfoCards({ name, instituteName, email, mobileNo }) {
  return (
    <div className="dashboard-info-cards-cont">
      <DashboardAboutCard
        name={name}
        instituteName={instituteName}
        email={email}
        mobileNo={mobileNo}
      />
      
    </div>
  );
}

export default DashboardInfoCards;
