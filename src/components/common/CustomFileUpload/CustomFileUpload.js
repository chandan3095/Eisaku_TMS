import React from "react";

const CustomFileUpload = (props) => {
  const { id, name, onChange, disabled, errors, message } = props;

   const handleFileChange=(e)=>{
      const uploadedFile= e.target.files[0]

      console.log(uploadedFile);

      if(onChange){
         onChange(e)
      }
   }
  return (
    <div class="form-group w-100">
      <input
        type="file"
        id={id}
        name={name}
        className="form-control h-auto"
        onChange={handleFileChange}
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
