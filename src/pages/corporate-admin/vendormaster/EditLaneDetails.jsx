import React, { useEffect, useState } from "react";
import CustomModal from "../../../components/common/Modal";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const EditLaneDetails = ({ data }) => {
  const [showModal, setshowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setshowModal(false);
  };

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev); // Toggle the state
  };

  const editHandler = (data) => {
    console.log(data);
  };

  const columns = [
    {
      name: "Express Mode Rate Additional",
      selector: (row) => row.cust_express_mode_rate_additional,
      sortable: true,
    },
    {
      name: "Super Express Mode Rate Additional",
      selector: (row) => row.cust_super_express_mode_rate_additional,
    },
    {
      name: "Detention Rate Additional",
      selector: (row) => row.cust_detention_rate_additional,
    },
    {
      name: "Multiple Loading Location Rate Additional",
      selector: (row) => row.cust_multiple_loading_location_rate_additional,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <button
              className="btn btn-primary mx-2"
              onClick={() => navigate("/vendor-master/edit/" + row.id)}
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
      <CustomModal showModal={showModal} handleCloseModal={handleCloseModal} />
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

export default EditLaneDetails;
