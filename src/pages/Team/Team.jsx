import React, { useEffect, useState } from 'react';
import './Team.scss';
import Header from '../../components/Header/Header';
import data from './utils/headerData.json';
import Carousel from '../../components/Carousel/Carousel';
import left from '../../assets/images/leftArrow.png';
import right from '../../assets/images/rightArrow.png';
import TeamMember from './TeamMember';
// import json from "./utils/Team.json";
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import axiosInstance from '../../services/AxiosInstance';
import Navbar from '../../components/navbar/Navbar';

const teamOptionsArr = [
  'Core',
  'PR',
  'Core Support',
  'Web Dev',
  'Design',
  'Video Editing',
  'Gaming',
  'Sponsorship',
];
function Team() {
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('/teams')
      .then((res) => {
        setTeamData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const [isActive, setActive] = useState('Core');

  const [teamData, setTeamData] = useState([]);
  const [currTeam, setCurrTeam] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('Core');
  const [selectedTeamData, setSelectedTeamData] = useState(currTeam.slice(0, 6));
  const [lastMember, setLastMember] = useState(6);
  const [visibleLeft, setVisibleLeft] = useState(true);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);
  const [visibleRight, setVisibleRight] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShowLoadingSpinner(true);
    for (const i in teamData) {
      if (i === selectedTeam) {
        setCurrTeam(teamData[i]);
        setSelectedTeam(i);
        setSelectedTeamData(teamData[i].slice(0, 6));
      }
    }
    setShowLoadingSpinner(false);
  }, [selectedTeam, teamData]);

  useEffect(() => {
    if (currTeam.length < 6) setVisibleRight(() => true);
  }, []);

  const nextTeamMember = () => {
    // const nextMember = lastMember === json.length ? lastMember : (lastMember + 6) ;
    let nextMember = lastMember;
    console.log(nextMember);
    setVisibleLeft(false);
    if (nextMember + 6 > currTeam.length) {
      setVisibleRight(true);
      setSelectedTeamData(currTeam.slice(nextMember, currTeam.length));
    } else {
      setSelectedTeamData(currTeam.slice(nextMember, nextMember + 6));
      nextMember += 6;
    }
    setLastMember(nextMember);
  };

  const previousTeamMember = () => {
    let previousMember = lastMember;
    setVisibleRight(false);

    if (previousMember == 6) {
      setSelectedTeamData(currTeam.slice(0, previousMember));
      previousMember = 6;
      setVisibleLeft(true);
    } else {
      setSelectedTeamData(currTeam.slice(previousMember - 6, previousMember));
      previousMember -= 6;
    }

    setLastMember(previousMember);
  };

  if (loading) return <LoadingSpinner />;
  return (
    <div className="team">
      <Navbar isLandingPage={!false} />

      <div className="team-header">
        <Header title="Ours Team" />
        <div className="header-content">
          {data.map((i) => (
            <a
              className={i.title === isActive ? 'activeon' : ''}
              href="#"
              key={i.id}
              onClick={() => {
                setSelectedTeam(i.title);
                setActive(i.title);
                console.log(i.title);
              }}>
              {i.title}
            </a>
          ))}
        </div>
      </div>

      <div className="team-container">
        <div className="left">
          <img
            src={visibleLeft ? { style: { display: 'none' } } : left}
            onClick={previousTeamMember}
            alt=""
          />
        </div>
        <div className="team-inner-container">
          {selectedTeamData.map((items) => (
            <TeamMember key={items.id} img={items.profilepic} pos={items.role} name={items.name} />
          ))}
        </div>
        <div className="right">
          <img
            src={visibleRight ? { style: { display: 'none' } } : right}
            onClick={nextTeamMember}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
