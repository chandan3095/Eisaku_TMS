import React, { useState } from 'react'
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const CustomerMasterView = () => {
   const navigate = useNavigate()
   const columns = [
      {
         name: 'Customer Name',
         selector: row => row.customerName,
         sortable: true
      },
      {
         name: 'Mobile Number',
         selector: row => row.mobileNumber,
      },
      {
         name: 'Address',
         selector: row => row.address,
      },
      {
         name: 'Action',
         selector: row => row.action,
      }
   ]

   const data = [
      {
         id: 1,
         customerName: 'A customer',
         mobileNumber: '811344934',
         address: '8842 Monroe Street, Kolkata, West Bengal, India 700047',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 2,
         customerName: 'B customer',
         mobileNumber: '811344934',
         address: '8842 Monroe Street, Kolkata, West Bengal, India 700047',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 3,
         customerName: 'C customer',
         mobileNumber: '811344934',
         address: '8842 Monroe Street, Kolkata, West Bengal, India 700047',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 4,
         customerName: 'D customer',
         mobileNumber: '811344934',
         address: '8842 Monroe Street, Kolkata, West Bengal, India 700047',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 5,
         customerName: 'E customer',
         mobileNumber: '811344934',
         address: '8842 Monroe Street, Kolkata, West Bengal, India 700047',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
            <button className="btn btn-danger mx-2"> Delete</button>
         </>
      },
      {
         id: 6,
         customerName: 'F customer',
         mobileNumber: '811344934',
         address: '8842 Monroe Street, Kolkata, West Bengal, India 700047',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
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
         return row.customerName.toLowerCase().includes(searchText) 
      });
      setRecords(newData);
   };
   return (
      <div>
         <BodyHeader title="Customer Master List" />

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

export default CustomerMasterView
