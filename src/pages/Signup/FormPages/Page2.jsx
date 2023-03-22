import React from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import BtnLoader from '../../../components/BtnLoader/BtnLoader';
import { signupFormData } from '../util/SignupFormData';
import '../Signup.scss';

const Page2 = ({ setFieldValue, setPage, isSubmitting, errors, submitStatus }) => {
  const custom = submitStatus ? 'disable' : 'enable';

  return (
    <>
      {signupFormData.page2.map(({ label, name, type }, index) => (
        <FormInput
          key={index}
          {...{ label, name, type }}
          page="signup"
          setFieldValue={setFieldValue}
        />
      ))}
      <div className="signup__bottom">
        <div className="signup__bottom__status">
          {errors.authentication && (
            <span className="signup__bottom__status__error">
              {typeof errors.authentication === 'object' ? '' : errors.authentication}
            </span>
          )}
          {submitStatus && (
            <span className="signup__bottom__status__success">
              In order to complete the sign-up process, please click the confirmation link sent to
              your email address.
            </span>
          )}
        </div>
        <div className="signup__bottom__buttons">
          <button
            type="submit"
            className={`signup__bottom__buttons__${custom}`}
            disabled={isSubmitting}>
            <div className={`signup__bottom__buttons__${custom}__text`}>
              {isSubmitting ? <BtnLoader /> : 'Sign Up'}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page2;
