import React, { useEffect, useState } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import { useDispatch, useSelector } from "react-redux";
import { listLaneMasterAsync } from "../../../redux/features/laneMaster";

const LaneMasterView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const laneMaster = useSelector((state) => state.laneMaster);

  const laneMasterData = laneMaster?.dataList;

  console.log({ laneMasterData });

  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const toggleSwitch = () => {
    setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
    console.log(isChecked);
  };
  const columns = [
    {
      name: "Lane Name",
      selector: (row) => row?.lane_master?.name,
      sortable: true,
    },
    {
      name: "Vendor Name",
      selector: (row) => row?.vendor_master?.name,
    },
    //  {
    //    name: "Origin",
    //    selector: (row) => row.origin,
    //  },
    //  {
    //    name: "Vehicle Type",
    //    selector: (row) => row.vehicleType,
    //  },
    {
      name: "Customer Name",
      selector: (row) => row?.lane_master?.customer_master?.name,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = laneMasterData?.map?.((item) => ({
    ...item,
    action: (
      <>
        <button
          className="btn btn-primary mx-2"
          onClick={() => navigate("/lane-master/add-form")}
        >
          Edit
        </button>
        <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="lane1" />
      </>
    ),
  }));

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
        row.laneName.toLowerCase().includes(searchText) ||
        row.vendorName.toLowerCase().includes(searchText) ||
        row.customerName.toLowerCase().includes(searchText)
      );
    });
    setRecords(newData);
  };

  useEffect(() => {
    dispatch(listLaneMasterAsync());
  }, []);

  return (
    <div>
      <BodyHeader title="Lane Master List" />

      <div className="px-3">
        <div className=" d-flex justify-content-between">
          {/* <h3>User's List</h3> */}
          <div></div>
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
      </div>
    </div>
  );
};

export default LaneMasterView;
