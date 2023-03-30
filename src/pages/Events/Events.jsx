import React, { useContext, useState } from 'react';
import './Event.scss';
import Header from '../../components/Header/Header';
import data from './utils/headerData.json';
import Card from '../../components/Card/Card';
import Carousel from '../../components/Carousel/Carousel';
import ParticularEvent from '../../components/particular-event/ParticularEvent';
import { EventContext } from '../../context/EventContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function Events() {
  const { visible, setVisible, display, setDispaly, loading } = useContext(EventContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [visible,setVisible]= useState("inActive");

  if (loading) return <LoadingSpinner />;
  return (
    <div className="event">
      <div className="event-header">
        <Header title={'Events'} data={data} />
      </div>
      <div className="event-container">
        <Carousel />
        <div className="particular-event">
          <ParticularEvent />
        </div>
      </div>
    </div>
  );
}

export default Events;
