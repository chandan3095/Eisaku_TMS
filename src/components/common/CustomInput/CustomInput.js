import React from "react";

const CustomInput = ({
    label,
    id,
    inputType,
    placeholder,
    onChange,
    errors,
    message,
    name,
    value,
    disabled,
}) => {
    // const { label, id, inputType, placeholder, onChange, errors, message } = props
    return (
        <div className="form-group">
            {label && (
                <label className="text-capitalize" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={inputType ? inputType : "text"}
                className="form-control "
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
                disabled={disabled}
            />
            {errors && (
                <div className="text-danger" style={{ fontSize: ".8rem" }}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default CustomInput;
