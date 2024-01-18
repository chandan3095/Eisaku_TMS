import { Form, FormikProvider, useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { useNavigate,useParams } from 'react-router-dom'
import CustomInput from '../../components/common/CustomInput/CustomInput'
import CustomDropdown from '../../components/common/CustomDropdown/CustomDropdown'
import { useDispatch } from 'react-redux';
import { Roles } from '../../constansts/LocalData';
import { editUserAsync } from '../../redux/features/editUserSlice';
import axios from 'axios';

function ViewUser(disabled) {
   const [selectedOption, setSelectedOption] = useState(null);
   const [parentId, setParentId] = useState()
   const [fetchedData,setFetchedData]= useState({
      userName: '',
      password: '',
      parentId: '',
      userType:'',
   })
   console.log('fetchedData',fetchedData);
   const dispatch = useDispatch()
   console.log({ selectedOption });
   const navigate = useNavigate()
   const params=useParams()


   const handleUpdateUser = async (formData) => {
      console.log(formData);
      const data = {
         id: params.id,
         name: formData.userName,
         password: formData.password,
         model_id: 1,
         action_id: 1,
         parent_user_ids: [formData.parentId],
         mobile: formData.mobile
      }
      dispatch(editUserAsync(data))
      navigate('/user/user-List')
   }

   const fetchUser = `https://webideasolution.in/eisakutms/public/api/user/fetch/${params.id}?model_id=1&action_id=3`

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(fetchUser, {headers: {
               Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')) }`
            }});
            console.log(response.data);
            setFetchedData({
               ...fetchedData,
               userName: response.data?.res?.user?.name,
               parentId: response.data?.res?.user?.parent_user_ids,
               userType: response.data?.res?.user?.role_id,
               mobile: response.data?.res?.user?.mobile
            })
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, [fetchUser, params.id]);

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
      initialValues: fetchedData,
      enableReinitialize:true,
      validationSchema: userAddSchema,
      onSubmit: handleUpdateUser
   });

   const { errors, touched, getFieldProps, handleSubmit, resetForm } = formik;
   return (
      <>
         <div
            className="addUser-form d-flex align-items-center"
            style={{ height: "100vh" }}
         >
            <div className="container">
               <h1 className="mb-4 text-center">Edit User</h1>
               <div className="card card-primary">
                  <div className="card-header">
                     <h3 className="card-title text-center">Edit User</h3>
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
                                 onChange={() =>{}}
                                 disabled={true}
                                 values={Roles.filter((item)=>item.value === getFieldProps("userType").value)}
                              />
                           </div>

                           {(selectedOption === 2 || selectedOption === 4) && (
                              <div className="form-group">
                                 <label className="text-bold">{selectedOption === 1 ? 'Management' : 'Manager'}</label>
                                 <CustomDropdown
                                    selected=""
                                    name="parentId"
                                    optionData={parentId?.map?.((key, index) => {
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
                              Update User
                           </button>
                        </div>
                     </Form>
                  </FormikProvider>
               </div>
            </div>
         </div>
      </>
   )
}

export default ViewUser