import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.scss';

function AuthForm({ title, subtitle, children, to, text, link }) {
  const custom = title === 'Welcome' ? 'text' : 'alttext';
  return (
    <div className="authform">
      <div className="authform__center">
        <div className="authform__center__form">
          <div className="authform__center__form__title">
            <div className={`authform__center__form__title__${custom}`}>{title}</div>
            <div className="authform__center__form__title__sub">{subtitle}</div>
          </div>
          <div className="authform__center__form__container">
            {children}
            <span className="authform__center__form__container__text">
              {`${text} `}
              <Link to={to} className="authform__center__form__container__text__link">
                {link}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
