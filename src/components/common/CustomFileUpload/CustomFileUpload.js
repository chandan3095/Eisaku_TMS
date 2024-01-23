import React from "react";

const CustomFileUpload = ({
    id,
    name,
    onChange,
    disabled,
    errors,
    message,
    multiple,
}) => {
    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];

        console.log(uploadedFile);

        if (onChange) {
            onChange(e);
        }
    };
    return (
        <div class="form-group w-100">
            <input
                type="file"
                id={id}
                name={name}
                className="form-control h-auto"
                onChange={handleFileChange}
                disabled={disabled}
                multiple={multiple}
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
