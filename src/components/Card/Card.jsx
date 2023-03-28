import React, { useContext, useEffect } from "react";
import "./Card.scss";
import img from "../../assets/images/img1.png";
import left from "../../assets/images/leftArrow.png";
import data from "../../pages/Events/utils/Events.json";
import axios from "axios";
import { EventContext } from "../../context/EventContext";

const Card = (props) => {
  const {
    visible,
    setVisible,
    css,
    setOpenEvent,
    setDisplay,
    setDisable,
  } = useContext(EventContext);

  const onClickCard = () => {
    setVisible("Active");
    setDisplay("display");
    setDisable("notDisplay");
    setOpenEvent(slide);
  };

  const { slide } = props;
  // const card=data[index];
  return (
    <div className={`card ${css}`} onClick={onClickCard}>
      <div className="eventImg">
        <img src={img} alt="" />
        <p>{slide.title}</p>
      </div>
      <div className="imgArrow">
        <img src={left} alt="" />
      </div>
    </div>
  );
};

export default Card;
