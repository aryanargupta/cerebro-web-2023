import React, { useContext, useEffect, useState } from "react";
import left from "../../assets/images/leftArrow.png";
import right from "../../assets/images/rightArrow.png";
import "./Carousel.scss";
import Card from "../Card/Card";
// import data from '../../pages/Events/utils/Events.json';

import { EventContext } from "../../context/EventContext";

const Carousel = () => {
  const {
    visible,
    setVisible,
    onClickCard,
    data,
    display,
    disable,
    setDisable,
    setCss,
    events,
    currentSlide,
    setCurrentSlide,
    slides,
    setSlides,
  } = useContext(EventContext);

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [slides, setSlides] = useState(events.slice(0, 3));

  // const [left,setLeft]=useState('left');
  useEffect(() => {
    // setSlides(data);
    // console.log(data.length);
  }, []);

  // const onClickCard= () =>{   //2
  //   setVisible('Active');
  //   className = `carousel ${visible}`;
  // }

  const nextSlide = async () => {
    const nextSlideIndex =
      currentSlide === events.length - 3
        ? currentSlide
        : (currentSlide + 1) % events.length;

    setSlides(events.slice(nextSlideIndex, nextSlideIndex + 3));
    setCurrentSlide(nextSlideIndex);
  };

  const previousSlide = () => {
    const previousSlideIndex =
      currentSlide === 0 ? currentSlide : currentSlide - 1;
    setSlides(events.slice(previousSlideIndex, previousSlideIndex + 3));
    setCurrentSlide(previousSlideIndex);
  };
  // let className = `carousel ${visible}`;
  return (
    <div className={`carousel ${visible}`}>
      <div className={`left`}>
        <button onClick={previousSlide}>
          <img
            className={`${disable}`}
            src={currentSlide === 0 ? { Style: { display: "none" } } : left}
            alt=""
          />
        </button>
      </div>
      <div className={`carousel-container `}>
        {slides.map((slide) => (
          <Card key={slide.id} slide={slide} />
        ))}
      </div>

      <div className={`right`}>
        <button onClick={nextSlide}>
          <img
            className={`${disable}`}
            src={
              currentSlide === events.length - 3
                ? { Style: { display: "none" } }
                : right
            }
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
