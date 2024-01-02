import React from 'react'

const CustomTextArea = (props) => {
  const{label, id, placeholder, defaultValue} = props

  return (
    <div className="form-group">
        {label && <label htmlFor={id}>{label}</label>} 
        <textarea className="form-control" rows={3} id={id}
        placeholder={placeholder} defaultValue={defaultValue} />
    </div>
  )
}

export default CustomTextArea