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
  const locationMasterList = useSelector(
    (state) => state.locationMasterListSlice
  );
  // const [userRecords, setUserRecords] = useState(userList)
  console.log(locationMasterList, "000");

  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  useEffect(() => {
    dispatch(locationMasterListAsync());
  }, []);

  useEffect(() => {
    setRecords(data);
    return () => {
      setRecords([]);
    };
  }, [locationMasterList]);

  // console.log(records, "records");
  const [isChecked, setIsChecked] = useState(); // State to manage toggle
  const toggleSwitch = (index) => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const columns = [
    {
      name: "Location Person Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const data =
    locationMasterList?.data?.res?.length > 0
      ? locationMasterList.data.res.map?.((item, index) => {
          const isChecked = parseInt(item.is_active);
          let editUserId = item.id;
          let formType = "Edit";
          // console.log(item, "85858");

          return {
            ...item,
            action: (
              <>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() =>
                    navigate(`/location-master/${formType}/${editUserId}`)
                  }
                >
                  Edit
                </button>
                <CustomToggleSwitch
                  checked={isChecked}
                  onChange={() => toggleSwitch(index)}
                  id={index}
                />
              </>
            ),
          };
        })
      : [];

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
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(searchText);
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
          data={data}
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
}

export default LocationMasterView;
