import React from 'react';
import './Landing.scss';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import EventCard from '../../components/EventCard/EventCard';
import Footer from '../../components/footer/Footer';
import events from './events';

function Landing() {
  const navigate = useNavigate();
  function redirectToEvents() {
    navigate('/events');
  }
  const [eventIndex, setEventIndex] = React.useState(0);
  function incrementIndex() {
    if (eventIndex === events.length - 1) {
      setEventIndex(0);
      return;
    }
    setEventIndex(eventIndex + 1);
  }
  function decrementIndex() {
    if (eventIndex === 0) {
      setEventIndex(events.length - 1);
      return;
    }
    setEventIndex(eventIndex - 1);
  }
  return (
    <>
      <Navbar isLandingPage={!false} />
      <div className="landing_container">
        <div className="landing_container_head">
          <div className="landing_container_head_left">
            <div className="landing_container_head_left_outer_ring">
              <div className="landing_container_head_left_inner_ring">
                <div className="landing_container_head_left_image"> </div>
              </div>
            </div>
          </div>
          <div className="landing_container_head_right">
            <div className="landing_container_head_right_top"> </div>
            <div className="landing_container_head_right_middle">
              Join us on a journey into the future as we explore the latest advances in technology,
              from artificial intelligence and robotics to space exploration and beyond.
            </div>
            <div className="landing_container_head_right_bottom">
              <div className="landing_container_head_right_btn_border">
                <button
                  className="landing_container_head_right_btn"
                  type="button"
                  // eslint-disable-next-line react/jsx-closing-bracket-location
                  onClick={redirectToEvents}>
                  Participate Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="landing_container_events">
          <div className="landing_container_events_title">Events</div>
          <div className="landing_container_events_body">
            <button
              onClick={decrementIndex}
              type="button"
              // eslint-disable-next-line react/jsx-closing-bracket-location
              className="landing_container_events_body_left_button">
              {' '}
            </button>
            <EventCard size="" url={events[eventIndex]}>
              {' '}
            </EventCard>
            <EventCard size="" url={events[(eventIndex + 1) % events.length]}>
              {' '}
            </EventCard>
            <EventCard size="" url={events[(eventIndex + 2) % events.length]}>
              {' '}
            </EventCard>
            <EventCard size="" url={events[(eventIndex + 3) % events.length]}>
              {' '}
            </EventCard>
            <button
              onClick={incrementIndex}
              type="button"
              // eslint-disable-next-line react/jsx-closing-bracket-location
              className="landing_container_events_body_right_button">
              {' '}
            </button>
          </div>
        </div>
        <div className="landing_container_past">
          <div className="landing_container_past_title">Past Year Glimpses</div>
          <div className="landing_container_past_body">
            <div className="landing_container_past_body_left">
              <EventCard
                size="large"
                url="https://res.cloudinary.com/dtjl9xebq/image/upload/v1680020351/Cerebro-2023/4_v6iy9d.jpg"
              />
            </div>
            <div className="landing_container_past_body_right">
              <div className="landing_container_past_body_right_top">
                <EventCard
                  size="small"
                  url="https://res.cloudinary.com/dtjl9xebq/image/upload/v1680020351/Cerebro-2023/4_v6iy9d.jpg"
                />
                <EventCard
                  size="small"
                  url="https://res.cloudinary.com/dtjl9xebq/image/upload/v1680021737/Cerebro-2023/1_gjimop.jpg"
                />
                <EventCard
                  size="small"
                  url="https://res.cloudinary.com/dtjl9xebq/image/upload/v1680021815/Cerebro-2023/2_boezrg.jpg"
                />
              </div>
              <div className="landing_container_past_body_right_bottom">
                <EventCard
                  size="small"
                  url="https://res.cloudinary.com/dtjl9xebq/image/upload/v1680021909/Cerebro-2023/3_q0gd0g.jpg"
                />
                <EventCard
                  size="small"
                  url="https://res.cloudinary.com/dtjl9xebq/image/upload/v1680022050/Cerebro-2023/5_mdmgb8.jpg"
                />
                <EventCard
                  size="small"
                  url="https://res.cloudinary.com/dtjl9xebq/image/upload/v1680022324/Cerebro-2023/66_ymcakp.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
