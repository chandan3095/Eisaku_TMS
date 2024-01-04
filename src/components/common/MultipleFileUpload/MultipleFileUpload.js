import React, { useState } from 'react'
import Files from 'react-files'

const MultipleFileUpload = ({label}) => {
   const [uploadFile, setUploadFile] = useState([])
   const handleChange = (files) => {
      setUploadFile(files)
   }
   
   const handleError = (error, file) => {
      console.log('error code ' + error.code + ': ' + error.message)
   }
   return (
      <div className='files'>
         <Files
            className='files-dropzone'
            onChange={handleChange}
            onError={handleError}
            accepts={['image/png', '.pdf', 'audio/*']}
            multiple
            maxFileSize={1000000}
            minFileSize={0}
            clickable>
            <label htmlFor="AgreementDetails">{label}</label>
            <div className="drop-files form-control h-100">
               <button type='button' className='mr-1'>Choose File</button>
               {uploadFile.length === 1 ?
                  uploadFile[0].name : uploadFile.length > 1 ?
                     `${uploadFile.length} Files Uploaded` :
                     "No File Choosen"}
            </div>
         </Files>
      </div>
   )
}

export default MultipleFileUpload
