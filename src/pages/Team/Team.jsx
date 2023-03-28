import React, { useEffect, useState } from "react";
import "./Team.scss";
import Header from "../../components/Header/Header";
import data from "./utils/headerData.json";
import Carousel from "../../components/Carousel/Carousel";
import left from "../../assets/images/leftArrow.png";
import right from "../../assets/images/rightArrow.png";
import TeamMember from "./TeamMember";
import json from "./utils/Team.json";

const teamOptionsArr = [
  "Core",
  "PR",
  "Core Support",
  "Web Dev",
  "Design",
  "Video Editing",
  "Gaming",
  "Sponsorship",
];
function Team() {
  const [teamData, setTeamData] = useState(json.slice(0, 6));
  const [selectedTeam, setSelectedTeam] = useState("Core");
  const [selectedTeamData, setSelectedTeamData] = useState([]);
  const [lastMember, setLastMember] = useState(6);
  const [visibleLeft, setVisibleLeft] = useState(true);

  const [visibleRight, setVisibleRight] = useState(false);
  useEffect(() => {
    if (json.length < 6) setVisibleRight(() => true);
  }, []);
  //   useEffect(() => {
  //     // axiosInstance.get("/teams").then(res => setTeamData(res.data));
  //     if(lastMember+6>json.length){
  //       setTeamData(json.slice(lastMember,json.length));
  //       setLastMember(()=>json.length);
  //     }
  //     else{
  //       setTeamData(json.slice(lastMember,lastMember+6));
  //       setLastMember(()=>lastMember+6);
  //     }

  // }, []);

  const nextTeamMember = () => {
    // const nextMember = lastMember === json.length ? lastMember : (lastMember + 6) ;
    let nextMember = lastMember;
    console.log(nextMember);
    setVisibleLeft(false);
    if (nextMember + 6 > json.length) {
      setVisibleRight(true);
      setTeamData(json.slice(nextMember, json.length));
    } else {
      setTeamData(json.slice(nextMember, nextMember + 6));
      nextMember = nextMember + 6;
    }
    setLastMember(nextMember);
  };

  const previousTeamMember = () => {
    let previousMember = lastMember;
    setVisibleRight(false);

    if (previousMember == 6) {
      setTeamData(json.slice(0, previousMember));
      previousMember = 6;
      setVisibleLeft(true);
    } else {
      setTeamData(json.slice(previousMember - 6, previousMember));
      previousMember = previousMember - 6;
    }

    setLastMember(previousMember);
  };

  return (
    <div className="team">
      <div className="team-header">
        <Header title={"Ours Team"} data={data} />
      </div>

      <div className="team-container">
        <div className="left">
          <img
            src={visibleLeft ? { style: { display: "none" } } : left}
            onClick={previousTeamMember}
            alt=""
          />
        </div>
        <div className="team-inner-container">
          {teamData.map((items) => (
            <TeamMember
              key={items.id}
              img={items.img}
              pos={items.pos}
              name={items.name}
            />
          ))}
        </div>
        <div className="right">
          <img
            src={visibleRight ? { style: { display: "none" } } : right}
            onClick={nextTeamMember}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
