import React, { useState } from 'react'
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router';

const ViewTrip = () => {
   const navigate = useNavigate()

   const columns = [
      {
         name: "Vehicle Number",
         selector: (row) => row.vehicleNumber,
      },
      {
         name: "Driver Name",
         selector: (row) => row.driverName,
         sortable: true,
      },
      {
         name: "Customer Name",
         selector: (row) => row.customerName,
         sortable: true,
      },
      {
         name: "Action",
         selector: (row) => row.action,
      },
      {
         name: "Status",
         selector: (row) => row.status,
      },
   ];

   const data = [
      {
         id: 1,
         vehicleNumber: "UP-80K-8271",
         driverName: "Driver 1",
         customerName: "Customer 1",
         action: (
            <button className="btn btn-info mx-2" onClick={()=>navigate('/trip/adhoc/add')}>
               View
            </button>
         ),
         status: (
            <button className="btn btn-success mx-2">
               Approved
            </button>
         ),
      },
      {
         id: 2,
         vehicleNumber: "UP-80K-8271",
         driverName: "Driver 2",
         customerName: "Customer 2",
         action: (
            <button className="btn btn-info mx-2" onClick={()=>navigate('/trip/adhoc/add')}>
               View
            </button>
         ),
         status: (
            <button
               className="btn btn-danger mx-2">
               Rejected
            </button>
         ),
      },
      {
         id: 3,
         vehicleNumber: "UP-80K-8271",
         driverName: "Driver 3",
         customerName: "Customer 3",
         action: (
            <button className="btn btn-info mx-2" onClick={()=>navigate('/trip/adhoc/add')}>
               View
            </button>
         ),
         status: (
            <button
               className="btn btn-warning mx-2">
               Pending
            </button>
         ),
      },
      {
         id: 4,
         vehicleNumber: "UP-80K-8271",
         driverName: "Driver 4",
         customerName: "Customer 4",
         action: (
            <button className="btn btn-info mx-2" onClick={()=>navigate('/trip/adhoc/add')}>
               View
            </button>
         ),
         status: (
            <button
               className="btn btn-success mx-2">
               Approved
            </button>
         ),
      },
      {
         id: 5,
         vehicleNumber: "UP-80K-8271",
         driverName: "Driver 5",
         customerName: "Customer 5",
         action: (
            <button className="btn btn-info mx-2" onClick={()=>navigate('/trip/adhoc/add')}>
               View
            </button>
         ),
         status: (
            <button
               className="btn btn-warning mx-2">
               Pending
            </button>
         ),
      },
      {
         id: 6,
         vehicleNumber: "UP-80K-8271",
         driverName: "Driver 6",
         customerName: "Customer 6",
         action: (
            <button className="btn btn-info mx-2" onClick={()=>navigate('/trip/adhoc/add')}>
               View
            </button>
         ),
         status: (
            <button
               className="btn btn-warning mx-2">
               Pending
            </button>
         ),
      },
   ];

   const customStyles = {
      table: {
         style: {
            border: "1px solid #0bc4f0", // Set border color
         },
      },
      rows: {
         style: {
            minHeight: "72px", // override the row height
            fontSize: "1rem",
         },
      },
      headCells: {
         style: {
            paddingLeft: "8px", // override the cell padding for head cells
            paddingRight: "8px",
            backgroundColor: "#0bc4f0",
         },
      },
      cells: {
         style: {
            paddingLeft: "8px", // override the cell padding for data cells
            paddingRight: "8px",
            fontSize: "14px", // Set font size for regular cells
            border: "1px solid #0bc4f0",
         },
      },
   };
   const [records, setRecords] = useState(data);

   const handleFilter = (e) => {
      const searchText = e.target.value.toLowerCase();
      const newData = data.filter((row) => {
         return (
            row.vehicleNumber.toLowerCase().includes(searchText) ||
            row.driverName.toLowerCase().includes(searchText) ||
            row.customerName.toLowerCase().includes(searchText)
         );
      });
      setRecords(newData);
   };
   
   return (
      <div>
         <BodyHeader title="Trip List" />

         <div className='px-3'>
         <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
            <button className='btn btn-primary mr-2'>All Trip</button>
            <button className='btn btn-secondary mx-2'>Open Trip</button>
            <button className='btn btn-secondary mx-2'>Close Trip</button>
            </div>
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

export default ViewTrip
