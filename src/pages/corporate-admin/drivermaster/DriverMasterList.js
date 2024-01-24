import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDriveMaster } from "../../../reducer/DriveMasterReducer";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import { listDriverMasterAsync } from "../../../redux/features/driverMaster";

const DriverMasterList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listFormData = useSelector((state) => state.driveMaster);
  const driverMaster = useSelector((state) => state.driverMaster);
  const driverMasterList = driverMaster?.dataList;

  //   console.log({ driverMaster });

  const [records, setRecords] = useState(listFormData.driveMasterList);
  console.log(listFormData);

  useEffect(() => {
    dispatch(listDriverMasterAsync());
  }, []);

  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const toggleSwitch = () => {
    setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
    console.log(isChecked);
  };

  const handleUpdate = (drivingLicense) => {
    navigate(`/driver-master/edit/${drivingLicense}`);
  };

  const columns = [
    {
      name: "Driver Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "License Number",
      selector: (row) => row.driver_license,
    },
    {
      name: "License Exp Date",
      selector: (row) => row.license_expiry_date,
    },
    {
      name: "Payroll Type",
      selector: (row) => row.payroll,
    },
    {
      name: "Action",
      selector: (row) => {
        console.log({ row });
        return (
          <>
            <button
              className="btn btn-primary mx-2"
              onClick={() => navigate(`/driver-master/edit/${row?.id}`)}
            >
              Edit
            </button>
            {/* <button className="btn btn-danger mx-2" onClick={() => handleDelete(row.drivingLicense)}> Delete</button> */}
            <CustomToggleSwitch
              checked={isChecked}
              onChange={toggleSwitch}
              id="driver1"
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

  const handleFilter = (e) => {
    const searchText = e.target.value.toLowerCase();
    const newData = listFormData.driveMasterList.filter((row) => {
      return (
        row.driverName.toLowerCase().includes(searchText) ||
        row.licenseNumber.toLowerCase().includes(searchText) ||
        row.licenseExpDate.toLowerCase().includes(searchText)
      );
    });
    setRecords(newData);
  };
  return (
    <div>
      <BodyHeader title="Driver Master List" />

      <div className=" d-flex justify-content-between">
        <h3>User's List</h3>
        <CustomInput
          inputType="text"
          placeholder="Search..."
          id="search"
          onChange={(e) => handleFilter(e)}
        />
      </div>
      <DataTable
        columns={columns}
        data={driverMasterList}
        sortable
        fixedHeader
        pagination
        responsive
        striped={true}
        borderColor="#000000"
        customStyles={customStyles}
      ></DataTable>
    </div>
  );
};

export default DriverMasterList;
