import React from "react";

const CustomDatePicker = (props) => {
  const { label, id, onChange, name, value, disabled, errors, message } = props;
  // console.log(value);
  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>}
      <input
        type="date"
        className="form-control"
        disabled={disabled}
        name={name}
        onChange={onChange}
        id={id}
        value={value}
      />
      {errors && (
                <div className="text-danger" style={{ fontSize: ".8rem" }}>
                    {message}
                </div>
            )}
    </div>
  );
};

export default CustomDatePicker;
