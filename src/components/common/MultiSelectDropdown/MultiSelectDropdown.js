import React, { useState } from 'react'
import Select from 'react-select';

const MultiSelectDropdown = ({
   options = [
      { value: '1', label: 'abcd' },
      { value: '2', label: 'dcbd' },
      { value: '3', label: 'adcb' },
      { value: '4', label: 'bacd' },
   ] }) => {

   const [selectedOption, setSelectedOption] = useState([])

   const handleChange = (selected) => {
      setSelectedOption(selected)
   }
   return (
      <div>
         <Select
            isMulti
            value={selectedOption}
            onChange={handleChange}
            options={options}
         />
      </div>
   )
}

export default MultiSelectDropdown
