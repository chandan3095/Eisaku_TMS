import React from "react";

const CustomFileUpload = (props) => {
  const { id, name, onchange, disabled, errors, message } = props;
  return (
    <div class="form-group w-100">
      <input
        type="file"
        id={id}
        name={name}
        className="form-control h-auto"
        onChange={onchange}
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

export default CustomFileUpload;
