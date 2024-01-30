import { useFormik } from "formik";
import React, { useState } from "react";
import CustomToggleSwitch from "../../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import CustomModal from "../../../../components/common/Modal";
import { useToggleState } from "../../../../Hooks/useToggleState";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { useSelector } from "react-redux";

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

const Lane = ({ laneList }) => {
  const fleetMaster = useSelector((state) => state.fleetMaster);

  const locationData = fleetMaster?.location?.map?.((item) => ({
    label: item?.name,
    value: item?.id,
  }));
  const vehicleTypeData = fleetMaster?.vehicleCategory?.map?.((item) => ({
    label: item?.category_name,
    value: item?.id,
  }));
  const tonnageData = fleetMaster?.tonnage?.map?.((item) => ({
    label: item?.tonnage,
    value: item?.id,
  }));

  const [initialState, setInitialState] = useState({
    id: "",
    laneName: "",
    origin: "",
    destination: "",
    vehicleType: "",
    tonnage: "",
    expressModeRateAdditional: "",
    superExpressModeRateAdditional: "",
    detentionRateAdditional: "",
    multipleLoadingLocationRateAdditional: "",
    multipleUnloadingLocationRateAdditional: "",
    loadingCharges: "",
    unloadingCharge: "",
    miscellaneousCharges: "",
    miscellaneousRemarks: "",
  });
  const [isChecked, setIsChecked] = useState({}); // State to manage toggle

  const [isModalVisible, handleShowModal, handleCloseModal] = useToggleState();

  const toggleSwitch = () => {
    setIsChecked(isChecked ? (isChecked = true) : (isChecked = false)); // Toggle the state
    console.log(isChecked);
  };

  console.log({ laneList });

  const columns = [
    {
      name: "Lane Name",
      selector: (row) => row.name,
      sortable: true,
    },
    // {
    //   name: "Email",
    //   selector: (row) => row.email,
    // },
    // {
    //   name: "Mobile Number",
    //   selector: (row) => row.mobile,
    // },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = laneList?.map?.((item) => ({
    ...item,
    action: (
      <>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setInitialState({
              id: "",
              laneName: item?.name,
              origin: item?.name,
              destination: item?.name,
              vehicleType: item?.name,
              tonnage: item?.name,
              expressModeRateAdditional: item?.name,
              superExpressModeRateAdditional: item?.name,
              detentionRateAdditional: item?.name,
              multipleLoadingLocationRateAdditional: item?.name,
              multipleUnloadingLocationRateAdditional: item?.name,
              loadingCharges: item?.name,
              unloadingCharge: item?.name,
              miscellaneousCharges: item?.name,
              miscellaneousRemarks: item?.name,
            });
            handleShowModal();
          }}
        >
          Edit
        </button>
        <CustomToggleSwitch checked={isChecked} onChange={toggleSwitch} id="csutomer6" />
      </>
    ),
  }));

  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: true,
    // onSubmit: handleAddCustomerMaster,
  });

  const {
    touched,
    errors,
    values,
    getFieldProps,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = formik;

  return (
    <>
      <CustomModal
        showModal={isModalVisible}
        handleCloseModal={handleCloseModal}
        modalSize="modal-xl"
        title="Lne"
        onSubmit={() => {}}
        child={
          <>
            {/* <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Customer Name"
                id="laneCustomerName"
                placeholder="Customer Name"
                disabled={true}
                onChange={(event) => {}}
                value={formik.values.customerName}
              />
            </div> */}
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Lane Name"
                id="laneName"
                placeholder="Lane Name"
                {...getFieldProps(`laneName`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomDropdown
                label="Origin"
                require={require}
                optionData={locationData}
                onChange={(values) => {
                  setFieldValue(`origin`, values?.[0]?.value);
                }}
              />
            </div>
            <div className="col-lg-4">
              <CustomDropdown
                label="Destination"
                require={require}
                optionData={locationData}
                values={formik.values.destination}
                onChange={(values) => {
                  console.log({ values });
                  setFieldValue(`destination`, values?.[0]?.value);
                }}
              />
            </div>
            {/* Vehicle Category Sec */}
            <div className="col-lg-6">
              <CustomDropdown
                label="Vehicle Type"
                require={require}
                optionData={vehicleTypeData}
                values={formik.values.vehicleCategory}
                onChange={(values) => {
                  setFieldValue(`vehicleType`, values?.[0]?.value);
                }}
              />
            </div>
            {/* Tonnage Sec */}
            <div className="col-lg-6">
              <CustomDropdown
                label="Tonnage(T)"
                require={require}
                optionData={tonnageData}
                values={formik.values.tonnage}
                onChange={(values) => {
                  setFieldValue(`tonnage`, values?.[0]?.value);
                }}
              />
            </div>

            <h4>details</h4>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Express mode rate additional"
                id="expressModeRateAdditional"
                placeholder="Enter Amount"
                {...getFieldProps(`expressModeRateAdditional`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Super express mode rate additional"
                id="superExpressModeRateAdditional"
                placeholder="Enter amount"
                {...getFieldProps(`superExpressModeRateAdditional`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Detention rate additional"
                id="detentionRateAdditional"
                placeholder="Enter amount"
                {...getFieldProps(`detentionRateAdditional`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Multiple loading location rate additional"
                id="multipleLoadingLocationRateAdditional"
                placeholder="Enter amount"
                {...getFieldProps(`multipleLoadingLocationRateAdditional`)}
              />
            </div>

            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Multiple unloading location rate additional"
                id="multipleUnloadingLocationRateAdditional"
                placeholder="Enter amount"
                {...getFieldProps(`multipleUnloadingLocationRateAdditional`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Loading charges"
                id="loadingCharges"
                placeholder="Enter amount"
                {...getFieldProps(`loadingCharges`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="Unloading charge"
                id="unloadingCharge"
                placeholder="Enter amount"
                {...getFieldProps(`unloadingCharge`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="miscellaneous charges"
                id="miscellaneousCharges"
                placeholder="Enter amount"
                {...getFieldProps(`miscellaneousCharges`)}
              />
            </div>
            <div className="col-lg-4">
              <CustomInput
                require={require}
                label="miscellaneous Remarks"
                id="miscellaneousRemarks"
                placeholder="Enter remarks"
                {...getFieldProps(`miscellaneousRemarks`)}
              />
            </div>
          </>
        }
      />
      <label className="text-bold">Lane details</label>
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

export default Lane;
