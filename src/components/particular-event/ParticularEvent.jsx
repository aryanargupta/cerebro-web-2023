import React, { useContext, useState } from "react";
import { EventContext } from "../../context/EventContext";
import close from "../../assets/images/cross.png";
import img from "../../assets/images/event-img.png";
import prize_border from "../../assets/images/prize_border.png";
import "./ParticularEvent.scss";
const ParticularEvent = () => {
  const handleonClickRegister=()=>{
    setDisplay("notDisplay");
    setDisable("display");
    setRegisterDisplay("display");
  }
  const {
    visible,
    setVisible,
    onClickCard,
    display,
    setDisplay,
    onClickClose,
    events,
    openevent,setDisable,setRegisterDisplay
  } = useContext(EventContext);
  return (
    <div className={`particular-container ${display}`}>
      <div className="bg-img"></div>
      <div className="event-content">
        <div className="left-container">
          <img src={img} alt="" />
        </div>
        <div className="right-container">
          <div className="event-title">
            <h2>{openevent.title}</h2>
          </div>
          <div className="event-desc">
            <p>{openevent.description}</p>
          </div>
          <div className="event-time">
            <div className="event-prize">
              <img src={prize_border} alt="" />
            </div>
            <div className="event-date">
              <div className="event-date-in">17-apr-2023 time</div>
              <div className="event-date-out">17-apr-2023 time</div>
            </div>
          </div>
          <div className="event-team">
            <div className="event-team-left">
              <li>Team Size</li>
              <li>Converner</li>
              <li>Co-Converner</li>
            </div>

            <div className="event-team-right">
              <li>4</li>
              <li>Converner</li>
              <li>Co-Converner</li>
            </div>
          </div>

          <div className="event-btn-container">
            <div className="event-btn-register">
              <button className="event-btn" onClick={handleonClickRegister}>Register</button>
            </div>
            <div className="event-btn-join-team">
              <button className="event-btn">Join team</button>
            </div>
          </div>
        </div>
        <img className="close-btn" onClick={onClickClose} src={close} alt="" />
      </div>
    </div>
  );
};

export default ParticularEvent;
