import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import BodyHeader from '../../../components/common/CommonBodyHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {deleteDriveMaster} from '../../../reducer/DriveMasterReducer'
import CustomToggleSwitch from '../../../components/common/CustomToggle'


// const data = [
//    {
//       id: 1,
//       driverName: 'A Driver',
//       licenseNumber: '811344934',
//       licenseExpDate: '19/2/2026',
//       payrollType: 'Esaku Pay Roll',
//       action: <>
//          <button className="btn btn-primary mx-2">Edit</button>
//          <button className="btn btn-danger mx-2"> Delete</button>
//       </>
//    },
//    {
//       id: 2,
//       driverName: 'B Driver',
//       licenseNumber: '811344934',
//       licenseExpDate: '19/2/2026',
//       payrollType: 'Esaku Pay Roll',
//       action: <>
//          <button className="btn btn-primary mx-2">Edit</button>
//          <button className="btn btn-danger mx-2"> Delete</button>
//       </>
//    },
//    {
//       id: 3,
//       driverName: 'C Driver',
//       licenseNumber: '811344934',
//       licenseExpDate: '19/2/2026',
//       payrollType: 'Esaku Pay Roll',
//       action: <>
//          <button className="btn btn-primary mx-2">Edit</button>
//          <button className="btn btn-danger mx-2"> Delete</button>
//       </>
//    },
//    {
//       id: 4,
//       driverName: 'D Driver',
//       licenseNumber: '811344934',
//       licenseExpDate: '19/2/2026',
//       payrollType: 'Esaku Pay Roll',
//       action: <>
//          <button className="btn btn-primary mx-2">Edit</button>
//          <button className="btn btn-danger mx-2"> Delete</button>
//       </>
//    },
//    {
//       id: 5,
//       driverName: 'E Driver',
//       licenseNumber: '811344934',
//       licenseExpDate: '19/2/2026',
//       payrollType: 'Esaku Pay Roll',
//       action: <>
//          <button className="btn btn-primary mx-2">Edit</button>
//          <button className="btn btn-danger mx-2"> Delete</button>
//       </>
//    },
//    {
//       id: 6,
//       driverName: 'F Driver',
//       licenseNumber: '811344934',
//       licenseExpDate: '19/2/2026',
//       payrollType: 'Esaku Pay Roll',
//       action: <>
//          <button className="btn btn-primary mx-2">Edit</button>
//          <button className="btn btn-danger mx-2"> Delete</button>
//       </>
//    },
// ]
const DriverMasterList = () => {
   const listFormData = useSelector((state) => state.driveMaster)
   const [records, setRecords] = useState(listFormData.driveMasterList)
   console.log(listFormData);

   const navigate = useNavigate();
   const dispatch = useDispatch()


   const [isChecked, setIsChecked] = useState({}); // State to manage toggle

   const toggleSwitch = () => {
      setIsChecked(isChecked ? isChecked = true : isChecked = false); // Toggle the state
      console.log(isChecked);
   };

   const handleUpdate=(drivingLicense)=>{
      navigate(`/driver-master/edit/${drivingLicense}`)

   }

   const handleDelete =(drivingLicense)=>{
      console.log(drivingLicense);
      dispatch(deleteDriveMaster({drivingLicense}))
   }

   const columns = [
      {
         name: 'Driver Name',
         selector: row => row.Name,
         sortable: true
      },
      {
         name: 'License Number',
         selector: row => row.drivingLicense,
      },
      {
         name: 'License Exp Date',
         selector: row => row.licenseExp,
      },
      {
         name: 'Payroll Type',
         selector: row => row.payRollType,
      },
      {
         name: 'Action',
         selector: row => <>
            <button className="btn btn-primary mx-2" onClick={() => handleUpdate(row.drivingLicense)}>Edit</button>
            {/* <button className="btn btn-danger mx-2" onClick={() => handleDelete(row.drivingLicense)}> Delete</button> */}
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="driver1" />
         </>,
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

   const handleFilter = (e) => {
      const searchText = e.target.value.toLowerCase();
      const newData = listFormData.driveMasterList.filter(row => {
         return row.driverName.toLowerCase().includes(searchText) ||
            row.licenseNumber.toLowerCase().includes(searchText) ||
            row.licenseExpDate.toLowerCase().includes(searchText);
      });
      setRecords(newData);
   };
   return (
      <div>
         <BodyHeader title="Driver Master List" />

         <div className=" d-flex justify-content-between">
            <h3>User's List</h3>
            <CustomInput inputType="text" placeholder="Search..." id="search" onChange={(e) => handleFilter(e)} />
         </div>
         <DataTable
            columns={columns}
            data={listFormData.driveMasterList}
            sortable
            fixedHeader
            pagination
            responsive
            striped={true}
            borderColor="#000000"
            customStyles={customStyles}>
         </DataTable>
      </div>
   )
}

export default DriverMasterList
