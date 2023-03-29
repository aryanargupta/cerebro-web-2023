import React from 'react';
import './TimelineItemLeft.scss';
import Calender from '../../assets/images/CalenderIcon.svg';
import Clock from '../../assets/images/ClockIcon.svg';

function TimelineItem({ item }) {
  return (
    <div className="timeline_item_container_left_parent">
      <div className="timeline_item_container_left">
        <div className="timeline_item_container_left_title">{item.name}</div>
        <div className="timeline_item_container_left_content">
          <div className="timeline_item_container_left_content_date">
            <img src={Calender} alt="Calender Icon" />
            <p className="timeline_item_container_left_text">{item.date}</p>
          </div>
          <div className="timeline_item_container_left_content_time">
            <img src={Clock} alt="Clock Icon" />
            <p className="timeline_item_container_left_text">{item.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
