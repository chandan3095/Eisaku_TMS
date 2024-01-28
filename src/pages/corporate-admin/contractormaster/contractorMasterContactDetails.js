import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import BodyHeader from '../../../components/common/CommonBodyHeader'
import CustomToggleSwitch from '../../../components/common/CustomToggle'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleContractorContactsAsync } from '../../../redux/features/contractor-master/singleContractorContactDetailsSlice'
import CustomModal from '../../../components/common/Modal'
import ContactDetailsAddFrom from '../../../components/common/contactDetailsAdd/ContactDetailsAddFrom'
import { useFormik } from 'formik'

const ContractorMasterContactDetails = () => {
   const [isChecked, setIsChecked] = useState(false);
   const navigate = useNavigate()
   const singleContactId = useParams()
   console.log(singleContactId);
   const dispatch = useDispatch()

   const [isModalVisible, setIsModalVisible] = useState(false);
   const handleShowModal = () => {
      setIsModalVisible(true);
   };
   const handleCloseModal = () => {
      setIsModalVisible(false);
   };

   const toggleSwitch = () => {
      setIsChecked((prev) => !prev);

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

   useEffect(() => {
      dispatch(singleContractorContactsAsync(singleContactId.id))
   }, [dispatch, singleContactId.id])

   const contactres = useSelector((state) => state.singlecontractorContactDetailsSlice)
   console.log(contactres);

   const data = contactres?.user?.res?.contact_personal_details?.map?.((item, index) => {
      return {
         ...item, action:
            <>
               <button className="btn btn-primary mx-2" onClick={() => navigate(`/contractor-master/${item.id}/contact-details`)}>Edit</button>

               <CustomToggleSwitch onChange={toggleSwitch} id={index} />
            </>,
         mobileNumber: item.mobile,
         contactPersonName: item.name,
         emailId: item.email,
      }
   })


   const customStyles = {
      table: {
         style: {
            border: '1px solid #0bc4f0',
         },
      },
      rows: {
         style: {
            minHeight: '72px',
         }
      },
      headCells: {
         style: {
            paddingLeft: '8px',
            paddingRight: '8px',
            backgroundColor: '#0bc4f0',
         },
      },
      cells: {
         style: {
            paddingLeft: '8px',
            paddingRight: '8px',
            fontSize: '14px',
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


   // const formik = useFormik({
   //    initialValues: {
   //       mobile: '',
   //       contact_person_name: '',
   //       email: '',
   //    },
   //    // validationSchema,
   //    onSubmit: (values) => {
   //       // Handle form submission logic here
   //       console.log(values);
   //    },
   // });
   // const { errors, touched, getFieldProps, handleSubmit, resetForm } = formik;
   return (
      <div>
         <BodyHeader title="Contractor Master Contacts List" />

         <div className='px-3'>
            <div className=" d-flex justify-content-end">
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

            <div className='d-flex justify-content-end py-3'>
               <button className='btn btn-primary' onClick={handleShowModal}>Add Contact</button>
            </div>

            {/* <CustomModal
               showModal={isModalVisible}
               handleCloseModal={handleCloseModal}
               modalSize="modal-xl"
               child={<ContactDetailsAddFrom />}
               modalTitle={"Add Contact Details"}
            /> */}
         </div>
      </div>
   )
}

export default ContractorMasterContactDetails
