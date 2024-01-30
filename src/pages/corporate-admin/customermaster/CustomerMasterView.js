import React, { useEffect, useState } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import { useDispatch, useSelector } from "react-redux";
import { listCustomerMasterAsync } from "../../../redux/features/customerMaster";

const CustomerMasterView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customerMaster = useSelector((state) => state.customerMaster);

  console.log({ customerMaster });

  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const toggleSwitch = () => {
    setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
    console.log(isChecked);
  };

  useEffect(() => {
    dispatch(listCustomerMasterAsync());
  }, [dispatch]);

  const columns = [
    {
      name: "Customer Name",
      selector: (row) => row.name,
      sortable: true,
    },
    //  {
    //    name: "Mobile Number",
    //    selector: (row) => row.mobileNumber,
    //  },
    //  {
    //    name: "Address",
    //    selector: (row) => row.address,
    //  },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = customerMaster?.dataList?.map?.((item) => ({
    ...item,
    action: (
      <>
        <button
          className="btn btn-primary mx-2"
          onClick={() => navigate(`/customer-master/edit/${item?.id}`)}
        >
          Edit
        </button>
        <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="csutomer6" />
      </>
    ),
  }));
  //   [
  //     {
  //       id: 6,
  //       customerName: "F customer",
  //       mobileNumber: "811344934",
  //       address: "8842 Monroe Street, Kolkata, West Bengal, India 700047",
  //       action: (
  //         <>
  //           <button
  //             className="btn btn-primary mx-2"
  //             onClick={() => navigate("/customer-master/add-form")}
  //           >
  //             Edit
  //           </button>
  //           <CustomToggleSwitch
  //             checked={isChecked}
  //             onChange={toggleSwitch}
  //             id="csutomer6"
  //           />
  //         </>
  //       ),
  //     },
  //   ];

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
      return row.customerName.toLowerCase().includes(searchText);
    });
    setRecords(newData);
  };
  return (
    <div>
      <BodyHeader title="Customer Master List" />

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
};

export default CustomerMasterView;
