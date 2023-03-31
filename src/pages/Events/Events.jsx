import React, { useContext, useState } from 'react';
import './Event.scss';
import Header from '../../components/Header/Header';
import data from './utils/headerData.json';
import Card from '../../components/Card/Card';
import Carousel from '../../components/Carousel/Carousel';
import ParticularEvent from '../../components/particular-event/ParticularEvent';
import { EventContext } from '../../context/EventContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Navbar from '../../components/navbar/Navbar';

function Events() {
  const {
    visible,
    setVisible,
    display,
    setDispaly,
    registerDisplay,
    joinDisplay,
    setSelectedEvent,
    selectEvent,
    loading,
    setOpenEvent,
    slides,
    openevent,
    setJoinTeam,
    setCreateTeam,
    onClickClose,
  } = useContext(EventContext);

  // if (loading)   return <LoadingSpinner />;

  return !loading ? (
    <div className="event">
      <Navbar isLandingPage={!false} />
      <div className="event-header">
        <Header title="Events" />
        <div className="header-content">
          {data.map((i) => (
            <a
              className={i.event_type === selectEvent ? 'activeon' : ''}
              href="#"
              key={i.id}
              onClick={() => {
                setSelectedEvent(i.event_type);
                console.log(i.event_type);
                setJoinTeam(false);
                setCreateTeam(false);
                onClickClose();
              }}>
              {i.title}
            </a>
          ))}
        </div>
      </div>
      <div className="event-container">
        <Carousel />
        <div className="particular-event">{openevent && <ParticularEvent />}</div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default Events;
