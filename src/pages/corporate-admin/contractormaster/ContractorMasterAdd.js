import React, { useState } from 'react'
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import CustomFileUpload from '../../../components/common/CustomFileUpload/CustomFileUpload';
import MultipleFileUpload from '../../../components/common/MultipleFileUpload/MultipleFileUpload';
import MultiSelectDropdown from '../../../components/common/MultiSelectDropdown/MultiSelectDropdown';
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomTextArea from '../../../components/common/CustomTextArea/CustomTextArea';
import { FormikProvider, Form, useFormik } from 'formik';
import * as yup from "yup";
import { addContractorMasterAsync } from '../../../redux/features/contractorMasterAddSlice';
import { useDispatch } from 'react-redux';

const ContractorMasterAdd = () => {
   const [addContact, setAddContact] = useState([""]);
   const [addEmail, setAddEmail] = useState([""]);
   const dispatch = useDispatch()
   const [gstUpload,setGstUpload]=useState('')

   const handleAddContact = () => {
      setAddContact([...addContact, ""]);
   };
   const handleAddEmail = () => {
      setAddEmail([...addEmail, ""]);
   };

   const handleRemoveContact = (index) => {
      const updatedContacts = [...addContact];
      updatedContacts.splice(index, 1);
      setAddContact(updatedContacts);
   };

   const handleContractor = async (formData) => {
      const data = {
         name: formData?.contractorname,
         location: formData?.location,
         gst_no: formData?.gstNumber,
         address: formData?.address,
         gst_document: formData?.gstUpload,
         mobile: formData?.vendorMobile,
         contact_person_name: formData?.contactPerson,
         email: formData?.vendorEmail,
         account_no: formData?.AccountNumber,
         bank_name: formData?.bankName,
         ifsc_code: formData?.ifscCode,
         account_holder_name: formData?.accountHolderName,
         bank_document: formData?.bankDetails,
         agreement_details: formData?.agreementDetails,
         model_id: 9,
         action_id: 1,
      }
      dispatch(addContractorMasterAsync(data))
      // navigate('/user/user-List')
   }

   const contractorMasterAddSchema = yup.object().shape({
      ContractorName: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      location: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      gstNumber: yup
         .string()
         .min(1, "Too Short!")
         .max(15, "Too Long!")
         .required("Required"),

      address: yup
         .string()
         .min(2, "Too Short!")
         .max(100, "Too Long!")
         .required("Required"),

      gstUpload: yup.mixed().required('required')
         .test('fileFormat', value => {
            if (value) {
               const supportedFormats = ['jpeg', 'pdf', 'jpg', 'png'];
               return supportedFormats.includes(value.name.split('.').pop());
            }
            return true;
         })
         .test('fileSize', value => {
            if (value) {
               return value.size <= 3145728;
            }
            return true;
         }),

      vendorMobile: yup
         .string()
         .min(9, "Too Short!")
         .max(10, "Too Long!")
         .required("Required"),

      contactPerson: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      vendorEmail: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      AccountNumber: yup
         .string()
         .min(9, "Too Short!")
         .max(20, "Too Long!")
         .required("Required"),

      bankName: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      ifscCode: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      accountHolderName: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      bankDetails: yup.mixed().required('required')
         .test('fileFormat', value => {
            if (value) {
               const supportedFormats = ['jpeg', 'pdf', 'jpg', 'png'];
               return supportedFormats.includes(value.name.split('.').pop());
            }
            return true;
         })
         .test('fileSize', value => {
            if (value) {
               return value.size <= 3145728;
            }
            return true;
         }),

      agreementDetails: yup.mixed().required('required')
         .test('fileFormat', value => {
            if (value) {
               const supportedFormats = ['jpeg', 'pdf', 'jpg', 'png'];
               return supportedFormats.includes(value.name.split('.').pop());
            }
            return true;
         })
         .test('fileSize', value => {
            if (value) {
               return value.size <= 3145728;
            }
            return true;
         }),

   });

   const formik = useFormik({
      initialValues: {
         contractorname: '',
         location: '',
         gstNumber: '',
         address: '',
         gstUpload: '',
         vendorMobile: '',
         contactPerson: '',
         vendorEmail: '',
         AccountNumber: '',
         bankName: '',
         ifscCode: '',
         accountHolderName: '',
         bankDetails: '',
         agreementDetails: '',
      },
      validationSchema: contractorMasterAddSchema,
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
                                    id="#contractorname"
                                    name="contractorname"
                                    placeholder="E.g contractor"
                                    {...getFieldProps("contractorname")}
                                    errors={errors.contractorname && touched.contractorname}
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
                                    id="gstNumber"
                                    name="gstNumber"
                                    placeholder="Enter GST Number"
                                    {...getFieldProps("gstNumber")}
                                    errors={errors.gstNumber && touched.gstNumber}
                                    message={"ERROR"}
                                 />
                              </div>

                              <div className="col-lg-4">
                                 <label className="text-bold">GST Document <span className='text-danger'>*</span></label>
                                 <CustomFileUpload
                                    label="GST Details"
                                    id="gstUpload"
                                    name="gstUpload"
                                    {...getFieldProps("gstUpload")}
                                    errors={errors.gstUpload && touched.gstUpload}
                                    message={"ERROR"}
                                    onChange={(e)=>setGstUpload(e)} />
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
                                                inputType="number"
                                                id="#contactPerson"
                                                name="contactPerson"
                                                placeholder="Enter Contact Person Name."
                                                value={contact}
                                                {...getFieldProps("contactPerson")}
                                                errors={errors.contactPerson && touched.contactPerson}
                                                message={"ERROR"}
                                             />
                                          </div>
                                          <div className="col-12 col-sm-12 col-md- col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Mobile No"
                                                inputType="number"
                                                id="#vendorMobile"
                                                name="vendorMobile"
                                                placeholder="Enter Contact Person Mobile No."
                                                value={contact}
                                                {...getFieldProps("vendorMobile")}
                                                errors={errors.vendorMobile && touched.vendorMobile}
                                                message={"ERROR"}
                                             />
                                          </div>
                                          <div className="col-12 col-sm-12 col-md- col-lg-4">
                                             <CustomInput
                                                require={require}
                                                label="Email Id"
                                                inputType="text"
                                                id="#vendorEmail"
                                                name="vendorEmail"
                                                placeholder="Enter Contact Person Email"
                                                value={email}
                                                {...getFieldProps("vendorEmail")}
                                                errors={errors.vendorEmail && touched.vendorEmail}
                                                message={"ERROR"}
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
                              id="AccountNumber"
                              name="AccountNumber"
                              placeholder="Enter Account Number"
                              {...getFieldProps("AccountNumber")}
                              errors={errors.AccountNumber && touched.AccountNumber}
                              message={"ERROR"}
                           />
                        </div>
                        <div className="col-lg-4">
                           <CustomInput
                              require={require}
                              label="Bank name"
                              id="bankName"
                              name="bankName"
                              placeholder="Enter Bank Name"
                              {...getFieldProps("bankName")}
                              errors={errors.bankName && touched.bankName}
                              message={"ERROR"}
                           />
                        </div>
                        <div className="col-lg-4">
                           <CustomInput
                              require={require}
                              label="IFSC Code"
                              id="ifscCode"
                              name="ifscCode"
                              placeholder="Enter IFSC Code"
                              {...getFieldProps("ifscCode")}
                              errors={errors.ifscCode && touched.ifscCode}
                              message={"ERROR"}
                           />
                        </div>

                        <div className="col-lg-4">
                           <CustomInput
                              require={require}
                              label="Account Holder Name"
                              id="accountHolderName"
                              name="accountHolderName"
                              placeholder="Enter Account Holder name"
                              {...getFieldProps("accountHolderName")}
                              errors={errors.accountHolderName && touched.accountHolderName}
                              message={"ERROR"}
                           />
                        </div>
                        <div className="col-lg-4">
                           <label className="text-bold">Bank Document<span className='text-danger'>*</span></label>
                           <CustomFileUpload
                              label="Bank Details"
                              id="bankDetails"
                              name="bankDetails"
                              {...getFieldProps("bankDetails")}
                              errors={errors.bankDetails && touched.bankDetails}
                              message={"ERROR"}
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
                              <MultipleFileUpload
                                 label="Agreement Details"
                                 id="agreementDetails"
                                 name="agreementDetails"
                                 {...getFieldProps("agreementDetails")}
                                 errors={errors.agreementDetails && touched.agreementDetails}
                                 message={"ERROR"} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-3 text-center">
                  <button className="btn btn-primary px-4 py-3" type="submit" onClick={handleContractor()}>
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
