import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import BodyHeader from '../../../components/common/CommonBodyHeader'
import CustomToggleSwitch from '../../../components/common/CustomToggle'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ContractorMasterContactDetails = () => {
   const [isChecked, setIsChecked] = useState(false); // State to manage toggle
   const navigate = useNavigate()
   const contractorsContactsList = useSelector((state) => state.contractorMasterListSlice)
   console.log("response", contractorsContactsList);
   // contractorsContactsList.filter((item)=> item.id === 34)
   const toggleSwitch = () => {
      setIsChecked((prev) => !prev); // Toggle the state
      // console.log(isChecked);
   };
   const columns = [
      {
         name: 'Contact Person Name',
         selector: row => row.contactPersonName,
         sortable: true
      },
      {
         name: 'Mobile Number',
         selector: row => {
            return row.mobileNumber
         },
      },
      {
         name: 'Email Id',
         selector: row => row.emailId,
      },
      {
         name: 'Action',
         selector: row => {
            return row.action
         },
      }
   ]
   const data = contractorsContactsList?.user?.res?.map?.((item, index) => {
      return {
         ...item, action:
            <>
               <button className="btn btn-primary mx-2" onClick={() => navigate(`/contractor-master/${item.id}/contact-details`)}>Edit</button>

               <CustomToggleSwitch onChange={toggleSwitch} id={index} />
            </>,
         // if(item.id === 34){
         //    mobileNumber: item.contact_personal_details.map((mobileNumber) => {
         //       return <div>
         //          {mobileNumber.mobile},
         //       </div>
         //    }),
         //       contactPersonName: item.contact_personal_details.map((contactPersonName) => {
         //          return <>
         //             {contactPersonName.name}
         //          </>
         //       }),
         //          emailId: item.contact_personal_details.map((emailId) => {
         //             return <>
         //                {emailId.email}
         //             </>
         //          }),
         //    }
      }
      })

console.log(data);
// {
//    id: 1,
//    contactPersonName: 'A customer',
//    mobileNumber: '811344934',
//    emailId: 'aaa@gmail.com',
//    action: <>
//       <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
//       <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="csutomer1" />
//    </>
// },
// {
//    id: 2,
//    contactPersonName: 'B customer',
//    mobileNumber: '811347834',
//    emailId: 'bbb@gmail.com',
//    action: <>
//       <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
//       <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="csutomer2" />
//    </>
// },
// {
//    id: 3,
//    contactPersonName: 'C customer',
//    mobileNumber: '822347834',
//    emailId: 'ccc@gmail.com',
//    action: <>
//       <button className="btn btn-primary mx-2" onClick={() => navigate('/customer-master/add-form')}>Edit</button>
//       <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="csutomer3" />
//    </>
// },


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
      <BodyHeader title="Contractor Master Contacts List" />

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

export default ContractorMasterContactDetails
