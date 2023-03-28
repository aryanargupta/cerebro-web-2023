import React from "react";
import { ErrorMessage, Field } from "formik";
import { toast } from "react-toastify";
import "./FormInput.scss";

export const FormInput = ({
  label,
  name,
  type,
  setFieldValue,
  page,
  disabled,
}) => {
  const custom = `forminput__${page}__${name}`;

  return (
    <div className={`forminput ${custom}`}>
      <label className="forminput__label">{label}</label>
        <Field
          placeholder={label=="Proof of pursuing UG"?"Paste a Google Drive Link":label}
          {...{ name, type, disabled }}
          as={`${"input"}`}
          className={`forminput__field ${custom}`}
        />
      <ErrorMessage name={name} component="div" className="forminput__error" />
    </div>
  );
};

export default FormInput;
