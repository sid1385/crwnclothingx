import React from "react";
import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherinputprops }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherinputprops}
      />
      {label ? (
        <label
          className={`${
            otherinputprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
