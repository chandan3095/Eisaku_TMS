import React, { useState } from 'react'
import CustomInput from '../../components/common/CustomInput/CustomInput'
import logo from '../../assets/images/logo.png'
import { Form, FormikProvider, useFormik } from 'formik'
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   // const [isLoading, setIsLoading]= useState(false)
   const navigate= useNavigate()

   const loginSchema = yup.object().shape({
      mobileNo: yup
         .string()
         .min(9, 'Too Short')
         .max(10, 'Too long')
         .required('Required'),

      password: yup
         .string()
         .min(6, "Too Short")
         .max(50, 'Too Long')
         .required('Required'),
   })

   const handleLogin = async (formData) => {
      console.log(formData);
      try{
         const response = await axios.post('https://webideasolution.in/eisakutms/public/api/login',{
            mobile: formData.mobileNo,
            password: formData.password
         })
         if (response.data.statusCode === 200){
            navigate('/')
         }else{
            console.log("ERROR LOGIN");
         }
      }catch(error){
         console.log(error);
      }
   }

   const formik = useFormik({
      initialValues: {
         mobileNo: '',
         password: ''
      },
      validationSchema: loginSchema,
      onSubmit: handleLogin
   })

   const { errors, getFieldProps, touched, handleSubmit, resetForm } = formik;

   return (
      <div className="login-form d-flex align-items-center justify-content-center" style={{ height: '75vh' }}>
         <div className="container text-center">
            <div className="card card-primary position-relative mt-5" style={{ width: '35rem', margin: 'auto' }}>
               <div className="text-center position-absolute" style={{ top: '-50px', left: '50%', transform: 'translate(-50%)' }}>
                  <img src={logo} alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8', width: '80px' }} />
                  <h3 className='pt-3'>Login</h3>
               </div>
               <FormikProvider value={formik}>
                  <Form className='needs-validation' noValidate>
                     <div className="card-body mt-5 pt-5">
                        <div className="form-group text-left">
                           <CustomInput label="Mobile Number"
                              name="mobileNo"
                              id="#mobileNo"
                              inputType="number"
                              placeholder="E.g 9876541235"
                              {...getFieldProps('mobileNo')}
                              errors={errors.mobileNo && touched.mobileNo}
                              message={"Mobile Number Must Be 10 Digits"} />
                        </div>
                        <div className="form-group text-left">
                           <CustomInput label="Password"
                              name="password"
                              id="#password"
                              inputType="password"
                              placeholder="********"
                              {...getFieldProps('password')}
                              errors={errors.password && touched.password}
                              message={'password not valid'} />
                        </div>
                     </div>
                     <div className="mb-3 d-flex justify-content-center">
                        <button type="button" className="btn btn-info btn-lg px-5" onClick={handleSubmit}>Submit</button>
                     </div>
                  </Form>
               </FormikProvider>
            </div>
         </div>
      </div>

   )
}

export default Login
