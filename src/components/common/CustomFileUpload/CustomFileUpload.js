import React, { useState } from "react";

const CustomFileUpload = (props) => {
  const { id, name, onChange, disabled, errors, message } = props;
   // const [selectedFile, setSelectedFile] = useState(null);

   // const handleFileChange=(e)=>{
   //    const uploadedFile= e.target.files[0]
   //    setSelectedFile(uploadedFile);

   //    if(onChange){
   //       onChange(uploadedFile,e)
   //    }
   // }
  return (
    <div class="form-group w-100">
      <input
        type="file"
        id={id}
        name={name}
        className="form-control h-auto"
           onChange={onChange}
        disabled={disabled}
      />
        {/* {selectedFile && (
           <div className="text-success" style={{ fontSize: ".8rem" }}>
              File selected: {selectedFile.name}
           </div>
        )} */}
     {errors && (
                <div className="text-danger" style={{ fontSize: ".8rem" }}>
                    {message}
                </div>
            )}
    </div>
  );
};

export default CustomFileUpload;
