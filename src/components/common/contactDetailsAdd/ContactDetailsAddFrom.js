import { FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';

const ContactDetailsAddFrom = ({ onSubmit }) => {
   const [contactData, setContactData] = useState({
      contact_person_name: '',
      mobile: '',
      email: '',
   })
   console.log(contactData);
   const handleContactAddModal = (e) => {

   }

   const formik = useFormik({
      initialValues: {
         mobile: '',
         contact_person_name: '',
         email: '',
      },
      // validationSchema,
      onSubmit: handleContactAddModal
   });
   const { errors, touched, getFieldProps, handleSubmit, resetForm } = formik;

   return (
      <div>
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
                                    placeholder="Enter Contact Person Name."
                                    onChange={(e) => setContactData(contactData.contact_person_name = e.target.value)}
                                    {...getFieldProps("contact_person_name")}
                                    errors={errors.contact_person_name && touched.contact_person_name}
                                    message={"ERROR"}
                                 />
                              </div>

                              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                 <CustomInput
                                    require={require}
                                    label="Mobile No"
                                    inputType="number"
                                    id="#mobile"
                                    name="mobile"
                                    placeholder="Enter Contact Person Mobile No."
                                    onChange={(e) => setContactData(contactData.mobile = e.target.value)}
                                    {...getFieldProps("mobile")}
                                    errors={errors.mobile && touched.mobile}
                                    message={"ERROR"}
                                 />
                              </div>

                              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                 <CustomInput
                                    require={require}
                                    label="Email Id"
                                    inputType="text"
                                    id="#email"
                                    name="email"
                                    placeholder="Enter Contact Person Email"
                                    onChange={(e) => setContactData(contactData.email = e.target.value)}
                                    {...getFieldProps("email")}
                                    errors={errors.email && touched.email}
                                    message={"ERROR"}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </FormikProvider>
      </div >
   )
}

export default ContactDetailsAddFrom
