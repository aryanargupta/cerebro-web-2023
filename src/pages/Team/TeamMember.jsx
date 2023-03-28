import React from "react";
import "./TeamMember.scss";
import img from "../../assets/images/teamM.png";
const TeamMember = (props) => {
  const { name, pos } = props;
  return (
    <div className="teamMember">
      <div className="teamMember-img">
        <img src={img} alt="dhbfsj" />
      </div>
      <div className="teamMember-name">
        <h3>{name}</h3>
      </div>
      <div className="teamMember-pos">
        <h3>{pos}</h3>
      </div>
    </div>
  );
};

export default TeamMember;
