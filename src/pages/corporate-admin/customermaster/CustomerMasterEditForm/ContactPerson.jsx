import { useFormik } from "formik";
import React, { useState } from "react";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useToggleState } from "../../../../Hooks/useToggleState";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";

const customStyles = {
  table: {
    style: {
      border: "1px solid #0bc4f0", // Set border color
    },
  },
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "#0bc4f0",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "14px", // Set font size for regular cells
      border: "1px solid #0bc4f0",
    },
  },
};

const ContactPerson = ({ contactPersonList }) => {
  const [initialState, setInitialState] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
  });
  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const [isModalVisible, handleShowModal, handleCloseModal] = useToggleState();

  const toggleSwitch = () => {
    setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
    console.log(isChecked);
  };

  console.log({ contactPersonList });

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobile,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = contactPersonList?.map?.((item) => ({
    ...item,
    action: (
      <>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setInitialState({
              id: item?.id,
              name: item?.name,
              mobile: item?.mobile,
              email: item?.email,
            });
            handleShowModal();
          }}
        >
          Edit
        </button>
        <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="csutomer6" />
      </>
    ),
  }));

  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: true,
    // onSubmit: handleAddCustomerMaster,
  });

  const {
    touched,
    errors,
    values,
    getFieldProps,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = formik;

  return (
    <>
      <CustomModal
        showModal={isModalVisible}
        handleCloseModal={handleCloseModal}
        modalSize="modal-xl"
        title="Contact Person"
        onSubmit={() => {}}
        child={
          <>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Contact Person Name"
                id="contactPersonName"
                placeholder="Enter Contact Person Name"
                {...getFieldProps(`name`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Customer Mobile No"
                id="customerMobileNo"
                placeholder="Enter Customer Mobile No"
                {...getFieldProps(`mobile`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Customer Email Id"
                id="customerEmailId"
                placeholder="Enter Customer Email Id"
                {...getFieldProps(`email`)}
              />
            </div>
          </>
        }
      />
      <label className="text-bold">Contact person details</label>
      <DataTable
        columns={columns}
        data={data}
        sortable
        fixedHeader
        pagination
        responsive
        striped={true}
        borderColor="#000000"
        customStyles={customStyles}
      ></DataTable>
    </>
  );
};

export default ContactPerson;
