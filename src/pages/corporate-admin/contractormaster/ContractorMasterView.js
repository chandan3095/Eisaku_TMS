import React, { useEffect, useState } from 'react'
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import DataTable from 'react-data-table-component';
import { useNavigate, useParams } from 'react-router-dom';
import CustomToggleSwitch from '../../../components/common/CustomToggle';
import { useDispatch, useSelector } from 'react-redux';
import { listContractorMasterAsync } from '../../../redux/features/contractor-master/contractorMasterListSlice';

const ContractorMasterView = () => {

   const navigate = useNavigate()
   const dispatch = useDispatch()
   
   const contractorsList = useSelector((state) => state.contractorMasterListSlice)
   console.log(contractorsList);
   const [isChecked, setIsChecked] = useState(false); // State to manage toggle

   const toggleSwitch = () => {
      setIsChecked((prev) => !prev); // Toggle the state
      console.log(isChecked);
   };
   const columns = [
      {
         name: 'Contractor Name',
         selector: row => row.name,
         sortable: true
      },
      {
         name: 'Account Holder Name',
         selector: row => {
            return row.account_holder_name
         },
      },
      {
         name: 'Location',
         selector: row => row.location,
      },
      {
         name: 'Action',
         selector: row => {
            return row.action
         },
      }
   ]

   const data = contractorsList?.user?.res?.map?.((item, index) => {
      console.log({ item });
      return {
         ...item, action:
            <>
               <button className="btn btn-primary mx-2" onClick={() => navigate(`/contractor-master/edit/${item?.id}`)}>Edit</button>

               <button className="btn btn-primary mx-2" onClick={() => navigate(`/contractor-master/${item.id}/contact-details`)}>Contact Details</button>

               <CustomToggleSwitch onChange={toggleSwitch} id={index} />
            </>
      }
   })

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

   useEffect(() => {
      dispatch(listContractorMasterAsync())
   }, []);

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
            <div className=" d-flex justify-content-end">
               {/* <h3>User's List</h3> */}
               <CustomInput inputType="text" placeholder="Search..." id="search" onChange={(e) => handleFilter(e)} />
            </div>
            <DataTable
               columns={columns}
               data={data}
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
