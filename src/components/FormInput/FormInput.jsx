import React from 'react';
import { ErrorMessage, Field } from 'formik';
import './FormInput.scss';

export function FormInput({ label, name, type, page, disabled }) {
  const custom = `forminput__${page}__${name}`;

  return (
    <div className={`forminput ${custom}`}>
      <label className="forminput__label" htmlFor={`forminput__input ${custom}`}>
        {label}
      </label>
      <Field
        {...{ name, type, disabled }}
        as={`${'input'}`}
        className={`forminput__field ${custom}`}
      />
      <ErrorMessage name={name} component="div" className="forminput__error" />
    </div>
  );
}

export default FormInput;
