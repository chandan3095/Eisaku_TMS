import React, { useEffect, useState } from 'react'
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import CustomFileUpload from '../../../components/common/CustomFileUpload/CustomFileUpload';
import MultipleFileUpload from '../../../components/common/MultipleFileUpload/MultipleFileUpload';
import MultiSelectDropdown from '../../../components/common/MultiSelectDropdown/MultiSelectDropdown';
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomTextArea from '../../../components/common/CustomTextArea/CustomTextArea';
import { FormikProvider, Form, useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { addContractorMasterAsync } from '../../../redux/features/contractor-master/contractorMasterAddSlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { editContractorMasterAsync } from '../../../redux/features/contractor-master/contractorMasterEditSlice';
import client from '../../../Api/client';
import EndUrls from '../../../Api/endUrls';


const ContractorMasterEdit = () => {
   const [addContact, setAddContact] = useState([
      {
         id: 1,
         name: '',
         mobile: '',
         email: ''
      }
   ]);

   const handleAddContact = () => {
      setAddContact((prev) => [...prev, {
         id: prev.length + 1,
         name: '',
         mobile: '',
         email: ''
      }]);
   };
   // const [addEmail, setAddEmail] = useState([""]);
   const [fetchedContractor, setFetchedContractor] = useState({
      name: '',
      location: '',
      gst_no: '',
      address: '',
      // contact_personal_details:'',
      account_no: '',
      bank_name: '',
      ifsc_code: '',
      account_holder_name: '',
      gst_document:'',
      bank_document:'',
      agreement_details:''
   })
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [gstUpload, setGstUpload] = useState(null)
   const [bankDetailsUpload, setBankDetailsUpload] = useState(null)
   const [agreementDetailsUpload, setAgreementDetailsUpload] = useState(null)
   const params= useParams()

   // const handleAddContact = () => {
   //    setAddContact([...addContact, ""]);
   // };
   // const handleAddEmail = () => {
   //    setAddEmail([...addEmail, ""]);
   // };

   const handleChangeContactPerson = (id, e) => {
      const contactData = addContact.map((item) => {
         if (item.id === id) {
            return {
               ...item, [e.target.name]: e.target.value
            }
         }
         return item
      })
      setAddContact(contactData)
   }

   const handleRemoveContact = (index) => {
      const updatedContacts = [...addContact];
      updatedContacts.splice(index, 1);
      setAddContact(updatedContacts);
   };

   const handleGstUpload = (e) => {
      const file = e.target.files[0]
      setGstUpload(file)
   }

   const handleBankDetailsUpload = (e) => {
      const file = e.target.files[0]
      setBankDetailsUpload(file)
   }

   const handleAgreementDetailsUpload = (e) => {
      const file = e.target.files[0]
      setAgreementDetailsUpload(file)
   }

   const handleUpdateContractor=async(formData)=>{
      console.log(formData);
      const updatedData= new FormData()
      updatedData.append("id", params.id)
      updatedData.append('name', formData.name);
      updatedData.append('location', formData.location);
      updatedData.append('gst_no', formData.gst_no);
      updatedData.append('address', formData.address);
      updatedData.append('account_no', formData.account_no);
      updatedData.append('bank_name', formData.bank_name);
      updatedData.append('ifsc_code', formData.ifsc_code);
      updatedData.append('account_holder_name', formData.account_holder_name);

      gstUpload && updatedData.append('gst_document', gstUpload);
      bankDetailsUpload && updatedData.append('bank_document', bankDetailsUpload)
      agreementDetailsUpload && updatedData.append('agreement_details', agreementDetailsUpload)
      updatedData.append("model_id", 9);
      updatedData.append("action_id", 2)
      updatedData.append("_method", "PATCH")

      console.log(gstUpload);
      dispatch(editContractorMasterAsync(updatedData))
      navigate('/contractor-master/view')
   }


   
   const fetchContractor = `https://webideasolution.in/eisakutms/public/api/contractor/fetch/${params.id}?&model_id=9&action_id=3`

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(fetchContractor, {
               headers: {
                  Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
               }
            });
            console.log(response.data);
            setAddContact(response?.data?.res?.contact_personal_details)
            console.log(response?.data?.res);
            setFetchedContractor({
               ...fetchedContractor,
               name: response?.data?.res?.name,
               location: response?.data?.res?.location,
               gst_no: response?.data?.res?.gst_no,
               address: response?.data?.res?.address,
               account_no: response?.data?.res?.account_no,
               bank_name: response?.data?.res?.bank_name,
               ifsc_code: response?.data?.res?.ifsc_code,
               account_holder_name: response?.data?.res?.account_holder_name,
               gst_document: response?.data?.res?.gst_document,
               bank_document:response?.data?.res?.bank_document,
               agreement_details: response?.data?.res?.agreement_details
            })
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, [fetchContractor, params.id]);

   const contractorMasterAddSchema = yup.object().shape({
      name: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      location: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      gst_no: yup
         .string()
         .min(1, "Too Short!")
         .max(15, "Too Long!")
         .required("Required"),

      address: yup
         .string()
         .min(2, "Too Short!")
         .max(100, "Too Long!")
         .required("Required"),
      mobile: yup
         .string()
         .min(9, "Too Short!")
         .max(10, "Too Long!")
         .required("Required"),

      contact_person_name: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      email: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      account_no: yup
         .string()
         .min(9, "Too Short!")
         .max(20, "Too Long!")
         .required("Required"),

      bank_name: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      ifsc_code: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      account_holder_name: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),
   });

   const formik = useFormik({
      initialValues: fetchedContractor,
      enableReinitialize: true,
      // validationSchema: contractorMasterAddSchema,
      onSubmit: handleUpdateContractor
   });

   const { errors, touched, getFieldProps, handleSubmit, resetForm } = formik;
   
   return (
      <div>
         <BodyHeader title="Edit Contractor Master" />
         <FormikProvider value={formik}>
            <Form className="p-3 shadow-lg">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="card card-primary">
                        <div className="card-header">
                           <h3 className="card-title">Personal Details</h3>
                        </div>
                        <div className="card-body">
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                 <CustomInput
                                    require={require}
                                    label="Contractor Name"
                                    id="#name"
                                    name="name"
                                    placeholder="E.g contractor"
                                    {...getFieldProps("name")}
                                    errors={errors.name && touched.name}
                                    message={"ERROR"}
                                 />
                              </div>

                              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                 <CustomInput
                                    require={require}
                                    label="Location"
                                    id="#location"
                                    name="location"
                                    placeholder="Enter Location"
                                    {...getFieldProps("location")}
                                    errors={errors.location && touched.location}
                                    message={"ERROR"}
                                 />
                              </div>

                              <div className="col-lg-4">
                                 <CustomInput
                                    require={require}
                                    label="GST Number"
                                    id="gst_no"
                                    name="gst_no"
                                    placeholder="Enter GST Number"
                                    {...getFieldProps("gst_no")}
                                    errors={errors.gst_no && touched.gst_no}
                                    message={"ERROR"}
                                 />
                              </div>

                              <div className="col-lg-4">
                                 <label className="text-bold">GST Document <span className='text-danger'>*</span></label>
                                 <CustomFileUpload
                                    label="GST Details"
                                    id="gst_document"
                                    name="gst_document"
                                    // {...getFieldProps("gstUpload")}
                                    // errors={errors.gstUpload && touched.gstUpload}
                                    // message={errors.gstUpload}
                                    onChange={handleGstUpload} />
                                 <span className='text-success' style={{ fontSize: ".8rem" }}>
                                    {fetchedContractor?.gst_document.split('/').pop()}
                                 </span>
                              </div>

                              <div className="col-12 col-sm-12 col-md-12 col-lg- mb-3">
                                 <CustomTextArea
                                    label="Address"
                                    placeholder="Enter Address"
                                    name="address"
                                    {...getFieldProps("address")}
                                    errors={errors.address && touched.address}
                                    message={"ERROR"}
                                 />
                              </div>

                              <div className="col-12">
                                 {addContact.map((item, index) => {
                                    const { contact, email } = item
                                    return (
                                       <div key={index} className={
                                          index < addContact.length - 1 &&
                                             addContact.length > 1
                                             ? "row border-bottom mb-4 pb-3"
                                             : "row"
                                       }>
                                          <div className="col-12 col-sm-12 col-md- col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Contact Person Name"
                                                inputType="text"
                                                id="#contact_person_name"
                                                name="name"
                                                value={item.name}
                                                placeholder="Enter Contact Person Name."
                                                onChange={(e) => handleChangeContactPerson(item.id, e)}
                                                disabled={true}
                                             // {...getFieldProps("contact_person_name")}
                                             // errors={errors.contact_person_name && touched.contact_person_name}
                                             // message={"ERROR"}
                                             />
                                          </div>
                                          <div className="col-12 col-sm-12 col-md- col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Mobile No"
                                                inputType="text"
                                                id="#mobile"
                                                name="mobile"
                                                placeholder="Enter Contact Person Mobile No."
                                                value={item.mobile}
                                                onChange={(e) => handleChangeContactPerson(item.id, e)}
                                                disabled={true}
                                             // {...getFieldProps("mobile")}
                                             // errors={errors.mobile && touched.mobile}
                                             // message={"ERROR"}
                                             />
                                          </div>
                                          <div className="col-12 col-sm-12 col-md- col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Email Id"
                                                inputType="text"
                                                id="#email"
                                                name="email"
                                                placeholder="Enter Contact Person Email"
                                                value={item.email}
                                                onChange={(e) => handleChangeContactPerson(item.id, e)}
                                                disabled={true}
                                             // {...getFieldProps("email")}
                                             // errors={errors.email && touched.email}
                                             // message={"ERROR"}
                                             />
                                          </div>

                                          {index > 0 && (
                                             <div className="col-12 col-sm-12 col-md-12">

                                                <button
                                                   type="button"
                                                   className="btn btn-danger float-right ml-3 mb-3"
                                                   onClick={handleRemoveContact}
                                                >
                                                   <i className="fas fa-trash"></i> Delete item
                                                </button>
                                             </div>
                                          )}
                                       </div>
                                    );
                                 })}
                                 <button
                                    type="button"
                                    className="btn btn-primary float-right"
                                    onClick={handleAddContact}
                                 >
                                    <i className="fas fa-plus"></i> Add item
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="card card-primary">
                  <div className="card-header">
                     <h3 className="card-title">Bank Details</h3>
                  </div>
                  <div className="card-body">
                     <div className="row">
                        <div className="col-lg-4">
                           <CustomInput
                              require={require}
                              label="Account Number"
                              id="account_no"
                              name="account_no"
                              placeholder="Enter Account Number"
                              {...getFieldProps("account_no")}
                              errors={errors.account_no && touched.account_no}
                              message={"ERROR"}
                           />
                        </div>
                        <div className="col-lg-4">
                           <CustomInput
                              require={require}
                              label="Bank name"
                              id="bank_name"
                              name="bank_name"
                              placeholder="Enter Bank Name"
                              {...getFieldProps("bank_name")}
                              errors={errors.bank_name && touched.bank_name}
                              message={"ERROR"}
                           />
                        </div>
                        <div className="col-lg-4">
                           <CustomInput
                              require={require}
                              label="IFSC Code"
                              id="ifsc_code"
                              name="ifsc_code"
                              placeholder="Enter IFSC Code"
                              {...getFieldProps("ifsc_code")}
                              errors={errors.ifsc_code && touched.ifsc_code}
                              message={errors.ifsc_code}
                           />
                        </div>

                        <div className="col-lg-4">
                           <CustomInput
                              require={require}
                              label="Account Holder Name"
                              id="account_holder_name"
                              name="account_holder_name"
                              placeholder="Enter Account Holder name"
                              {...getFieldProps("account_holder_name")}
                              errors={errors.account_holder_name && touched.account_holder_name}
                              message={errors.account_holder_name}
                           />
                        </div>
                        <div className="col-lg-4">
                           <label className="text-bold">Bank Document<span className='text-danger'>*</span></label>
                           <CustomFileUpload
                              label="Bank Details"
                              id="bank_document"
                              name="bank_document"
                              // {...getFieldProps("bankDetails")}
                              // errors={errors.bankDetails && touched.bankDetails}
                              // message={errors.bankDetails}
                              onChange={handleBankDetailsUpload}
                           />
                           <span className='text-success' style={{ fontSize: ".8rem" }}>
                              {fetchedContractor?.bank_document.split('/').pop()}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-12">
                     <div className="card card-primary">
                        <div className="card-header">
                           <h3 className="card-title">Agreement Details</h3>
                        </div>
                        <div className="card-body row">
                           <div className="col-lg-4">
                              <CustomFileUpload
                                 label="Agreement Details"
                                 id="agreement_details"
                                 name="agreement_details"
                                 // {...getFieldProps("agreementDetails")}
                                 // errors={errors.agreementDetails && touched.agreementDetails}
                                 // message={errors.agreementDetails} 
                                 onChange={handleAgreementDetailsUpload}
                              />
                              <span className='text-success' style={{ fontSize: ".8rem" }}>
                                 {fetchedContractor?.agreement_details.split('/').pop()}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-3 text-center">
                  <button className="btn btn-primary px-4 py-3" type="submit" onClick={handleSubmit}>
                     <h5 className="mb-0 text-uppercase">Update</h5>
                  </button>
                  {/* <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                     <h5 className="mb-0 text-uppercase">reset</h5>
                  </button> */}
               </div>
            </Form>
         </FormikProvider>
      </div>
   )
}

export default ContractorMasterEdit
