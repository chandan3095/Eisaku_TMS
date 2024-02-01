import React, { useEffect, useState } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContactPersonDetailsAsync,
  listVendorMasterAsync,
} from "../../../redux/features/vendorMaster";

const VendorMasterView = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState({}); // State to manage toggle
  const listFormData = useSelector((state) => state.vendorMaster.dataList);
  const vendorMaster = useSelector((state) => state.vendorMaster);
  const vendorMasterList = vendorMaster?.dataList;
  const contactPersonData = useSelector((state) => state.contactPersonData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVendorMasterAsync());
  }, []);

  const toggleSwitch = () => {
    setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
    console.log(isChecked);
  };
  const columns = [
    {
      name: "Vendor Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location_master.name,
    },
    // {
    //   name: "Contact Person Name",
    //   selector: (row) =>
    // },
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

  const data = [
    {
      id: 1,
      vendorName: "A Vendor",
      location: "Kolkata",
      contactPersonName: "Paityn Harris",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/vendor-master/add-form")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="vendor1"
          />
        </>
      ),
    },
    {
      id: 2,
      vendorName: "B Vendor",
      location: "Kolkata",
      contactPersonName: "Paityn Harris",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/vendor-master/add-form")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="vendor2"
          />
        </>
      ),
    },
    {
      id: 3,
      vendorName: "C Vendor",
      location: "Kolkata",
      contactPersonName: "Paityn Harris",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/vendor-master/add-form")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="vendor3"
          />
        </>
      ),
    },
    {
      id: 4,
      vendorName: "D Vendor",
      location: "Kolkata",
      contactPersonName: "Paityn Harris",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/vendor-master/add-form")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="vendor4"
          />
        </>
      ),
    },
    {
      id: 5,
      vendorName: "E Vendor",
      location: "Kolkata",
      contactPersonName: "Paityn Harris",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/vendor-master/add-form")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="vendor5"
          />
        </>
      ),
    },
    {
      id: 6,
      vendorName: "F Vendor",
      location: "Kolkata",
      contactPersonName: "Paityn Harris",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/vendor-master/add-form")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="vendor6"
          />
        </>
      ),
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

  const [records, setRecords] = useState(data);

  const handleFilter = (e) => {
    const searchText = e.target.value.toLowerCase();
    const newData = data.filter((row) => {
      return (
        row.vendorName.toLowerCase().includes(searchText) ||
        row.contactPersonName.toLowerCase().includes(searchText) ||
        row.location.toLowerCase().includes(searchText)
      );
    });
    setRecords(newData);
  };
  return (
    <div>
      <BodyHeader title="Vendor Master List" />

      <div className="px-3">
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
          data={vendorMasterList}
          sortable
          fixedHeader
          pagination
          responsive
          striped={true}
          borderColor="#000000"
          customStyles={customStyles}
        ></DataTable>
      </div>
    </div>
  );
};

export default VendorMasterView;
