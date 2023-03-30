import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import { EventContext } from '../../context/EventContext';
import close from '../../assets/images/cross.png';
import img from '../../assets/images/event-img.png';
import prizeBorder from '../../assets/images/prize_border.png';
import './ParticularEvent.scss';
import axiosInstance from '../../services/AxiosInstance';
import FormInput from '../FormInput/FormInput';
import BtnLoader from '../BtnLoader/BtnLoader';

function EventDetails({ openevent, enableJoinTeam, enableCreateTeam, onClickClose }) {
  console.log(openevent);

  return (
    <div className="event-content">
      <div className="left-container">
        <img src={img} alt="" />
      </div>
      <div className="right-container">
        <div className="event-title">
          <h2>{openevent.title}</h2>
        </div>
        <div className="event-desc">
          <p>{openevent.description}</p>
        </div>
        <div className="event-time">
          <div className="event-prize">
            <img src={prizeBorder} alt="" />
          </div>
          <div className="event-date">
            <div className="event-date-in">{new Date(openevent.start_time).toDateString()}</div>
            <div className="event-date-out">{new Date(openevent.end_time).toDateString()}</div>
          </div>
        </div>
        <div className="event-team">
          <div className="event-team-left">
            <li>Team Size</li>
            <li>Converner</li>
            <li>Co-Converner</li>
          </div>

          <div className="event-team-right">
            <li>4</li>
            <li>Converner</li>
            <li>Co-Converner</li>
          </div>
        </div>

        <div className="event-btn-container">
          {openevent.is_registered ? (
            <div className="event-btn-register">
              <button className="event-btn" disabled type="button">
                Registered
              </button>
            </div>
          ) : (
            <>
              {openevent.registration_closed ? (
                <div className="event-btn-register">
                  <button className="event-btn" disabled type="button">
                    Registration Closed
                  </button>
                </div>
              ) : (
                <>
                  {openevent.team_size === 1 ? (
                    <div className="event-btn-register">
                      <button className="event-btn" onClick={enableJoinTeam} type="button">
                        Register
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="event-btn-join-team">
                        <button className="event-btn" onClick={enableJoinTeam} type="button">
                          Join team
                        </button>
                      </div>
                      <div className="event-btn-join-team">
                        <button className="event-btn" onClick={enableCreateTeam} type="button">
                          Create team
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <img className="close-btn" onClick={onClickClose} src={close} alt="" />
    </div>
  );
}

function JoinTeam({ openevent }) {
  const [submitStatus, setSubmitStatus] = useState('');

  const getInitialValues = () => {
    const values = { team_code: '', event: '' };
    if (openevent.registration_attributes) {
      Object.keys(openevent.registration_attributes).forEach((field) => (values[field] = ''));
    }
    return values;
  };

  const validate = (values) => {
    const errors = {};
    if (openevent.team_event && !values.team_code) errors.team_code = 'Required';
    if (openevent.registration_attributes) {
      Object.keys(openevent.registration_attributes).forEach((field) => {
        const regex = new RegExp(openevent.registration_attributes[field]);
        if (!values[field]) {
          errors[field] = 'Required';
        } else if (!regex.test(values[field])) {
          errors[field] = `Invalid ${field}`;
        }
      });
    }
    return errors;
  };

  const onSubmit = async (values, { setFieldError, setSubmitting }) => {
    try {
      if (openevent.team_event) {
        const data = {
          event_id: openevent.id,
          team_code: values.team_code,
          registration_data: { ...values },
        };
        delete data.registration_data.team_code;
        delete data.registration_data.event;
        if (!openevent.registration_attributes) delete data.registration_data;
        const res = await axiosInstance.post('/registration/teammember/', data);
        if (res.data.error) setFieldError('event', res.data.error);
        else setSubmitStatus(res.data.success);
      } else {
        const data = {
          event: openevent.id,
          registration_data: { ...values },
        };
        delete data.registration_data.team_code;
        delete data.registration_data.event;
        if (!openevent.registration_attributes) delete data.registration_data;
        const res = await axiosInstance.post('/registration/individual-registration/', data);
        if (res.data.error) setFieldError('event', res.data.error);
        else setSubmitStatus(`Successfully registered for ${openevent.title}`);
      }
    } catch (error) {
      setFieldError('event', error.response.data.error);
    }
    setSubmitting(false);
  };

  return (
    <div className="join-team">
      <Formik {...{ validate, onSubmit }} initialValues={getInitialValues()}>
        {({ isSubmitting, errors }) => (
          <Form className="join-team__codee">
            {openevent.team_event && (
              <>
               <div className='join-team__plcholder'>Join the team using a Team Code</div>
                <FormInput
                  
                  // label="Join the team using a Team Code"
                  name="team_code"
                  type="text"
                  page="join-team"
                  disabled={submitStatus}
                />
                {/* <hr className="join-team__line" /> */}
              </>
            )}
            {openevent.registration_attributes ? (
              Object.entries(openevent.registration_attributes).map(([key, value], index) => (
                <div className="forminputss" key={index}>
                  <FormInput
                    label={key}
                    name={key}
                    type="text"
                    page="join-team"
                    key={index}
                    disabled={submitStatus}
                  />
                </div>
              ))
            ) : (
              <div className="join-team__message">No additional fields required for this event</div>
            )}
            <button type="submit" disabled={isSubmitting} className="authbtn__button__enable">
              <div className={`authbtn__button__enable__text`}>
                {isSubmitting ? <BtnLoader /> : !openevent.team_event ? 'Register' : 'Join Team'}
              </div>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function CreateTeam({ openevent }) {
  const [teamCode, setTeamCode] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const getInitialValues = () => {
    const values = { team_name: '', event: '' };
    if (openevent.registration_attributes) {
      Object.keys(openevent.registration_attributes).forEach((field) => (values[field] = ''));
    }
    return values;
  };

  const validate = (values) => {
    const errors = {};
    if (!values.team_name) errors.team_name = 'Required';
    else if (values.team_name.length < 3) errors.team_name = 'Must be at least 3 characters';
    if (openevent.registration_attributes) {
      Object.keys(openevent.registration_attributes).forEach((field) => {
        const regex = new RegExp(openevent.registration_attributes[field]);
        if (!values[field]) {
          errors[field] = 'Required';
        } else if (!regex.test(values[field])) {
          errors[field] = `Invalid ${field}`;
        }
      });
    }
    return errors;
  };

  const onSubmit = async (values, { setFieldError }) => {
    try {
      const data = {
        event: openevent.id,
        team_name: values.team_name,
        team_captain: { team_code: '111111' },
      };
      if (openevent.registration_attributes) {
        data.team_captain.registration_data = { ...values };
        delete data.team_captain.registration_data.team_name;
        delete data.team_captain.registration_data.event;
      }
      const res = await axiosInstance.post('/registration/team/', data);
      setSubmitStatus(res.data.success);
      setTeamCode(res.data.team_code);
    } catch (error) {
      if (error.response?.data?.Error) setFieldError('event', error.response.data.Error);
      else if (error.response?.data?.error) setFieldError('event', error.response.data.error);
      else setFieldError('event', 'Something went wrong');
    }
  };

  return (
    <div className="join-team">
      <Formik {...{ validate, onSubmit }} initialValues={getInitialValues()}>
        {({ isSubmitting, errors }) => (
          <Form className="create-team">
            <FormInput
              label="Team Name"
              name="team_name"
              type="text"
              page="create-team"
              disabled={submitStatus}
            />
            {/* <hr className="create-team__line" /> */}
            {openevent.registration_attributes &&
              Object.entries(openevent.registration_attributes).map(([key], index) => (
                <div className="create-team__input" key={index}>
                  <FormInput
                    disabled={submitStatus}
                    label={key}
                    name={key}
                    type="text"
                    page="create-team"
                    key={index}
                  />
                </div>
              ))}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus}
              className="authbtn__button__enable">
              <div className="authbtn__button__enable__text">
                {isSubmitting ? <BtnLoader /> : 'Create Team'}
              </div>
            </button>
            {submitStatus && (
              <>
                <div className="eventbtn__status__success">
                  Team created successfully! Let other members join your team using the team code
                  given below
                </div>
                <div className="create-team__success">
                  <span className="create-team__success__code">{teamCode}</span>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

function ParticularEvent() {
  const { visible, setVisible, onClickCard, display, setDisplay, onClickClose, events, openevent } =
    useContext(EventContext);
  const [joinTeam, setJoinTeam] = useState(false);
  const [createTeam, setCreateTeam] = useState(false);

  const enableJoinTeam = () => {
    setJoinTeam(true);
  };

  const enableCreateTeam = () => {
    setCreateTeam(true);
  };

  return (
    <div className={`particular-container ${display}`}>
      <div className="bg-img" />
      {!joinTeam && !createTeam && (
        <EventDetails
          openevent={openevent}
          enableJoinTeam={enableJoinTeam}
          enableCreateTeam={enableCreateTeam}
          onClickClose={onClickClose}
        />
      )}
      {joinTeam && <JoinTeam openevent={openevent} />}
      {createTeam && <CreateTeam openevent={openevent} />}
    </div>
  );
}

export default ParticularEvent;
