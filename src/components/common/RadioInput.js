import React from "react";

const RadioInput = ({ radioOptions, formik, name }) => {
  return (
    <div className="formControl">
      {radioOptions.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="radio"
            id={item.value}
            name={name}
            value={item.value}
            checked={formik.values.gender === item.value}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </React.Fragment>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default RadioInput;
