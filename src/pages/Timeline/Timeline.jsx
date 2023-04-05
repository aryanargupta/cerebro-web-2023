import React from 'react';
import './Timeline.scss';
import { timelineData } from './TimelineData';
import TimelineItemRight from '../../components/TimelineItems/TimelineItemRight';
import TimelineItemLeft from '../../components/TimelineItems/TimelineItemLeft';
import TimelineItemMiddle from '../../components/TimelineItems/TimelineItemMiddle';
import Navbar from '../../components/navbar/Navbar';

function Timeline() {
  return (
    <div className="background">
      <Navbar isLandingPage={!false} />
      <div className="timeline_container_title"> </div>
      <div className="timeline_container">
        <div className="timeline_container_left">
          <div className="timeline_container_left_head">
            <div className="timeline_container_left_head_left_box"> </div>
            <div className="timeline_container_left_head_middle_box">Online Events</div>
            <div className="timeline_container_left_head_right_box"> </div>
          </div>
          <div className="timeline_container_items">
            <div className="timeline_container_items_line"> </div>
            {timelineData.leftData.map((item) => (
              <>
                <TimelineItemLeft item={item} key={item} />
                <div className="timeline_container_items_line"> </div>
              </>
            ))}
          </div>
          <div className="timeline_container_left_mouse"> </div>
        </div>
        <div className="timeline_container_middle">
          <div className="timeline_container_middle_head">
            <div className="timeline_container_middle_head_left_box"> </div>
            <div className="timeline_container_middle_head_middle_box">
              Online Events
            </div>
            <div className="timeline_container_middle_head_right_box"> </div>
          </div>
          <div className="timeline_container_items">
            <div className="timeline_container_items_line"> </div>
            {timelineData.middleData.map((item) => (
              <>
                <TimelineItemMiddle item={item} key={item} />
                <div className="timeline_container_items_line"> </div>
              </>
            ))}
          </div>
          <div className="timeline_container_left_mouse"> </div>
        </div>
        <div className="timeline_container_right">
          <div className="timeline_container_right_head">
            <div className="timeline_container_right_head_left_box"> </div>
            <div className="timeline_container_right_head_middle_box">Offline Events (April 9)</div>
            <div className="timeline_container_right_head_right_box"> </div>
          </div>
          <div className="timeline_container_items">
            <div className="timeline_container_items_line"> </div>
            {timelineData.rightData.map((item) => (
              <>
                <TimelineItemRight item={item} key={item} />
                <div className="timeline_container_items_line"> </div>
              </>
            ))}
          </div>
          <div className="timeline_container_left_mouse"> </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
