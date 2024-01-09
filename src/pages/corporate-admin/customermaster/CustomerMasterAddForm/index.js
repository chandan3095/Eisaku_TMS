import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import BodyHeader from "../../../../components/common/CommonBodyHeader";
import CustomDropdown from "../../../../components/common/CustomDropdown/CustomDropdown";
import { useFormik } from "formik";
import CustomerMasterSchema from "../../../../constansts/schema";

function FleetMasterAddForm() {
  const [locationAdd, setLocationAdd] = useState([{ enterLocation: "" }]);
  const [addressAdd, setAddressAdd] = useState([{ enterLocation: "" }]);
  const [agreementAdd, setAgreementAdd] = useState([{ selectFile: "" }]);
  const [showLaneDetails, setShowLaneDetails] = useState(false);
  const [contactPersonAdd, setContactPersonAdd] = useState([
    { mobileNo: "", emailId: "" },
  ]);

  const [laneNameAdd, setLaneNameAdd] = useState([
    {
      enterName: "",
      origin: "",
      destination: "",
      vehicleType: "",
      tonnage: "",
    },
  ]);

  const vehicleCategory = [
    {
      label: "20ft",
      value: "20ft",
    },
    {
      label: "22ft",
      value: "22ft",
    },
    {
      label: "24ft",
      value: "24ft",
    },
    {
      label: "32ft SXL",
      value: "32ft SXL",
    },
    {
      label: "32ft MXL",
      value: "32ft MXL",
    },
    {
      label: "Any Other",
      value: "Any Other",
    },
  ];

  const tonnageData = [
    {
      label: "5T",
      value: "5T",
    },
    {
      label: "6T",
      value: "6T",
    },
    {
      label: "7T",
      value: "7T",
    },
    {
      label: "8T",
      value: "8T",
    },
    {
      label: "9T",
      value: "9T",
    },
    {
      label: "10.5T",
      value: "10.5T",
    },
    {
      label: "15T",
      value: "15T",
    },
    {
      label: "18T",
      value: "18T",
    },
    {
      label: "any other",
      value: "any other",
    },
  ];

  const destinationData = [
    {
      label: "New York",
      value: "New York",
    },
    {
      label: "Paris",
      value: "Paris",
    },
    {
      label: "Tokyo",
      value: "Tokyo",
    },
    {
      label: "London",
      value: "London",
    },
  ];

  const [isDisabled, setIsdisabled] = useState(true);
  const [showLaneDetailsData, setShowLaneDetailsData] = useState(false);
  
  const handelLaneSave = () => {
    formik.handleSubmit();
    const updatedlaneNameAdd = laneNameAdd.slice(0, -1); // Removes the last element
    setLaneNameAdd(updatedlaneNameAdd);
    setShowLaneDetails(true);
    setIsdisabled(false);
  };
  const handelSave = () => {
    formik.handleSubmit();
    setShowLaneDetailsData(false)
    setShowLaneDetailsData(true)
  };
  const handelLaneBack = () => {
    setIsdisabled(true);

    // setLaneNameAdd(laneNameAdd - 1)
    setLaneNameAdd([...laneNameAdd, { enterLaneName: "" }]);
    setShowLaneDetails(false);
  };
  // Lane Name Details
  const handleLaneNameAdd = () => {
    setShowLaneDetails(false);
    setLaneNameAdd([...laneNameAdd, { enterLaneName: "" }]);
  };
  const handleLaneNameDelete = () => {
    if (laneNameAdd.length > 1) {
      const updatedLaneNameAdd = laneNameAdd.slice(0, -1); // Removes the last element
      setLaneNameAdd(updatedLaneNameAdd);
    }
  };

  // Contact Person Details
  const handleContactPersonAdd = () => {
    setContactPersonAdd([...contactPersonAdd, { enterContactPerson: "" }]);
  };
  const handleContactPersonDelete = () => {
    if (contactPersonAdd.length > 1) {
      const updatedContactPersonAdd = contactPersonAdd.slice(0, -1); // Removes the last element
      setContactPersonAdd(updatedContactPersonAdd);
    }
  };

  // Agreement Details
  const handleAgreementAdd = () => {
    setAgreementAdd([...agreementAdd, { enterAgreement: "" }]);
  };
  const handleAgreementDelete = () => {
    if (agreementAdd.length > 1) {
      const updatedAgreementAdd = agreementAdd.slice(0, -1); // Removes the last element
      setAgreementAdd(updatedAgreementAdd);
    }
  };

  // Add Location
  const handleLocationAdd = () => {
    setLocationAdd([...locationAdd, { enterLocation: "" }]);
  };
  const handleLocationDelete = () => {
    if (locationAdd.length > 1) {
      const updatedLocationAdd = locationAdd.slice(0, -1); // Removes the last element
      setLocationAdd(updatedLocationAdd);
    }
  };

  // Add Address
  const handleAddressAdd = () => {
    setAddressAdd([...addressAdd, { enterAddress: "" }]);
  };
  const handleAddressDelete = () => {
    if (addressAdd.length > 1) {
      const updatedAddressAdd = addressAdd.slice(0, -1); // Removes the last element
      setAddressAdd(updatedAddressAdd);
    }
  };
  const [laneAddData, setLaneAddData] = useState();

  const formik = useFormik({
    initialValues: {
      customerName: "",
      agreementDocument: null,
      contactPersonName: "",
      customerMobileNo: "",
      customerEmail: "",
      location: "",
      address: "",
      laneName: "",
      origin: "",
      destination: "",
      vehicleCategory: "",
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
    },
    CustomerMasterSchema, // Apply the validation schema
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div>
      <BodyHeader title="Add Customer Master" />
      {/* <form className="p-5 shadow-lg" onSubmit={formik.handleSubmit}> */}
      <div className="p-5 shadow-lg">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Customer Documents</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <CustomInput
                  label="Customer Name"
                  id="customerName"
                  placeholder="Enter Customer Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.customerName}
                />
                {formik.touched.customerName && formik.errors.customerName ? (
                  <div>{formik.errors.customerName}</div>
                ) : null}
              </div>

              {/* Agreement Details */}
              <div className="col-lg-12">
                <div className="row">
                  {agreementAdd.map(() => (
                    <div className="col-lg-6">
                      <label className="text-bold">Agreement Document</label>
                      <CustomFileUpload
                        label="Agreement Details"
                        onChange={(event) =>
                          formik.setFieldValue(
                            "agreementDocument",
                            event.currentTarget.files[0]
                          )
                        }
                      />
                      {formik.errors.agreementDocument &&
                      formik.touched.agreementDocument ? (
                        <div>{formik.errors.agreementDocument}</div>
                      ) : null}
                    </div>
                  ))}
                  <div className="col-12 mb-3">
                    {/* <button
                    type="button"
                    className="btn btn-primary mr-3"
                    onClick={handleAgreementAdd}
                  >
                    <i className="fas fa-plus"></i> Add File
                  </button> */}

                    {agreementAdd.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleAgreementDelete}
                      >
                        <i className="fas fa-trash"></i> Delete File
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Person Details  */}
              <div className="col-lg-12">
                {contactPersonAdd.map((item, index) => (
                  <div
                    className={
                      index < contactPersonAdd.length - 1 &&
                      contactPersonAdd.length > 1
                        ? "row border-bottom mb-4 pb-3"
                        : "row"
                    }
                  >
                    <div className="col-lg-4">
                      <CustomInput
                        label="Contact Person Name"
                        id="contactPersonName"
                        placeholder="Enter Contact Person Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactPersonName}
                      />
                      {formik.errors.contactPersonName &&
                      formik.touched.contactPersonName ? (
                        <div>{formik.errors.contactPersonName}</div>
                      ) : null}
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Customer Mobile No"
                        id="customerMobileNo"
                        placeholder="Enter Customer Mobile No"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customerMobileNo}
                      />
                      {formik.errors.customerMobileNo &&
                      formik.touched.customerMobileNo ? (
                        <div>{formik.errors.customerMobileNo}</div>
                      ) : null}
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Customer Email Id"
                        id="customerEmailId"
                        placeholder="Enter Customer Email Id"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customerEmail}
                      />
                      {formik.errors.customerEmail &&
                      formik.touched.customerEmail ? (
                        <div>{formik.errors.customerEmail}</div>
                      ) : null}
                    </div>
                  </div>
                ))}
                {/* <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={handleContactPersonAdd}
                >
                  <i className="fas fa-plus"></i> Add Contact Person
                </button> */}
                {contactPersonAdd.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger float-right mr-3"
                    onClick={handleContactPersonDelete}
                  >
                    <i className="fas fa-trash"></i> Delete Contact Person
                  </button>
                )}
              </div>

              <div className="col-lg-6">
                {/* Location  */}
                <div className="">
                  {locationAdd.map(() => (
                    <div>
                      <CustomDropdown
                        optionData={destinationData}
                        label="Location"
                        id=""
                        onChange={(value) => {
                          formik.setFieldValue("origin", value[0].value);
                        }}
                        // onBlur={formik.handleBlur}
                        value={formik.values.location}
                      />
                    </div>
                  ))}
                  {/* <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={handleLocationAdd}
                  >
                    <i className="fas fa-plus"></i> Add Location
                  </button> */}
                  {locationAdd.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger float-right"
                      onClick={handleLocationDelete}
                    >
                      <i className="fas fa-trash"></i> Delete Location
                    </button>
                  )}
                </div>
              </div>

              <div className="col-lg-6">
                {/* Address  */}
                <div className="d-block">
                  {addressAdd.map((item, index) => (
                    <CustomTextArea
                      label="Address"
                      id=""
                      placeholder="Enter Address "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                    />
                  ))}
                  {/* <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={handleAddressAdd}
                  >
                    <i className="fas fa-plus"></i> Add Address
                  </button> */}
                  {addressAdd.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger float-right"
                      onClick={handleAddressDelete}
                    >
                      <i className="fas fa-trash"></i> Delete Address
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12 mt-4">
                <button
                  type="button"
                  className="btn mx-1 btn-primary"
                  onClick={handleAgreementAdd}
                >
                  <i className="fas fa-plus"></i> Add Agreement Document
                </button>
                <button
                  type="button"
                  className="btn mx-1 btn-primary"
                  onClick={handleContactPersonAdd}
                >
                  <i className="fas fa-plus"></i> Add Contact Person
                </button>
                <button
                  type="button"
                  className="btn mx-1 btn-primary"
                  onClick={handleAddressAdd}
                >
                  <i className="fas fa-plus"></i> Add Address
                </button>
                <button
                  type="button"
                  className="btn mx-1 btn-primary"
                  onClick={handleLocationAdd}
                >
                  <i className="fas fa-plus"></i> Add Location
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Lane Details</h3>
          </div>

          <div className="card-body">
            <div className="row">
              {/* Lane name  */}
              <div className="col-lg-12">
                {laneNameAdd.map((item, index) => (
                  <div
                    className={
                      index < laneNameAdd.length - 1 && laneNameAdd.length > 1
                        ? "row border-bottom mb-4 pb-3"
                        : "row"
                    }
                  >
                    <div className="col-lg-4">
                      <CustomInput
                        label="Customer Name"
                        id="laneCustomerName"
                        placeholder="Customer Name"
                        onChange={formik.handleChange}
                        value={formik.values.customerName}
                      />
                    </div>
                    <div className="col-lg-4">
                      <label className="text-bold">Origin</label>
                      <CustomDropdown
                        optionData={destinationData}
                        value={formik.values.origin}
                        onChange={(value) => {
                          formik.setFieldValue("origin", value[0].value);
                        }}
                      />
                    </div>
                    <div className="col-lg-4">
                      <label className="text-bold">Destination</label>
                      <CustomDropdown
                        optionData={destinationData}
                        value={formik.values.destination}
                        onChange={(value) => {
                          formik.setFieldValue("destination", value[0].value);
                        }}
                      />
                    </div>
                    {/* Vehicle Category Sec */}
                    <div className="col-lg-6">
                      <label className="text-bold">Vehicle Type</label>
                      <CustomDropdown
                        optionData={vehicleCategory}
                        value={formik.values.vehicleCategory}
                        onChange={(value) => {
                          formik.setFieldValue(
                            "vehicleCategory",
                            value[0].value
                          );
                        }}
                      />
                    </div>
                    {/* Tonnage Sec */}
                    <div className="col-lg-6">
                      <label className="text-bold">Tonnage</label>
                      <CustomDropdown
                        optionData={tonnageData}
                        value={formik.values.tonnage}
                        onChange={(value) => {
                          formik.setFieldValue("tonnage", value[0].value);
                        }}
                      />
                    </div>
                    <div className="text-left">
                      <button
                        type="button"
                        className="btn btn-success mr-2"
                        onClick={handelLaneSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ))}

                {showLaneDetails && (
                  <div className="row mt-3">
                    <div className="col-lg-12">
                      <h4 className="border-bottom mb-3 pb-2">
                        {formik.values.customerName &&
                          `${formik.values.customerName}`}
                        {formik.values.origin && `#${formik.values.origin}`}
                        {formik.values.destination &&
                          `#${formik.values.destination}`}
                        {formik.values.vehicleCategory &&
                          `#${formik.values.vehicleCategory}`}
                        {formik.values.tonnage && `#${formik.values.tonnage}`}
                      </h4>
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Express mode rate additional"
                        id="expressModeRateAdditional"
                        placeholder="Enter Amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expressModeRateAdditional}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Super express mode rate additional"
                        id="superExpressModeRateAdditional"
                        placeholder="Enter amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.superExpressModeRateAdditional}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Detention rate additional"
                        id="detentionRateAdditional"
                        placeholder="Enter amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.detentionRateAdditional}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Multiple loading location rate additional"
                        id="multipleLoadingLocationRateAdditional"
                        placeholder="Enter amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.multipleLoadingLocationRateAdditional
                        }
                      />
                    </div>

                    <div className="col-lg-4">
                      <CustomInput
                        label="Multiple unloading location rate additional"
                        id="multipleUnloadingLocationRateAdditional"
                        placeholder="Enter amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.multipleUnloadingLocationRateAdditional
                        }
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Loading charges"
                        id="loadingCharges"
                        placeholder="Enter amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.loadingCharges}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="Unloading charge"
                        id="unloadingCharge"
                        placeholder="Enter amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.unloadingCharge}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="miscellaneous charges"
                        id="miscellaneousCharges"
                        placeholder="Enter amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.miscellaneousCharges}
                      />
                    </div>
                    <div className="col-lg-4">
                      <CustomInput
                        label="miscellaneous Remarks"
                        id="miscellaneousRemarks"
                        placeholder="Enter remarks"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.miscellaneousRemarks}
                      />
                    </div>
                    
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary mr-2"
                        onClick={handelLaneBack}
                      >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-success mr-2"
                        onClick={handelSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}

                <div className="text-left">
                  {laneNameAdd.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleLaneNameDelete}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  )}
                </div>
                <div className="mb-4">
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={handleLaneNameAdd}
                    disabled={isDisabled}
                  >
                    <i className="fas fa-plus"></i> Add New
                  </button>
                </div>
                {showLaneDetailsData &&
                      <div>
                      <h4 className="border-bottom mb-3 pb-2">
                        {formik.values.customerName &&
                          `${formik.values.customerName}`}
                        {formik.values.origin && `#${formik.values.origin}`}
                        {formik.values.destination &&
                          `#${formik.values.destination}`}
                        {formik.values.vehicleCategory &&
                          `#${formik.values.vehicleCategory}`}
                        {formik.values.tonnage && `#${formik.values.tonnage}`}
                      </h4>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Express Mode Rate Additional</th>
                            <th>Super Express Mode Rate Additional</th>
                            <th>Detention Rate Additional</th>
                            <th>Multiple Loading Location Rate Additional</th>
                            <th>Multiple Unloading Location Rate Additional</th>
                            <th>Loading Charges</th>
                            <th>Unloading Charge</th>
                            <th>Miscellaneous Charges</th>
                            <th>Miscellaneous Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{formik.values.expressModeRateAdditional}</td>
                            <td>
                              {formik.values.superExpressModeRateAdditional}
                            </td>
                            <td>{formik.values.detentionRateAdditional}</td>
                            <td>
                              {
                                formik.values
                                  .multipleLoadingLocationRateAdditional
                              }
                            </td>
                            <td>
                              {
                                formik.values
                                  .multipleUnloadingLocationRateAdditional
                              }
                            </td>
                            <td>{formik.values.loadingCharges}</td>
                            <td>{formik.values.unloadingCharge}</td>
                            <td>{formik.values.miscellaneousCharges}</td>
                            <td>{formik.values.miscellaneousRemarks}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    }
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-3 text-center">
          <button
            className="btn btn-primary px-4 py-3"
            type="submit"
            onSubmit={formik.handleSubmit}
          >
            <h6 className="mb-0 text-uppercase">Submit</h6>
          </button>
          <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
            <h6 className="mb-0 text-uppercase">reset</h6>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FleetMasterAddForm;
