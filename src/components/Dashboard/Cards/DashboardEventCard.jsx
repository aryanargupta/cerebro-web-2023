import React from 'react';
import './DashboardEventCard.scss';
import eventLogo from '../../../assets/eventLogo.png';
import tick from '../../../assets/tick.png';
import cross from '../../../assets/cross.png';

function DashboardEventCard({ eventsData }) {
  return (
    <div className="events">
      <div className="events__header">
        <div className="events__header__eventName">EVENT</div>
        <div className="events__header__eventDate">DATE</div>
        <div className="events__header__eventName">TIME</div>
        <div className="events__header__eventName">TEAN SIZE</div>
        <div className="events__header__eventName">TEAM NAME</div>
        <div className="events__header__eventName">STATUS</div>
      </div>
      <div className="events__data">
        {eventsData.map((event) => (
          <div className="bg" key={event.key}>
            <div className="events__data__eventName">
              <img className="events__data__eventName__logo" src={eventLogo} alt="" />
              {event.eventName}
            </div>
            <div className="events__data__eventDate">{event.startDate}</div>
            <div className="events__data__eventTime">
              {event.startTime}-{event.endTime}
            </div>
            <div className="events__data__eventTeamSize">
              {event.noMembersInTeam}/{event.teamMaxCapacity}
            </div>
            <div className="events__data__eventTeamName">{event.teamName}</div>
            <div className="events__data__eventStatus">
              {event.isTeamFull ? (
                <div>
                  <img style={{ marginRight: '10px' }} src={tick} alt="" />
                  <p style={{ color: '#5FE7AD' }}>Completed</p>
                </div>
              ) : (
                <div>
                  <img style={{ marginRight: '10px' }} src={cross} alt="" />
                  <p style={{ color: '#E75F87' }}>Completed</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardEventCard;
