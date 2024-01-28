import { FormikProvider, useFormik } from 'formik';
import React from 'react'
import { Form } from 'react-router-dom';
import CustomInput from '../CustomInput/CustomInput';

const ContactDetailsAddFrom = (handleAddContact) => {
   
   return (
      <div>
         <FormikProvider >
            <Form className="p-3 shadow-lg">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="card card-primary">
                        <div className="card-body">
                           <div className="row">
                              <div className="col-12">
                                 <div className="col-12 col-sm-12 col-md- col-lg-4">
                                    <CustomInput
                                       require={require}
                                       label="Contact Person Name"
                                       inputType="text"
                                       id="#contact_person_name"
                                       name="contact_person_name"
                                       placeholder="Enter Contact Person Name."
                                       onChange={(e) => handleAddContact(e)}
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
                                       onChange={(e) => handleAddContact(e)}
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
                                       onChange={(e) => handleAddContact(e)}
                                       // {...getFieldProps("email")}
                                       // errors={errors.email && touched.email}
                                       // message={"ERROR"}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Form>
         </FormikProvider>
      </div >
   )
}

export default ContactDetailsAddFrom
