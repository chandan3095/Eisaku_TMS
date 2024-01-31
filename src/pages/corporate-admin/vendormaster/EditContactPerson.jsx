import React, { useEffect, useState } from "react";
import CustomModal from "../../../components/common/Modal";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { contactPersonDetailsApiCall } from "../../../Api/api";
import {
  fetchContactPersonDetailsAsync,
  updateContactAsync,
} from "../../../redux/features/vendorMaster";
import CustomInput from "../../../components/common/CustomInput/CustomInput";

const EditContactPerson = ({ data, vendorId }) => {
  const [showModal, setshowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [loading, setLoading] = useState(true);

  const contactPersonDetials = useSelector(
    (state) => state.vendorMaster.contactPersonData
  );

  const [formData, setformData] = useState({
    name: "",
    email: "",
    mobile: "",
    id: "",
  });

  console.log(contactPersonDetials);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setshowModal(false);
  };

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev); // Toggle the state
  };

  const editHandler = (data) => {
    console.log({ data });
    setshowModal(true);
    setformData({
      name: data?.name,
      email: data?.email,
      mobile: data?.mobile,
      id: data?.id,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ [name]: value }));
  };
  const updateHandler = () => {
    const ard = {
      contact_person_name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
    };
    const newData = new FormData();
    newData.append("vendor_master_id", vendorId);
    newData.append("contact_person_detail_id", formData.id);
    Object.keys(ard).forEach((key, index) => {
      newData.append(`${key}[]`, ard[key]);
    });
    console.log({ formData });
    dispatch(updateContactAsync(newData));
  };

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
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => editHandler(row)}
            >
              Edit
            </button>
            <CustomToggleSwitch
              checked={isChecked}
              onChange={toggleSwitch}
              id="vendor1"
            />
          </>
        );
      },
    },
  ];

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

  return (
    <>
      <CustomModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        onSubmit={updateHandler}
        child={
          <>
            <div className="">
              <CustomInput
                require={require}
                label="Contact Person Name"
                inputType="text"
                id="#vendorMobile"
                name="name"
                placeholder="Enter Contact Person Name."
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <CustomInput
                inputType="number"
                // require={require}
                label="Mobile No"
                id="#vendorMobile"
                name="mobile"
                placeholder="Enter Contact Person Mobile No."
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <CustomInput
                require={require}
                label="Email Id"
                inputType="text"
                id="#vendorEmail"
                name="email"
                placeholder="Enter Contact Person Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </>
        }
      />
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

export default EditContactPerson;
