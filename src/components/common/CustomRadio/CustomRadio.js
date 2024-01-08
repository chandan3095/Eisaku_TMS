import React from 'react'

const CustomRadio= (props) => {
   const { label, id, name, value, defaultChecked, onChange, checked } = props

  return (
    <div className="icheck-primary d-inline mr-3">
      <input type="radio" id={id} name={name} value={value} defaultChecked={defaultChecked ? true : false} onChange={onChange} checked={checked}/>
      {label && <label className="text-capitalize" htmlFor={id}>{label}</label>}
    </div> 
  )
}

export default CustomRadio