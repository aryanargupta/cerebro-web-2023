/* eslint-disable */
import React from 'react';
import { ErrorMessage, Field } from 'formik';
import './FormInput.scss';

function FormInput({ label, name, type, page, disabled }) {
  const custom = `forminput__${page}__${name}`;

  return (
    <div className={`forminput ${custom}`}>
      {/* eslint-disable-next-line */}
      <label className="forminput__label">{label}</label>
      <Field
        placeholder={label === 'Proof of pursuing UG' ? 'Use valid file link, not folder link from google drive' : label}
        {...{ name, type, disabled }}
        as={`${'input'}`}
        className={`forminput__field ${custom}`}
      />
      <ErrorMessage name={name} component="div" className="forminput__error" />
    </div>
  );
}

export default FormInput;
