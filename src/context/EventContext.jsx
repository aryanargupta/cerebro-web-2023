import React, { useEffect, useState } from "react";

export const EventContext = React.createContext();

import axiosInstance from "../services/AxiosInstance";
import data from "../pages/Events/utils/Events.json";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export const EventProvider = ({ children }) => {
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      var data = await axiosInstance.get("/events/");
      data = data.data;
      console.log(data);
       setEvents(data);
      let filterData = data.filter(e => e.event_type ===selectEvent );
      setSelectedSlide(filterData);
      // setOpenEvent(filterData);
      // setOpenEvent(filterData);
      setSlides(filterData.slice(0, 3));
      setLoading(false);
    }
    fetchData();
  }, []);
  const [events, setEvents] = useState([]);
  const [selectSlide,setSelectedSlide]=useState([]);
  const [visible, setVisible] = useState("inActive");
  const [display, setDisplay] = useState("notDisplay");
  const [disable, setDisable] = useState("display");
  const [slides, setSlides] = useState(selectSlide.slice(0, 3));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openevent, setOpenEvent] = useState();
  const [registerDisplay,setRegisterDisplay]=useState("notDisplay");
  const [joinDisplay,setJoinDisplay]=useState("notDisplay");
  const [selectEvent,setSelectedEvent]=useState("tech");
  // const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);
  
  // console.log(slides);
  const [loading, setLoading] = useState(true);


  
useEffect(()=>{
  setLoading(true);
  let filterData = events.filter(e => e.event_type ===selectEvent );
  console.log(selectEvent);
  console.log(filterData);
  setSelectedSlide(filterData);
  // setOpenEvent(filterData);
  setSlides(filterData.slice(0, 3));
  setLoading(false);
},[selectEvent,events])



  const onClickClose = () => {
    setVisible("inActive");
    setDisplay("notDisplay");
    setDisable("display");
  };
  const onClickCloseRegister=()=>{
    setDisplay("display");
    setDisable("notDisplay");
    setRegisterDisplay("notDisplay");
  }
  const onClickCloseJoin=()=>{
    setDisplay("display");
    setDisable("notDisplay");
    setJoinDisplay("notDisplay");
  }
  return (
    <EventContext.Provider
      value={{
        visible,
        setVisible,
       
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
        setRegisterDisplay,
        registerDisplay,
        onClickCloseRegister,
        loading,
        joinDisplay,
        setJoinDisplay,onClickCloseJoin,setSelectedEvent,selectSlide,selectEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
// DISABLE_ESLINT_PLUGIN=true