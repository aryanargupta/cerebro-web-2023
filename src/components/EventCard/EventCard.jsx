import React from 'react';
import './EventCard.scss';

function EventCard({ size, url }) {
  return (
    <div className={`event_card_container ${size}`}>
      <img className="event_card_container_img" src={url} alt="glimplse" />
    </div>
  );
}

export default EventCard;
