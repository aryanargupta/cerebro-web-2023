import { useEffect, useState } from 'react';
import axiosInstance from '../../services/AxiosInstance';
import DashboardTitle from '../../components/Dashboard/DashboardTitle';
import DashboardInfoCard from '../../components/Dashboard/DashboardInfoCard';
import DashboardEventCard from '../../components/Dashboard/Cards/DashboardEventCard';
import './Dashboard.scss';
import preg from '../../assets/preg.png';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function Dashboard() {
  const [userData, setUserData] = useState({ infoCardData: {}, eventsSectionData: [] });
  const [isLoading, setIsLoading] = useState(true);

  const getInfoCardData = (fetchedData) => {
    const isInfoCardDataPresent = fetchedData && fetchedData.personal_details;
    return isInfoCardDataPresent
      ? {
          name:
            fetchedData.personal_details.first_name + ' ' + fetchedData.personal_details.last_name,
          instituteName: fetchedData.personal_details.institute_name,
          email: fetchedData.personal_details.email,
          mobileNo: fetchedData.personal_details.mobile_number,
        }
      : {};
  };

  const getEventsSectionData = (fetchedData) => {
    const isEventsSectionDataPresent =
      fetchedData && fetchedData.registered_events && fetchedData.registered_events.length > 0;
    return isEventsSectionDataPresent
      ? fetchedData.registered_events.map((event) => {
          const startDate = event.start_time.substring(0, 10);
          const startTime = event.start_time.substring(11, event.start_time.length);

          const endDate = event.end_time.substring(0, 10);
          const endTime = event.end_time.substring(11, event.end_time.length);

          return {
            key: event.event_title,
            eventName: event.event_title,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            endTime: endTime,
            isTeamEvent: event.is_team_event,
            registrationData: event.registration_data,
            submissionData: event.submission_data,
            teamName: event.team_name,
            teamCode: event.team_code,
            noMembersInTeam: event.current_size,
            teamMaxCapacity: event.max_size,
            isTeamFull: event.is_team_event ? event.is_full : true,
          };
        })
      : [];
  };

  useEffect(() => {
    setIsLoading(true);
    axiosInstance.get('account/dashboard/').then((res) => {
      const infoCardData = getInfoCardData(res.data);
      const eventsSectionData = getEventsSectionData(res.data);
      setUserData({ infoCardData, eventsSectionData });
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="dashboard">
      <DashboardTitle />

      <>
        <div className="dashboard__content">
          <DashboardInfoCard {...userData.infoCardData} />
          {userData.eventsSectionData.length > 0 ? (
            <DashboardEventCard eventsData={userData.eventsSectionData} />
          ) : (
            <div className="PleaseRegister">
              <img src={preg} alt="" />
            </div>
          )}
        </div>
      </>
    </div>
  );
}

export default Dashboard;
