import React, { useState } from 'react'
import BodyHeader from '../../../components/common/CommonBodyHeader'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import DataTable from 'react-data-table-component'

const FleetMasterView = () => {
   const columns = [
      {
         name: 'Vehicle Number',
         selector: row => row.vehicleNumber,
      },
      {
         name: 'Vehicle Name',
         selector: row => row.vehicleName,
         sortable:true
      },
      {
         name: 'Vehicle Title',
         selector: row => row.vehicleTitle,
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
         vehicleNumber: 'UP-80K-8271',
         vehicleName: 'Mini Car',
         vehicleTitle: 'Mini Car',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 2,
         vehicleNumber: 'UP-80K-8271',
         vehicleName: 'Mini Car',
         vehicleTitle: 'Mini Car',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 3,
         vehicleNumber: 'UP-80K-8271',
         vehicleName: 'Mini Car',
         vehicleTitle: 'Mini Car',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 4,
         vehicleNumber: 'UP-80K-8271',
         vehicleName: 'Mini Car',
         vehicleTitle: 'Mini Car',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 5,
         vehicleNumber: 'UP-80K-8271',
         vehicleName: 'Mini Car',
         vehicleTitle: 'Mini Car',
         action: <>
            <button className="btn btn-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 6,
         vehicleNumber: 'UP-80K-8271',
         vehicleName: 'Mini Car',
         vehicleTitle: 'Mini Car',
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
         return row.vehicleNumber.toLowerCase().includes(searchText) ||
            row.vehicleName.toLowerCase().includes(searchText) ||
            row.vehicleTitle.toLowerCase().includes(searchText);
      });
      setRecords(newData);
   };
  return (
    <div>
        <BodyHeader title="Fleet Master List" />

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

export default FleetMasterView
