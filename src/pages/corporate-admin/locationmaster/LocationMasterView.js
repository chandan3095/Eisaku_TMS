// import React from 'react'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import DataTable from "react-data-table-component";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import { useDispatch, useSelector } from "react-redux";
import { locationMasterListAsync } from "../../../redux/features/location-master/listLocationMasterSlice";

function LocationMasterView() {
  const dispatch = useDispatch();
  const locationMasterList = useSelector((state) => state.locationMasterListSlice);
  // const [userRecords, setUserRecords] = useState(userList)
//   console.log(locationMasterList, "000");

  //   const navigate = useNavigate();

  useEffect(() => {
    dispatch(locationMasterListAsync());
  }, []);

  const [isChecked, setIsChecked] = useState(true); // State to manage toggle
  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  const columns = [
    {
      name: "Contact Person Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = locationMasterList.user.res.map?.((item) => {
   console.log(item, 'item');
    return {
      ...item,
      action: (
        <>
          <button className="btn btn-primary mx-2">Edit</button>
          <CustomToggleSwitch />
        </>
      ),
    };
  });

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
      <BodyHeader title="Location Master List" />
      <div className="px-3">
        <div className="d-flex justify-content-end">          
          <CustomInput
            inputType="text"
            placeholder="Search..."
            id="search"
            onChange={(e) => handleFilter(e)}
          />
        </div>
        <DataTable
          columns={columns}
          data={records}
          sortable
          fixedHeader
          pagination
          responsive
          striped={true}
          borderColor="#000000"
          customStyles={customStyles}
        ></DataTable>
        <CustomToggleSwitch
          checked={isChecked}
          onChange={toggleSwitch}
          id="helper6"
        />
      </div>
    </div>
  );
}

export default LocationMasterView;
