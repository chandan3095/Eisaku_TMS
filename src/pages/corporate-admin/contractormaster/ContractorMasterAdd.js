import React, { useState } from 'react'
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
import { useNavigate } from 'react-router-dom';

const ContractorMasterAdd = () => {
   const [addContact, setAddContact] = useState([
      {  id: 1,
         contact_person_name: '',
         mobile: '',
         email: ''
      }
   ]);
   // const [addEmail, setAddEmail] = useState([""]);
   const dispatch = useDispatch()
   const navigate=useNavigate()
   const [gstUpload, setGstUpload] = useState(null)
   const [bankDetailsUpload, setBankDetailsUpload] = useState(null)
   const [agreementDetailsUpload, setAgreementDetailsUpload] = useState(null)

   const handleAddContact = () => {
      setAddContact((prev) => [...prev, {
         id: prev.length+1,
         contact_person_name: '',
         mobile: '',
         email: ''
      }]);
   };

   // console.log(addContact);
   // const handleAddEmail = () => {
   //    setAddEmail([...addEmail, ""]);
   // };

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

   const handleChangeContactPerson=(id,e)=>{
      const contactData=addContact.map((item)=>{
         if (item.id === id){
            return{
               ...item, [e.target.name]:e.target.value
            }
         }
         return item
      })
      setAddContact(contactData)
   }
   // console.log(gstUpload);

   const handleContractor = async (formData) => {

      const conpername = addContact.map((item, index) => {
         return item.contact_person_name
      })
      console.log(conpername);

      const conpermobile = addContact.map((item, index) => {
         return item.mobile
      })

      const conperemail = addContact.map((item, index) => {
         return item.email
      })

      console.log('INFO', 'contractor form', formData);
      const newData = new FormData()
      // Object.entries(formData).forEach(([key, value]) => {
      //    newData.append(key, value);
      // });
      newData.append('name', formData.name);
      newData.append('location', formData.location);
      newData.append('gst_no', formData.gst_no);
      newData.append('address', formData.address);
      newData.append('account_no', formData.account_no);
      newData.append('bank_name', formData.bank_name);
      newData.append('ifsc_code', formData.ifsc_code);
      newData.append('account_holder_name', formData.account_holder_name);

      newData.append('gst_document', gstUpload);
      newData.append('bank_document', bankDetailsUpload)
      newData.append('agreement_details', agreementDetailsUpload)

      newData.append('contact_person_name[]', JSON.stringify(conpername))
      newData.append('mobile[]', JSON.stringify(conpermobile))
      newData.append('email[]', JSON.stringify(conperemail))
      newData.append("model_id", 9);
      newData.append("action_id",1)

      console.log('INFO', 'contractor add form', ...newData);

      dispatch(addContractorMasterAsync(newData))
      navigate('/contractor-master/view')
   }


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
      initialValues: {
         name: '',
         location: '',
         gst_no: '',
         address: '',
         mobile: '',
         contact_person_name: '',
         email: '',
         account_no: '',
         bank_name: '',
         ifsc_code: '',
         account_holder_name: '',
      },
      // validationSchema: contractorMasterAddSchema,
      onSubmit: handleContractor
   })
   const { errors, touched, getFieldProps, handleSubmit, resetForm } = formik;
   return (
      <div>
         <BodyHeader title="Add Contractor Master" />
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
                                    id="gstUpload"
                                    name="gstUpload"
                                    // {...getFieldProps("gstUpload")}
                                    // errors={errors.gstUpload && touched.gstUpload}
                                    // message={errors.gstUpload}
                                    onChange={handleGstUpload} />
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
                                                name="contact_person_name"
                                                value={item.contact_person_name}
                                                placeholder="Enter Contact Person Name."
                                                onChange={(e)=>handleChangeContactPerson(item.id,e)}
                                                // {...getFieldProps("contact_person_name")}
                                                // errors={errors.contact_person_name && touched.contact_person_name}
                                                // message={"ERROR"}
                                             />
                                          </div>
                                          <div className="col-12 col-sm-12 col-md- col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Mobile No"
                                                inputType="number"
                                                id="#mobile"
                                                name="mobile"
                                                placeholder="Enter Contact Person Mobile No."
                                                value={item.mobile}
                                                onChange={(e) => handleChangeContactPerson(item.id, e)}
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
                              id="bankDetails"
                              name="bankDetails"
                              // {...getFieldProps("bankDetails")}
                              // errors={errors.bankDetails && touched.bankDetails}
                              // message={errors.bankDetails}
                              onChange={handleBankDetailsUpload}
                           />
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
                                 id="agreementDetails"
                                 name="agreementDetails"
                                 // {...getFieldProps("agreementDetails")}
                                 // errors={errors.agreementDetails && touched.agreementDetails}
                                 // message={errors.agreementDetails} 
                                 onChange={handleAgreementDetailsUpload}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-3 text-center">
                  <button className="btn btn-primary px-4 py-3" type="submit" onClick={handleSubmit}>
                     <h5 className="mb-0 text-uppercase">Submit</h5>
                  </button>
                  <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                     <h5 className="mb-0 text-uppercase">reset</h5>
                  </button>
               </div>
            </Form>
         </FormikProvider>
      </div>
   )
}

export default ContractorMasterAdd
