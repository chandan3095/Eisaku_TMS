import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../components/common/CustomDropdown/CustomDropdown";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { Roles } from '../../constansts/LocalData'
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync } from "../../redux/features/addUserSlice";
import axios from "axios";
import { ROLES } from "../../constansts/Roles";
import { useNavigate } from "react-router-dom";

function AddUser() {
   const [selectedOption, setSelectedOption] = useState(null);
   const [parentId, setParentId] = useState()
   console.log('API Response',parentId);

   const dispatch = useDispatch()
   console.log({ selectedOption });
   const navigate = useNavigate()

   // const parent_ids = useSelector((state) => state?.getParentIdAsync)
   // console.log(parent_ids);


   // const BASE_URL = 'https://webideasolution.in/eisakutms/public/api/'

   const handleUser = async (formData) => {
      console.log(formData);
      const data = {
         name: formData.userName,
         mobile: formData.mobile,
         role_id: formData.userType,
         password: formData.password,
         c_password: formData.c_password,
         address: "kolkata, kolkata",
         model_id: 1,
         action_id: 1,
         parent_user_ids: [formData.parent_user_ids]
      }
      dispatch(addUserAsync(data))
      navigate('/user/user-List')
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
         password: "",
         c_password: "",
         parentId: ""
      },
      validationSchema: userAddSchema,
      onSubmit: handleUser
   });

   const { errors, touched, getFieldProps, handleSubmit, resetForm } = formik;
   const parentApiUrl = (slug) => `https://webideasolution.in/eisakutms/public/api/user/parent_user/${slug}?model_id=1&action_id=3`;


   const handleParentId = (e) => {
      formik.setFieldValue("userType", e[0].value)
      setSelectedOption(e[0].value)
      const slug = e[0].value === ROLES.manager ? 'manager' : e[0].value === ROLES.supervisor ? 'supervisor' : null;
      console.log('slug', slug);
      axios.get(parentApiUrl(slug),{
         headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
         }
      })
         .then(response => {
            console.log('API Response in axios:', response.data.res);
            setParentId(response.data.res)
         })
         .catch(error => {
            console.error('API Error:', error);
         });
   }

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
                                 optionData={Roles}
                                 {...getFieldProps("userType")}
                                 onChange={(e) => handleParentId (e)}
                              />
                           </div>

                           {(selectedOption === 2 || selectedOption === 4) && (
                              <div className="form-group">
                                 <label className="text-bold">{selectedOption === 1 ? 'Management' : 'Manager'}</label>
                                 <CustomDropdown
                                    selected=""
                                    name="parentId"
                                    optionData={parentId?.map?.((key,index)=>{
                                       return {
                                          label: key.name,
                                          value: key.id
                                       }
                                    })}
                                    {...getFieldProps("parentId")}
                                    onChange={(e) => {
                                       formik.setFieldValue("parentId", e[0].value)
                                       setSelectedOption(e[0].value)
                                    }}
                                 />
                              </div>
                           )}

                           <div className="form-group">
                              <CustomInput label="Password"
                                 name="password"
                                 id="#password"
                                 inputType="text"
                                 placeholder="********"
                                 {...getFieldProps("password")}
                                 errors={errors.password && touched.password}
                              />
                           </div>

                           <div className="form-group">
                              <CustomInput label="Confirm Password"
                                 name="c_password"
                                 id="#c_password"
                                 inputType="text"
                                 placeholder="********"
                                 {...getFieldProps("c_password")}
                                 errors={errors.c_password && touched.c_password}
                              />
                           </div>
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
