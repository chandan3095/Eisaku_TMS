import React from 'react'

const CustomTextArea = (props) => {
  const{label, id, placeholder, defaultValue,name,value,onChange} = props

  return (
    <div className="form-group">
        {label && <label className="text-capitalize" htmlFor={id}>{label}</label>} 
        <textarea className="form-control" rows={3} id={id} name={name}
        placeholder={placeholder} defaultValue={defaultValue} value={value} onChange={onChange}/>
    </div>
  )
}

export default CustomTextArea