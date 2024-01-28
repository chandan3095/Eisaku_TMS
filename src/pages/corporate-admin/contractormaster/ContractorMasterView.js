import React, { useState } from 'react'
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import CustomToggleSwitch from '../../../components/common/CustomToggle';

const ContractorMasterView = () => {

   const navigate = useNavigate()

   const [isChecked, setIsChecked] = useState({}); // State to manage toggle

     const toggleSwitch = () => {
        setIsChecked(isChecked ? isChecked = true : isChecked = false); // Toggle the state
     };
   const columns = [
      {
         name: 'Contractor Name',
         selector: row => row.contractorName,
         sortable: true
      },
      {
         name: 'Mobile Number',
         selector: row => row.mobileNumber,
      },
      {
         name: 'Location',
         selector: row => row.location,
      },
      {
         name: 'Action',
         selector: row => row.action,
      }
   ]

   const data = [
      {
         id: 1,
         contractorName: 'A Contractor',
         mobileNumber: '811344934',
         location: 'Kolkata',
         action: <>
            <button className="btn btn-primary mx-2" onClick={()=>navigate('/contractor-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="contractor1" />
         </>
      },
      {
         id: 2,
         contractorName: 'A Contractor',
         mobileNumber: '811344934',
         location: 'Kolkata',
         action: <>
            <button className="btn btn-primary mx-2" onClick={()=>navigate('/contractor-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="contractor2" />
         </>
      },
      {
         id: 3,
         contractorName: 'A Contractor',
         mobileNumber: '811344934',
         location: 'Kolkata',
         action: <>
            <button className="btn btn-primary mx-2" onClick={()=>navigate('/contractor-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="contractor3" />
         </>
      },
      {
         id: 4,
         contractorName: 'A Contractor',
         mobileNumber: '811344934',
         location: 'Kolkata',
         action: <>
            <button className="btn btn-primary mx-2" onClick={()=>navigate('/contractor-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="contractor4" />
         </>
      },
      {
         id: 5,
         contractorName: 'A Contractor',
         mobileNumber: '811344934',
         location: 'Kolkata',
         action: <>
            <button className="btn btn-primary mx-2" onClick={()=>navigate('/contractor-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="contractor5" />
         </>
      },
      {
         id: 6,
         contractorName: 'A Contractor',
         mobileNumber: '811344934',
         location: 'Kolkata',
         action: <>
            <button className="btn btn-primary mx-2" onClick={()=>navigate('/contractor-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="contractor6" />
         </>
      },
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
         return row.contractorName.toLowerCase().includes(searchText)
      });
      setRecords(newData);
   };
   return (
      <div>
         <BodyHeader title="Contractor Master List" />

         <div className='px-3'>
         <div className=" d-flex justify-content-between">
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

export default ContractorMasterView
