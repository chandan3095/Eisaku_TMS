import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../components/common/CustomDropdown/CustomDropdown";
import MultiSelectDropdown from "../../components/common/MultiSelectDropdown/MultiSelectDropdown";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import {Roles} from '../../constansts/LocalData'
import axios from "axios";

function AddUser() {
   const [selectedOption, setSelectedOption] = useState(null);
   const [showManagerDropdown, setShowManagerDropdown] = useState(null);
   const [showManagementDropdown, setShowManagementDropdown] = useState(null);

   const handleRolesDropdown = (value) => {
      setSelectedOption(value);
      console.log(value);
      setShowManagerDropdown(null);
      setShowManagementDropdown(null);
   };

   const handlemanagerDropdown = (value) => {
      setShowManagerDropdown(value);
   };

   const handlemanagementDropdown = (value) => {
      setShowManagementDropdown(value);
   };

   const BASE_URL = 'https://webideasolution.in/eisakutms/public/api/'

   const handleUser=async(formData)=>{
      console.log(formData);

      try {
         const response = await axios.post(`${BASE_URL}user/add`, {
            name: formData.userName,
            mobile: formData.mobile,
            password: 'Eisaku@123',
            c_password: 'Eisaku@123',
            role_id: formData.userType,
            model_id: '1',
            action_id: '1',
            address: "kolkata, kolkata",
         },{
            headers: {
               Authorization: `Bearer 40|zQkwidEJm3RoSHb45HavI72UGViwXl8gsz4Fepgc395e36f3`
            }
         })
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   }  

   const userAddSchema = yup.object().shape({
      userName: yup
         .string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("Required"),

      mobile: yup
         .string()
         .min(9, "Too Short!")
         .max(10, "Too Long!")
         .required("Required"),

      userType: yup.string().required("Required"),
   });

   const formik = useFormik({
      initialValues: {
         userName: "",
         mobile: "",
         userType: "",
      },
      validationSchema: userAddSchema,
      onSubmit: handleUser
   });

   const { errors, touched, getFieldProps, handleSubmit, resetForm } = formik;

   return (
      <>
         <div
            className="addUser-form d-flex align-items-center"
            style={{ height: "100vh" }}
         >
            <div className="container">
               <h1 className="mb-4 text-center">Add User</h1>
               <div className="card card-primary ">
                  <div className="card-header">
                     <h3 className="card-title text-center">Add User</h3>
                  </div>
                  <FormikProvider value={formik}>
                     <Form className="needs-validation" noValidate>
                        <div className="card-body">
                           <div className="form-group">
                              <CustomInput
                                 label="Enter Name"
                                 name="userName"
                                 id="#userName"
                                 inputType="text"
                                 placeholder="Enter User Name"
                                 {...getFieldProps("userName")}
                                 errors={errors.userName && touched.userName}
                                 message={"ERROR"}
                              />
                           </div>

                           <div className="form-group">
                              <CustomInput
                                 label="Enter Mobile No."
                                 name="mobile"
                                 id="#mobile"
                                 inputType="text"
                                 placeholder="Enter Mobile No."
                                 {...getFieldProps("mobile")}
                                 errors={errors.mobile && touched.mobile}
                              />
                           </div>

                           <div className="form-group">
                              <label className="text-bold">User Type</label>
                              <CustomDropdown
                                 selected=""
                                 name="userType"
                                 //  optionData={[
                                 //    "Select",
                                 //    "supervisor",
                                 //    "corporate admin",
                                 //    "management",
                                 //    "manager",
                                 //  ]}
                                 optionData={Roles}
                                 {...getFieldProps("userType")}
                                 onChange={(e)=>{
                                    console.log(e)
                                    formik.setFieldValue("userType",e[0].value)
                                 }}
                              />
                           </div>

                           <div className="form-group">
                              <CustomInput label="Default Password"
                                 name="password"
                                 id="#password"
                                 inputType="text"
                                 placeholder="********"
                                 value={"Eisaku@123"}
                                 disabled={true} />
                           </div>

                           {/* {getFieldProps("userType").value === "supervisor" && (
                              <div className="form-group">
                                 <label className="text-bold">Reporting Manager</label>
                                 <MultiSelectDropdown />
                              </div>
                           )}

                           {getFieldProps("userType").value === "manager" && (
                              <div className="form-group">
                                 <label className="text-bold">Management</label>
                                 <MultiSelectDropdown
                                    options={[
                                       { value: "1", label: "Management1" },
                                       { value: "2", label: "Management2" },
                                       { value: "3", label: "Management3" },
                                       { value: "4", label: "Management4" },
                                    ]}
                                 />
                              </div>
                           )} */}
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                           <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                              Add User
                           </button>
                        </div>
                     </Form>
                  </FormikProvider>
               </div>
            </div>
         </div>
      </>
   );
}

export default AddUser;
