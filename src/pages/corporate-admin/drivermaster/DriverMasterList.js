import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import BodyHeader from '../../../components/common/CommonBodyHeader'

const DriverMasterList = () => {
   const columns = [
      {
         name: 'Driver Name',
         selector: row => row.driverName,
         sortable: true
      },
      {
         name: 'License Number',
         selector: row => row.licenseNumber,
      },
      {
         name: 'License Exp Date',
         selector: row => row.licenseExpDate,
      },
      {
         name: 'Payroll Type',
         selector: row => row.payrollType,
      },
      {
         name: 'Action',
         selector: row => row.action,
      }
   ]

   const data = [
      {
         id: 1,
         driverName: 'A Driver',
         licenseNumber: '811344934',
         licenseExpDate: '19/2/2026',
         payrollType: 'Esaku Pay Roll',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 2,
         driverName: 'B Driver',
         licenseNumber: '811344934',
         licenseExpDate: '19/2/2026',
         payrollType: 'Esaku Pay Roll',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 3,
         driverName: 'C Driver',
         licenseNumber: '811344934',
         licenseExpDate: '19/2/2026',
         payrollType: 'Esaku Pay Roll',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 4,
         driverName: 'D Driver',
         licenseNumber: '811344934',
         licenseExpDate: '19/2/2026',
         payrollType: 'Esaku Pay Roll',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 5,
         driverName: 'E Driver',
         licenseNumber: '811344934',
         licenseExpDate: '19/2/2026',
         payrollType: 'Esaku Pay Roll',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 6,
         driverName: 'F Driver',
         licenseNumber: '811344934',
         licenseExpDate: '19/2/2026',
         payrollType: 'Esaku Pay Roll',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
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
           data={records}
           sortable
           fixedHeader
           pagination
           responsive
           striped={true}
           borderColor="#000000"
           selectableRows
           customStyles={customStyles}>
        </DataTable>
     </div>
  )
}

export default DriverMasterList
