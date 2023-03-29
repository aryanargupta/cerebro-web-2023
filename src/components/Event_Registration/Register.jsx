import React, { useContext, useState } from 'react'

import { EventContext } from "../../context/EventContext";
import close from "../../assets/images/cross.png";
import img from "../../assets/images/event-img.png";
import prize_border from "../../assets/images/prize_border.png";
import './Register.scss'
const Register = () => {
    const {
       registerDisplay,onClickCloseRegister
      } = useContext(EventContext);
  return (
    <div className={`register-container ${registerDisplay}`}>
   
   <div className="register-content">
     <div className="bg-img"></div>

     <div className="register_title">
        <h1>Join the team using a Team Code</h1>
        </div>
        


        <div className="register-join-now">
              <button className="register-btn">Join Now</button>
            </div>
            <img className="close-btn" onClick={onClickCloseRegister} src={close} alt="" />
            </div>
      </div>

   

  )
}

export default Register
