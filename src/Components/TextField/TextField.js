import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.scss";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className="mb-2">
      {/* <label htmlFor={field.name}>{label}</label> */}
      <input
        className={`form-control shadow-none user-input px-1 font-roboto ${
          meta.touched && meta.error && "is-invalid"
          // meta.touched && meta.error
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage name={field.name}>
        {(msg) => <div className="error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
