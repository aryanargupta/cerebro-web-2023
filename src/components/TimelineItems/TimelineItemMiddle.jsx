import React from 'react';
import './TimelineItemMiddle.scss';
import Calender from '../../assets/images/CalenderIcon.svg';
import Clock from '../../assets/images/ClockIcon.svg';

function TimelineItem({ item }) {
  return (
    <div className="timeline_item_container_middle_parent">
      <div className="timeline_item_container_middle">
        <div className="timeline_item_container_middle_title">{item.name}</div>
        <div className="timeline_item_container_middle_content">
          <div className="timeline_item_container_middle_content_date">
            <img src={Calender} alt="Calender Icon" />
            <p className="timeline_item_container_middle_text">{item.date}</p>
          </div>
          <div className="timeline_item_container_middle_content_time">
            <img src={Clock} alt="Clock Icon" />
            <p className="timeline_item_container_middle_text">{item.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
