import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import CustomInput from '../../../components/common/CustomInput/CustomInput'
import BodyHeader from '../../../components/common/CommonBodyHeader'
import CustomToggleSwitch from '../../../components/common/CustomToggle'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleContractorContactsAsync } from '../../../redux/features/contractor-master/singleContractorContactDetailsSlice'
import CustomModal from '../../../components/common/Modal'
import { FormikProvider, useFormik } from 'formik'
import { singleContractorContactAddsAsync } from '../../../redux/features/contractor-master/singleContractorContactDetailsAddSlice'
import { singleContractorContactEditsAsync } from '../../../redux/features/contractor-master/singleContractorContactDetailsEditSlice'


const ContractorMasterContactDetails = () => {
   const [isChecked, setIsChecked] = useState(false);
   const [action,setAction]= useState()
   const [fetchedContractorContacts, setFetchedContractorContacts] = useState({
      id: '',
      mobile: '',
      contact_person_name: '',
      email: '',
   })

   const navigate = useNavigate()
   const singleContactId = useParams()

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


   const data = contactres?.user?.res?.contact_personal_details?.map?.((item, index) => {
      return {
         ...item, action:
            <>
               <button className="btn btn-primary mx-2" onClick={()=>{
                  setAction("Edit")
                  handleShowModal()
                  setFetchedContractorContacts({
                     id: item?.id,
                     mobile: item?.mobile,
                     contact_person_name: item?.name,
                     email: item?.email
                  })
               }}>Edit</button>

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
  
   const handleSingleContractorContact =async (formValue) => {
      console.log(formValue);
      handleShowModal()
      const data = new FormData()

      data.append('contractor_master_id', singleContactId.id)
      data.append('contact_person_name[]', JSON.stringify([formValue.contact_person_name]))
      data.append('mobile[]', JSON.stringify([formValue.mobile]))
      data.append('email[]', JSON.stringify([formValue.email]))

      data.append("model_id", 9);
      data.append("action_id", 2)

      dispatch(singleContractorContactAddsAsync(data))
      dispatch(singleContractorContactsAsync(singleContactId.id))
      handleCloseModal()
   }

   const formik = useFormik({
      initialValues: {
         mobile: '',
         contact_person_name: '',
         email: '',
      },
      // validationSchema,
      onSubmit: (values)=>{
         if(action === 'Add'){
            return handleSingleContractorContact(values)
         }else if(action === 'Edit'){
            return handleContactUpdate(values)
         }
      } 
   });
   const { values,errors, touched, getFieldProps, handleSubmit, resetForm } = formik;

   // for contact details update 
   console.log(singleContactId.id);

   const handleContactUpdate= async ()=>{
      const updatedata = new FormData()
     
      updatedata.append('contact_person_details_id', fetchedContractorContacts.id)
      updatedata.append('contractor_master_id', singleContactId.id)
      updatedata.append('contact_person_name[]', JSON.stringify([fetchedContractorContacts.contact_person_name]))
      updatedata.append('mobile[]', JSON.stringify([fetchedContractorContacts.mobile]))
      updatedata.append('email[]', JSON.stringify([fetchedContractorContacts.email]))

      updatedata.append("model_id", 9);
      updatedata.append("action_id", 2)
      updatedata.append("_method", "PATCH")

      dispatch(singleContractorContactEditsAsync(updatedata))
      dispatch(singleContractorContactsAsync(singleContactId.id))
      handleCloseModal()
   }

   return (
      <div>
         <BodyHeader title="Contractor Master Contacts List" />

         <div className='px-3'>
            <div className=" d-flex justify-content-end">
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

            <div className='d-flex justify-content-end py-3'>
               <button className='btn btn-primary' onClick={()=>{
                  setAction("Add")
                  handleShowModal()
                  }}>Add Contact</button>
            </div>

            {action === 'Add' && 
               <CustomModal
                  showModal={isModalVisible}
                  onSubmit={handleSubmit}
                  modalSize="modal-xl"
                  handleCloseModal={handleCloseModal}
                  child={
                     <FormikProvider >
                        <form className="p-3 shadow-lg" onSubmit={handleSubmit}>
                           <div className="row">
                              <div className="col-lg-12">
                                 <div className="card card-primary">
                                    <div className="card-body">
                                       <div className="row">
                                          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Contact Person Name"
                                                inputType="text"
                                                id="#contact_person_name"
                                                name="contact_person_name"
                                                value={values.contact_person_name}
                                                placeholder="Enter Contact Person Name."
                                                {...getFieldProps("contact_person_name")}
                                                errors={errors.contact_person_name && touched.contact_person_name}
                                                message={"Error"}
                                             />
                                          </div>

                                          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Mobile No"
                                                inputType="number"
                                                id="#mobile"
                                                name="mobile"
                                                value={values.mobile}
                                                placeholder="Enter Contact Person Mobile No."
                                                {...getFieldProps("mobile")}
                                                errors={errors.mobile && touched.mobile}
                                                message={"Error"}
                                             />
                                          </div>

                                          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Email Id"
                                                inputType="text"
                                                id="#email"
                                                name="email"
                                                value={values.email}
                                                placeholder="Enter Contact Person Email"
                                                {...getFieldProps("email")}
                                                errors={errors.email && touched.email}
                                                message={"Error"}
                                             />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </FormikProvider>
                  }
                  modalTitle={"Add Contact Details"}
               />}

            {action === 'Edit' && 
            <CustomModal
               showModal={isModalVisible}
               handleCloseModal={handleCloseModal}
               onSubmit={handleSubmit}
               modalSize="modal-xl"
               child={
                  <FormikProvider >
                     <form className="p-3 shadow-lg" onSubmit={handleSubmit}>
                        <div className="row">
                           <div className="col-lg-12">
                              <div className="card card-primary">
                                 <div className="card-body">
                                    <div className="row">
                                       <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                          <CustomInput
                                             require={require}
                                             label="Contact Person Name"
                                             inputType="text"
                                             id="#contact_person_name"
                                             name="contact_person_name"
                                             {...getFieldProps("contact_person_name")}
                                             value={fetchedContractorContacts.contact_person_name}
                                             onChange={(e) => setFetchedContractorContacts({ ...fetchedContractorContacts, contact_person_name: e.target.value })}
                                             placeholder="Enter Contact Person Name."
                                             errors={errors.contact_person_name && touched.contact_person_name}
                                             message={"Error"}
                                          />
                                       </div>

                                       <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                          <CustomInput
                                             require={require}
                                             label="Mobile No"
                                             inputType="text"
                                             id="#mobile"
                                             name="mobile"
                                             {...getFieldProps("mobile")}
                                             value={fetchedContractorContacts.mobile}
                                             onChange={(e) => setFetchedContractorContacts({ ...fetchedContractorContacts, mobile: e.target.value })}
                                             placeholder="Enter Contact Person Mobile No."
                                             errors={errors.mobile && touched.mobile}
                                             message={"Error"}
                                          />
                                       </div>

                                       <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                          <CustomInput
                                             require={require}
                                             label="Email Id"
                                             inputType="text"
                                             id="#email"
                                             name="email"
                                             {...getFieldProps("email")}
                                             value={fetchedContractorContacts.email}
                                             onChange={(e) => setFetchedContractorContacts({...fetchedContractorContacts,email:e.target.value})}
                                             placeholder="Enter Contact Person Email"
                                             errors={errors.email && touched.email}
                                             message={"Error"}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </FormikProvider>
               }
               modalTitle={"Edit Contact Details"}
            />}
         </div>
      </div>
   )
}

export default ContractorMasterContactDetails
