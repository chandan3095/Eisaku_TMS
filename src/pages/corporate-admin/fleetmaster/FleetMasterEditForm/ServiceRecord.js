import React, { useState } from "react";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../../components/common/CustomDatePicker/CustomDatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import CustomModal from "../../../../components/common/Modal";
import DataTable from "react-data-table-component";

function ServiceRecord({
  handleFileChange,
  handleServiceBill,
  handleServiceBillDelete,
  serviceBillAdd,
  formik,
  handleServiceBillChange,
}) {
  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const toggleSwitch = () => {
    setIsChecked(!isChecked); // Toggle the state
    // console.log(isChecked);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleShowModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      name: "Odometer Reading",
      selector: (row) => row.odometerReading,
    },
    {
      name: "Service Amount",
      selector: (row) => row.serviceAmount,
      sortable: true,
    },
    {
      name: "Service Date",
      selector: (row) => row.serviceDate,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = serviceBillAdd?.map((item) => ({
    ...item,
    action: (
      <>
        <button className="btn btn-primary mx-2" onClick={handleShowModal} type="button">
          Edit
        </button>
        <CustomToggleSwitch id="dataOne" checked={isChecked} onChange={toggleSwitch} />
      </>
    ),
  }));

  const _data = [
    {
      id: 1,
      vehicleNumber: "UP-80K-8271",
      vehicleName: "Mini Car",
      vehicleTitle: "Mini Car",
      action: (
        <>
          <button
            className="btn btn-primary mx-2"
            onClick={handleShowModal}
            type="button"
          >
            Edit
          </button>
          <CustomToggleSwitch id="dataOne" checked={isChecked} onChange={toggleSwitch} />
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
            onClick={handleShowModal}
            type="button"
          >
            Edit
          </button>
          <CustomToggleSwitch id="dataTwo" checked={isChecked} onChange={toggleSwitch} />
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
            onClick={handleShowModal}
            type="button"
          >
            Edit
          </button>
          <CustomToggleSwitch
            id="dataThree"
            checked={isChecked}
            onChange={toggleSwitch}
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
            onClick={handleShowModal}
            type="button"
          >
            Edit
          </button>
          <CustomToggleSwitch id="dataFour" checked={isChecked} onChange={toggleSwitch} />
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
            onClick={handleShowModal}
            type="button"
          >
            Edit
          </button>
          <CustomToggleSwitch id="dataFive" checked={isChecked} onChange={toggleSwitch} />
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
            onClick={handleShowModal}
            type="button"
          >
            Edit
          </button>
          <CustomToggleSwitch id="dataSix" checked={isChecked} onChange={toggleSwitch} />
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
  return (
    <>
      <CustomModal
        showModal={isModalVisible}
        handleCloseModal={handleCloseModal}
        modalSize="modal-xl"
        child={
          <div
            className="tab-pane fade show active"
            id="2"
            role="tabpanel"
            aria-labelledby="2"
          >
            <div className="col-lg-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Service Record</h3>
                </div>

                <div className="card-body">
                  {serviceBillAdd.map((item, index) => (
                    <div
                      className={
                        index < serviceBillAdd.length - 1 && serviceBillAdd.length > 1
                          ? "row border-bottom mb-4 pb-3"
                          : "row"
                      }
                    >
                      <div className="col-lg-4">
                        <CustomInput
                          require={require}
                          label="Odometer reading"
                          id="odometerReading"
                          placeholder="Enter Amount"
                          name={"odometerReading"}
                          value={item.odometerReading}
                          onChange={(e) => handleServiceBillChange(item?.id, e)}
                        />
                      </div>
                      <div className="col-lg-4">
                        <CustomDatePicker
                          require={require}
                          label="Service Date"
                          id="serviceDate"
                          placeholder="Select Service Date"
                          name={"serviceDate"}
                          value={item.serviceDate}
                          onChange={(e) => handleServiceBillChange(item?.id, e)}
                        />
                      </div>
                      <div className="col-lg-4">
                        <CustomInput
                          require={require}
                          label="Service Amount"
                          id="serviceAmount"
                          placeholder="Enter Service Amount"
                          name={"serviceAmount"}
                          value={item.serviceAmount}
                          onChange={(e) => handleServiceBillChange(item?.id, e)}
                        />
                      </div>
                      <div className="col-lg-4">
                        <CustomInput
                          require={require}
                          label="Service Station Name"
                          id="serviceStationName"
                          placeholder="Enter Service Station Name"
                          name={"serviceStationName"}
                          value={item.serviceStationName}
                          onChange={(e) => handleServiceBillChange(item?.id, e)}
                        />
                      </div>
                      <div className="col-lg-4">
                        <label className="text-bold">
                          Service bill upload <span className="text-danger">*</span>
                        </label>
                        <CustomFileUpload
                          accept=".pdf, .doc, .docx"
                          // onChange={(event) => handleFileChange(event)}
                          name={"serviceBillUpload"}
                          value={item.serviceBillUpload}
                          onChange={(e) => {
                            handleServiceBillChange(item?.id, e, true);
                          }}
                          // errors={formik.errors.insuranceAmount}
                          // message={formik.errors.insuranceAmount}
                        />
                      </div>
                      <div className="col-lg-4 mt-4 pt-2">
                        {index > 0 && (
                          <button
                            type="button"
                            className="btn btn-danger float-left ml-3"
                            onClick={handleServiceBillDelete}
                          >
                            <i className="fas fa-trash"></i> Delete item
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-primary float-left"
                        onClick={handleServiceBill}
                      >
                        <i className="fas fa-plus"></i> Add More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
}

export default ServiceRecord;
