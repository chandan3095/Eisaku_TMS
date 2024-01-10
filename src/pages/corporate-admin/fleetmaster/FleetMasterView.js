import React, { useState } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router";
import CustomToggleSwitch from "../../../components/common/CustomToggle";

const FleetMasterView = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false); // State to manage toggle

    console.log({ isChecked });

    const toggleSwitch = (e) => {
        console.log(e, "gafigf");
        setIsChecked(e.target.checked); // Toggle the state
        //  console.log(isChecked);
    };

    const columns = [
        {
            name: "Vehicle Number",
            selector: (row) => row.vehicleNumber,
        },
        {
            name: "Vehicle Name",
            selector: (row) => row.vehicleName,
            sortable: true,
        },
        {
            name: "Vehicle Title",
            selector: (row) => row.vehicleTitle,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
        {
            name: "Active",
            selector: (row) => row.active,
        },
    ];

    const data = [
        {
            id: 1,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate("/fleet-master/add-form")}
                    >
                        Edit
                    </button>
                    {/* <CustomToggleSwitch checked={true} onChange={toggleSwitch} id="car1" /> */}
                    {/* <CustomToggleSwitch
               checked={isChecked[row.id] || false}
               onChange={() => toggleSwitch(row.id)}
            /> */}
                </>
            ),
            active: (
                <>
                    <CustomToggleSwitch
                        checked={true}
                        onChange={toggleSwitch}
                        id="car1"
                    />
                </>
            ),
        },
        {
            id: 2,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate("/fleet-master/add-form")}
                    >
                        Edit
                    </button>
                    {/* <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="car2" /> */}
                </>
            ),
            active: (
                <>
                    <CustomToggleSwitch
                        checked={isChecked}
                        onChange={toggleSwitch}
                        id="car2"
                    />
                </>
            ),
        },
        {
            id: 3,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate("/fleet-master/add-form")}
                    >
                        Edit
                    </button>
                    {/* <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="car3" /> */}
                </>
            ),
            active: (
                <>
                    <CustomToggleSwitch
                        checked={isChecked}
                        onChange={toggleSwitch}
                        id="car3"
                    />
                </>
            ),
        },
        {
            id: 4,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate("/fleet-master/add-form")}
                    >
                        Edit
                    </button>
                    {/* <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="car4" /> */}
                </>
            ),
            active: (
                <>
                    <CustomToggleSwitch
                        checked={isChecked}
                        onChange={toggleSwitch}
                        id="car4"
                    />
                </>
            ),
        },
        {
            id: 5,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate("/fleet-master/add-form")}
                    >
                        Edit
                    </button>
                    {/* <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="car5" /> */}
                </>
            ),
            active: (
                <>
                    <CustomToggleSwitch
                        checked={isChecked}
                        onChange={toggleSwitch}
                        id="car5"
                    />
                </>
            ),
        },
        {
            id: 6,
            vehicleNumber: "UP-80K-8271",
            vehicleName: "Mini Car",
            vehicleTitle: "Mini Car",
            action: (
                <>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate("/fleet-master/add-form")}
                    >
                        Edit
                    </button>
                    {/* <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="car6" /> */}
                </>
            ),
            active: (
                <>
                    <CustomToggleSwitch
                        checked={isChecked}
                        onChange={toggleSwitch}
                        id="car6"
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
                fontSize: "1rem",
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
                row.vehicleNumber.toLowerCase().includes(searchText) ||
                row.vehicleName.toLowerCase().includes(searchText) ||
                row.vehicleTitle.toLowerCase().includes(searchText)
            );
        });
        setRecords(newData);
    };
    return (
        <div>
            <BodyHeader title="Fleet Master List" />
            <div className="px-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline card-tabs">
                            <div className="card-header p-0 pt-1 border-bottom-0">
                                <ul
                                    className="nav nav-tabs"
                                    id="custom-tabs-three-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="custom-tabs-three-home-tab"
                                            data-toggle="pill"
                                            href="#custom-tabs-three-home"
                                            role="tab"
                                            aria-controls="custom-tabs-three-home"
                                            aria-selected="true"
                                        >
                                            Vehicle Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="custom-tabs-three-profile-tab"
                                            data-toggle="pill"
                                            href="#custom-tabs-three-profile"
                                            role="tab"
                                            aria-controls="custom-tabs-three-profile"
                                            aria-selected="false"
                                        >
                                            EMI
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="custom-tabs-three-messages-tab"
                                            data-toggle="pill"
                                            href="#custom-tabs-three-messages"
                                            role="tab"
                                            aria-controls="custom-tabs-three-messages"
                                            aria-selected="false"
                                        >
                                            Service Record
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="custom-tabs-three-settings-tab"
                                            data-toggle="pill"
                                            href="#custom-tabs-three-settings"
                                            role="tab"
                                            aria-controls="custom-tabs-three-settings"
                                            aria-selected="false"
                                        >
                                            Tyre
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="custom-tabs-four-settings-tab"
                                            data-toggle="pill"
                                            href="#custom-tabs-four-settings"
                                            role="tab"
                                            aria-controls="custom-tabs-four-settings"
                                            aria-selected="false"
                                        >
                                            Monthly Maintenance Budget
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div
                                    className="tab-content"
                                    id="custom-tabs-three-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="custom-tabs-three-home"
                                        role="tabpanel"
                                        aria-labelledby="custom-tabs-three-home-tab"
                                    >
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">
                                                    Vehicle Details
                                                </h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <dl className="row">
                                                    <dt className="col-sm-3">
                                                        Vehicle No
                                                    </dt>
                                                    <dd className="col-sm-9">ABC12345</dd>
                                                    <dt className="col-sm-3">
                                                        Chasis No
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        Test12589
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Engine No
                                                    </dt>
                                                    <dd className="col-sm-9">E852369</dd>
                                                    <dt className="col-sm-3">
                                                        Vehicle Owner Name
                                                    </dt>
                                                    <dd className="col-sm-9">Test</dd>
                                                </dl>
                                                <div>
                                                    <button className="btn btn-primary mx-2">
                                                        Edit
                                                    </button>
                                                    <CustomToggleSwitch
                                                        id="vehicleDetails"
                                                        checked={isChecked}
                                                        onChange={toggleSwitch}
                                                    />
                                                </div>
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="custom-tabs-three-profile"
                                        role="tabpanel"
                                        aria-labelledby="custom-tabs-three-profile-tab"
                                    >
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">
                                                    EMI Details
                                                </h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <dl className="row">
                                                    <dt className="col-sm-3">
                                                        Start Date
                                                    </dt>
                                                    <dd className="col-sm-9">ABC12345</dd>
                                                    <dt className="col-sm-3">End Date</dt>
                                                    <dd className="col-sm-9">
                                                        Test12589
                                                    </dd>
                                                    <dt className="col-sm-3">Amount</dt>
                                                    <dd className="col-sm-9">E852369</dd>
                                                    <dt className="col-sm-3">
                                                        Certificate
                                                    </dt>
                                                    <dd className="col-sm-9">Test</dd>
                                                </dl>
                                                <div>
                                                    <button className="btn btn-primary mx-2">
                                                        Edit
                                                    </button>
                                                    <CustomToggleSwitch
                                                        id="emiDetails"
                                                        checked={isChecked}
                                                        onChange={toggleSwitch}
                                                    />
                                                </div>
                                            </div>

                                            {/* /.card-body */}
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="custom-tabs-three-messages"
                                        role="tabpanel"
                                        aria-labelledby="custom-tabs-three-messages-tab"
                                    >
                                        <div className="card-body p-0">
                                            <div className=" d-flex justify-content-between">
                                                <h3>Service List</h3>
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
                                    <div
                                        className="tab-pane fade"
                                        id="custom-tabs-three-settings"
                                        role="tabpanel"
                                        aria-labelledby="custom-tabs-three-settings-tab"
                                    >
                                        <div className="card-body p-0">
                                            <div className=" d-flex justify-content-between">
                                                <h3>Tyre's List</h3>
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
                                    <div
                                        className="tab-pane fade"
                                        id="custom-tabs-four-settings"
                                        role="tabpanel"
                                        aria-labelledby="custom-tabs-four-settings-tab"
                                    >
                                        <div className="card-body p-0">
                                            <div className=" d-flex justify-content-between">
                                                <h3>Monthly Maintenance Budget List</h3>
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
                                </div>
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FleetMasterView;
