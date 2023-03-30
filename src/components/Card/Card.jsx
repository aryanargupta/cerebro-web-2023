import React, { useContext, useEffect } from "react";
import "./Card.scss";
import img from "../../assets/images/alt_img.png";
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
    console.log(slide);
    setOpenEvent(slide);
  };

  const { slide } = props;
  // const card=data[index];
  return (
    <div className={`card ${css}`} onClick={onClickCard}>
      <div className="eventImg">
        <img src={slide.image===""?img:slide.image} alt="" />
      
      </div>
      <div className="imgArrow">
        <img src={left} alt="" />
      </div>
    </div>
  );
};

export default Card;
