import React from "react";

const CustomMonthYear = ({
    label,
    id,
    placeholder,
    errors,
    message,
    value,
    onChange,
    name,
}) => {
    return (
        <div className="form-group">
            {label && (
                <label className="text-capitalize" htmlFor={id}>
                    {label}
                    <span className="text-danger">*</span>
                </label>
            )}
            <input
                type="month"
                className="form-control"
                id={id}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
            />
            {errors && (
                <div className="text-danger" style={{ fontSize: ".8rem" }}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default CustomMonthYear;
