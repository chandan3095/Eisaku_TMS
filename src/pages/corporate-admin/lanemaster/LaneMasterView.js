import React, { useState } from 'react'
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import CustomToggleSwitch from '../../../components/common/CustomToggle';

const LaneMasterView = () => {
   const navigate = useNavigate()
   const [isChecked, setIsChecked] = useState({}); // State to manage toggle

   const toggleSwitch = () => {
      setIsChecked(isChecked ? isChecked = true : isChecked = false); // Toggle the state
      console.log(isChecked);
   };
   const columns = [
      {
         name: 'Lane Name',
         selector: row => row.laneName,
         sortable: true
      },
      {
         name: 'Vendor Name',
         selector: row => row.vendorName,
      },
      {
         name: 'Origin',
         selector: row => row.origin,
      },
      {
         name: 'Vehicle Type',
         selector: row => row.vehicleType,
      },
      {
         name: 'Customer Name',
         selector: row => row.customerName,
      },
      {
         name: 'Action',
         selector: row => row.action,
      }
   ]

   const data = [
      {
         id: 1,
         laneName: 'A Lane',
         vendorName: 'Paityn Harris',
         origin: 'India',
         vehicleType: 'car',
         customerName:'Danny Zurick',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/lane-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="lane1" />
         </>
      },
      {
         id: 2,
         laneName: 'A Lane',
         vendorName: 'Paityn Harris',
         origin: 'India',
         vehicleType: 'car',
         customerName: 'Danny Zurick',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/lane-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="lane2" />
         </>
      },
      {
         id: 3,
         laneName: 'A Lane',
         vendorName: 'Paityn Harris',
         origin: 'India',
         vehicleType: 'car',
         customerName: 'Danny Zurick',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/lane-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="lane3" />
         </>
      },
      {
         id: 4,
         laneName: 'A Lane',
         vendorName: 'Paityn Harris',
         origin: 'India',
         vehicleType: 'car',
         customerName: 'Danny Zurick',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/lane-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="lane4" />
         </>
      },
      {
         id: 5,
         laneName: 'A Lane',
         vendorName: 'Paityn Harris',
         origin: 'India',
         vehicleType: 'car',
         customerName: 'Danny Zurick',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/lane-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="lane5" />
         </>
      },
      {
         id: 6,
         laneName: 'A Lane',
         vendorName: 'Paityn Harris',
         origin: 'India',
         vehicleType: 'car',
         customerName: 'Danny Zurick',
         action: <>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/lane-master/add-form')}>Edit</button>
            <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="lane6" />
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
         return row.laneName.toLowerCase().includes(searchText) ||
            row.vendorName.toLowerCase().includes(searchText) ||
            row.customerName.toLowerCase().includes(searchText);
      });
      setRecords(newData);
   };
   return (
      <div>
         <BodyHeader title="Lane Master List" />

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

export default LaneMasterView
