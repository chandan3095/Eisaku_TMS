import React from 'react'

const CustomRadio= (props) => {
  const{label, id, name, value, defaultChecked, onChange} = props

  return (
    <div className="icheck-primary d-inline">
      <input type="radio" id={id} name={name} value={value} defaultChecked={defaultChecked ? true : false} onChange={onChange}/>
      {label && <label htmlFor={id}>{label}</label>}
    </div> 
  )
}

export default CustomRadio