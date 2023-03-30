import React, { useContext, useState } from 'react';

import { EventContext } from '../../context/EventContext';
import close from '../../assets/images/cross.png';

import './Register.scss';
const Register = () => {
  const { registerDisplay, onClickCloseRegister } = useContext(EventContext);
  return (
    <div className={`register-container ${registerDisplay}`}>
      <div className="register-content">
        <div className="bg-img"></div>

        <div className="register_title">
          <h1>Join the team using a Team Code</h1>
        </div>

        <div className="register-Input-content">
          <div className="input_field">
            <p>Field1</p>
            <input type="text" name="field1" placeholder="field1" />
          </div>

          <div className="input_field">
            <p className='field'>Field2</p>
            <input type="text" name="field2" placeholder="field2" />
          </div>

          <div className="input_field">
            <p>Field3</p>
            <input type="text" name="field3" placeholder="field3" />
          </div>

        </div>

        <div className="register-join-now">
          <button className="register-btn">Join Now</button>
        </div>
        <img className="close-btn" onClick={onClickCloseRegister} src={close} alt="" />
      </div>
    </div>
  );
};

export default Register;
