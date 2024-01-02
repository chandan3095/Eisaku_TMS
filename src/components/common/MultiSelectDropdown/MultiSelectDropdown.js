import React, { useState } from 'react'
import Select from 'react-select';

const MultiSelectDropdown = ({
   options = [
      { value: '1', label: 'Manager1' },
      { value: '2', label: 'Manager2' },
      { value: '3', label: 'Manager3' },
      { value: '4', label: 'Manager4' },
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
