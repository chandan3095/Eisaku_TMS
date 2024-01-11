import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import DataTable from "react-data-table-component";

function FleetMasterList() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const toggleSwitch = () => {
    setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
    console.log(isChecked);
  };
  const columns = [
    {
      name: "Vehicle No",
      selector: (row) => row.vehicleNo,
      sortable: true,
    },
    {
      name: "Chasis No",
      selector: (row) => row.chasisNo,
    },
    {
      name: "Engine No",
      selector: (row) => row.engineNo,
    },
    {
      name: "Vehicle Owner Name",
      selector: (row) => row.vehicleOwnerName,
    },
    {
        name: "Action",
        selector: (row) => row.action,
    }
  ];

  const data = [
    {
      id: 1,
      vehicleNo: "ABC123",
      chasisNo: "WB26T086",
      engineNo: "Tata12536985",
      vehicleOwnerName: "Test",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/fleet-master/view")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="helper1"
          />
        </>
      ),
    },
    {
      id: 2,
      vehicleNo: "ABC123",
      chasisNo: "WB26T086",
      engineNo: "Tata12536985",
      vehicleOwnerName: "Test",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/fleet-master/view")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="helper2"
          />
        </>
      ),
    },
    {
      id: 3,
      vehicleNo: "ABC123",
      chasisNo: "WB26T086",
      engineNo: "Tata12536985",
      vehicleOwnerName: "Test",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/fleet-master/view")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="helper3"
          />
        </>
      ),
    },
    {
      id: 4,
      vehicleNo: "ABC123",
      chasisNo: "WB26T086",
      engineNo: "Tata12536985",
      vehicleOwnerName: "Test",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/fleet-master/view")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="helper4"
          />
        </>
      ),
    },
    {
      id: 5,
      vehicleNo: "ABC123",
      chasisNo: "WB26T086",
      engineNo: "Tata12536985",
      vehicleOwnerName: "Test",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/fleet-master/view")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="helper5"
          />
        </>
      ),
    },
    {
      id: 6,
      vehicleNo: "ABC123",
      chasisNo: "WB26T086",
      engineNo: "Tata12536985",
      vehicleOwnerName: "Test",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/fleet-master/view")}
          >
            Edit
          </button>
          <CustomToggleSwitch
            checked={isChecked}
            onChange={toggleSwitch}
            id="helper6"
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
        row.vehicleNo.toLowerCase().includes(searchText) ||
        row.engineNo.toLowerCase().includes(searchText)
      );
    });
    setRecords(newData);
  };
  return (
    <div>
      <BodyHeader title="Fleet Master List" />

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
}

export default FleetMasterList;
