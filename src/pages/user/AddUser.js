import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../components/common/CustomDropdown/CustomDropdown";
import MultiSelectDropdown from "../../components/common/MultiSelectDropdown/MultiSelectDropdown";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import selectOptionData from "../../constansts/LocalData";

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

  const userAddSchema = yup.object().shape({
    userName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    mobile: yup
      .number()
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
                      errors={true}
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
                     optionData={selectOptionData}
                      {...getFieldProps("userType")}
                    />
                  </div>

                  {getFieldProps("userType").value === "supervisor" && (
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
                  )}
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
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
