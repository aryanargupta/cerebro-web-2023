import React from "react";
import "./TeamMember.scss";
import img from "../../assets/images/teamM.png";
const TeamMember = (props) => {
  const { name, pos,img} = props;
  return (
    <div className="teamMember">
      <div className="teamMember-img">
        <img src={img} style={{"width":"155px","height":"155px" ,"borderRadius":"15px"}} alt="loading" />
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
