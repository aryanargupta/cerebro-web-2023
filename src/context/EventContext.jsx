import React, { useEffect, useState } from "react";

export const EventContext = React.createContext();

import axiosInstance from "../services/AxiosInstance";
import data from "../pages/Events/utils/Events.json";

export const EventProvider = ({ children }) => {
  useEffect(() => {
    async function fetchData() {
      var data = await axiosInstance.get("/events/");
      data = data.data;
      // setCurrEvent(data[0]);
      setEvents(data);
      // setLoading(false);
      setSlides(data.slice(0, 3));
    }
    fetchData();
  }, []);
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState("inActive");
  const [display, setDisplay] = useState("notDisplay");
  const [disable, setDisable] = useState("display");
  const [slides, setSlides] = useState(events.slice(0, 3));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openevent, setOpenEvent] = useState([]);

  console.log(slides);

  const onClickCard = () => {
    setVisible("Active");
    setDisplay("display");
    setDisable("notDisplay");
  };

  const onClickClose = () => {
    setVisible("inActive");
    setDisplay("notDisplay");
    setDisable("display");
  };

  return (
    <EventContext.Provider
      value={{
        visible,
        setVisible,
        onClickCard,
        display,
        setDisplay,
        onClickClose,
        data,
        slides,
        setSlides,
        disable,
        setDisable,
        events,
        currentSlide,
        setCurrentSlide,
        setOpenEvent,
        openevent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
