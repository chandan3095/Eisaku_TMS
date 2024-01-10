// import React from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BodyHeader from '../../../components/common/CommonBodyHeader'
import DataTable from 'react-data-table-component'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import CustomToggleSwitch from '../../../components/common/CustomToggle'

function LocationMasterView() {
   const navigate = useNavigate()

   const [isChecked, setIsChecked] = useState({}); // State to manage toggle

   const toggleSwitch = () => {
      setIsChecked(isChecked ? isChecked = true : isChecked = false); // Toggle the state
      console.log(isChecked);
   };
    const columns = [
        {
           name: 'Contact Person Name',
           selector: row => row.vendorName,
           sortable: true
        },
       
        {
           name: 'Action',
           selector: row => row.action,
        }
     ]
  
     const data = [
        {
           id: 1,
           vendorName: 'A Vendor',
           action: <>
              <button className="btn btn-primary mx-2">Edit</button>
              <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="helper6" />
           </>
        },
        {
           id: 2,
           vendorName: 'B Vendor',
           action: <>
              <button className="btn btn-primary mx-2">Edit</button>
              <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="helper6" />
           </>
        },
        {
           id: 3,
           vendorName: 'C Vendor',
           action: <>
              <button className="btn btn-primary mx-2">Edit</button>
              <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="helper6" />
           </>
        },
        {
           id: 4,
           vendorName: 'D Vendor',
           action: <>
              <button className="btn btn-primary mx-2">Edit</button>
              <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="helper6" />
           </>
        }
     ]
  
     const customStyles = {
        table: {
           style: {
              border: '1px solid #0bc4f0', // Set border color
           },
        },
        rows: {
           style: {
              minHeight: '72px', // override the row height
           }
        },
       
        headCells: {
           style: {
              paddingLeft: '8px', // override the cell padding for head cells
              paddingRight: '8px',
              backgroundColor: '#0bc4f0',
           },
        },
        cells: {
           style: {
              paddingLeft: '8px', // override the cell padding for data cells
              paddingRight: '8px',
              fontSize: '14px', // Set font size for regular cells
              border: '1px solid #0bc4f0',
           },
        },
     };
  
     const [records, setRecords] = useState(data)
  
     const handleFilter = (e) => {
        const searchText = e.target.value.toLowerCase();
        const newData = data.filter(row => {
           return row.vendorName.toLowerCase().includes(searchText) ||
              row.contactPersonName.toLowerCase().includes(searchText) ||
              row.location.toLowerCase().includes(searchText);
        });
        setRecords(newData);
     };
  return (
    <div>
        <BodyHeader title="Location Master List" />
        <div className='px-3'>
        <div className="d-flex justify-content-between">
            <h3>User's List</h3>
            <CustomInput inputType="text" placeholder="Search..." id="search" onChange={(e) => handleFilter(e)} />
         </div>
         <DataTable
            columns={columns}
            data={records}
            sortable
            fixedHeader
            pagination
            responsive
            striped={true}
            borderColor="#000000"
            customStyles={customStyles}>
         </DataTable>
        </div>
        
      </div>
  )
}

export default LocationMasterView