import React, { useEffect, useState } from "react";
import CustomModal from "../../../components/common/Modal";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import { useSelector, useDispatch } from "react-redux";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import {
  fetchAllLaneAsync,
  updateVendorChildAsync,
} from "../../../redux/features/vendorMaster";

const EditLaneDetails = ({ data, mode, vendorId }) => {
  const [showModal, setshowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [laneNameSelect, setlaneNameSelect] = useState();
  const [formData, setFormData] = useState({
    expressRate: "",
    superExpressRate: "",
    destinationRate: "",
    loadingRate: "",
    unLoadingRate: "",
    loadingCharges: "",
    unloadingCharges: "",
    miscellaneousCarges: "",
    miscellaneousRemarks: "",
    vendorId: "",
    id: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const vendorMaster = useSelector((state) => state.vendorMaster);
  // For lane dropdown
  const laneData = vendorMaster?.laneData?.map((item) => ({
    label: item?.name,
    value: item?.id,
  }));

  const handleCloseModal = () => {
    setshowModal(false);
  };

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev); // Toggle the state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLaneNameSelect = (values) => {
    setlaneNameSelect({
      laneName: values?.[0]?.label,
      laneId: values?.[0]?.value,
    });
  };
  const editHandler = (data) => {
    setFormData({
      expressRate: data?.cust_express_mode_rate_additional,
      superExpressRate: data?.cust_super_express_mode_rate_additional,
      destinationRate: data?.cust_detention_rate_additional,
      loadingRate: data?.cust_multiple_loading_location_rate_additional,
      unLoadingRate: data?.cust_multiple_unloading_location_rate_additional,
      loadingCharges: data?.cust_loading_charges,
      unloadingCharges: data?.cust_unloading_charge,
      miscellaneousCarges: data?.cust_miscellaneous_charges,
      miscellaneousRemarks: data?.cust_miscellaneous_remarks,
      vendorId: data?.vendor_master_id,
      id: data?.id,
    });
    setshowModal(true);
  };

  const addButtonHandler = () => {
    setshowModal(true);
  };

  const updateHandler = () => {
    // console.log(formData);
    // return;
    const newData = new FormData();
    newData.append("vendor_master_id", formData.vendorId);
    newData.append("lane_master_id", laneNameSelect.laneId);
    newData.append("_method", "PATCH");
    newData.append("model_id", 7);
    newData.append("action_id", 2);

    // for array of elements
    const ard = {
      vend_express_mode_rate_additional: formData.expressRate,
      vend_super_express_mode_rate_additional: formData.superExpressRate,
      vend_multiple_loading_location_rate_additional: formData.loadingRate,
      vend_multiple_unloading_location_rate_additional: formData.unLoadingRate,
      vend_loading_charges: formData.loadingCharges,
      vend_unloading_charge: formData.unloadingCharges,
      vend_detention_rate_additional: formData.destinationRate,
      vend_miscellaneous_charges: formData.miscellaneousCarges,
      vend_miscellaneous_remarks: formData.miscellaneousRemarks,
    };

    Object.keys(ard).forEach((key, index) => {
      newData.append(`${key}[]`, ard[key]);
    });

    dispatch(updateVendorChildAsync(newData));
  };

  const columns = [
    {
      name: "Express Mode Rate Additional",
      selector: (row) => row.cust_express_mode_rate_additional,
      sortable: true,
    },
    {
      name: "Super Express Mode Rate Additional",
      selector: (row) => row.cust_super_express_mode_rate_additional,
    },
    {
      name: "Detention Rate Additional",
      selector: (row) => row.cust_detention_rate_additional,
    },
    {
      name: "Multiple Loading Location Rate Additional",
      selector: (row) => row.cust_multiple_loading_location_rate_additional,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <button
              className="btn btn-primary mx-2"
              onClick={() => editHandler(row)}
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

  return (
    <>
      <CustomModal
        modalSize={"modal-xl"}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        onSubmit={updateHandler}
        child={
          <>
            <div className="row">
              <div className="col-lg-4">
                <CustomDropdown
                  require={require}
                  label="Lane Name"
                  optionData={laneData}
                  // value={showLaneDetails}
                  onChange={(values) => handleLaneNameSelect(values)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="Express mode rate additional"
                  id="expressModeRateAdditional"
                  placeholder="Enter Amount"
                  name="expressRate"
                  value={formData.expressRate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="Super express mode rate additional"
                  id="superExpressModeRateAdditional"
                  placeholder="Enter amount"
                  name="superExpressRate"
                  value={formData.superExpressRate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="Detention rate additional"
                  id="detentionRateAdditional"
                  placeholder="Enter amount"
                  name="destinationRate"
                  value={formData.destinationRate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="Multiple loading location rate additional"
                  id="multipleLoadingLocationRateAdditional"
                  placeholder="Enter amount"
                  value={formData.loadingRate}
                  name="loadingRate"
                  onChange={handleChange}
                />
              </div>

              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="Multiple unloading location rate additional"
                  id="multipleUnloadingLocationRateAdditional"
                  placeholder="Enter amount"
                  value={formData.unLoadingRate}
                  name="unLoadingRate"
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="Loading charges"
                  id="loadingCharges"
                  placeholder="Enter amount"
                  value={formData.loadingCharges}
                  name="loadingCharges"
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="Unloading charge"
                  id="unloadingCharge"
                  placeholder="Enter amount"
                  value={formData.unloadingCharges}
                  name="unloadingCharges"
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  inputType="number"
                  require={require}
                  label="miscellaneous charges"
                  id="miscellaneousCharges"
                  placeholder="Enter amount"
                  value={formData.miscellaneousCarges}
                  name={"miscellaneousCarges"}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <CustomInput
                  //   inputType="number"
                  require={require}
                  label="miscellaneous Remarks"
                  id="miscellaneousRemarks"
                  placeholder="Enter remarks"
                  name={"miscellaneousRemarks"}
                  value={formData.miscellaneousRemarks}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        }
      />
      {mode === "add" ? (
        <button
          type="button"
          className="btn btn-primary float-right"
          onClick={addButtonHandler}
        >
          <i className="fas fa-plus"></i> Add item
        </button>
      ) : (
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
      )}
    </>
  );
};

export default EditLaneDetails;
