import React from 'react';
import './TimelineItemRight.scss';
import Calender from '../../assets/images/CalenderIcon.svg';
import Clock from '../../assets/images/ClockIcon.svg';

function TimelineItem({ item }) {
  return (
    <div className="timeline_item_container_right_parent">
      <div className="timeline_item_container_right">
        <div className="timeline_item_container_right_title">{item.name}</div>
        <div className="timeline_item_container_right_content">
          <div className="timeline_item_container_right_content_date">
            <img src={Calender} alt="Calender Icon" />
            <p className="timeline_item_container_right_text">{item.date}</p>
          </div>
          <div className="timeline_item_container_right_content_time">
            <img src={Clock} alt="Clock Icon" />
            <p className="timeline_item_container_right_text">{item.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
