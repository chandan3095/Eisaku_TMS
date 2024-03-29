import React, { Fragment, useEffect, useState } from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";

import CustomTextArea from "../../../components/common/CustomTextArea/CustomTextArea";
import { useDispatch, useSelector } from "react-redux";
import {
  addVendorMasterAsync,
  fetchAllLaneAsync,
  fetchAllLocationAsync,
} from "../../../redux/features/vendorMaster";

const VendorMasterAdd = () => {
  const [laneNameSelect, setlaneNameSelect] = useState([]);
  const [isDisabled, setIsdisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState({
    index: 0,
    expand: false,
  });
  const [formData, setFormData] = useState({
    vendorName: "",
    accountNumber: "",
    bankName: "",
    ifscCode: "",
    accountHolderName: "",
    bankDocument: "",
    gstNumber: "",
    gstDocument: "",
    location: "",
    address: "",
    agreementStartDate: "",
    agreementEndDate: "",
    agreementDocument: "",
  });

  const [addContact, setAddContact] = useState([
    {
      name: "",
      mobile: "",
      email: "",
    },
  ]);
  const [laneDetails, setLaneDetails] = useState([
    {
      expressRate: "",
      superExpressRate: "",
      destinationRate: "",
      loadingRate: "",
      unLoadingRate: "",
      loadingCharges: "",
      unloadingCharges: "",
      miscellaneousCarges: "",
      miscellaneousRemarks: "",
    },
  ]);

  const vendorMaster = useSelector((state) => state.vendorMaster);
  const laneData = vendorMaster.laneData.map((item) => ({
    label: item?.name,
    value: item?.id,
  }));

  const locationData = vendorMaster.locationData.map((item) => ({
    label: item?.name,
    value: item?.id,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLocationAsync());
    dispatch(fetchAllLaneAsync());
  }, []);

  const handleAddContact = () => {
    setAddContact([
      ...addContact,
      {
        name: "",
        mobile: "",
        email: "",
      },
    ]);
  };

  const handleRemoveContact = (index) => {
    const updatedContacts = [...addContact];
    updatedContacts.splice(index, 1);
    // console.log(updatedContacts);
    setAddContact(updatedContacts);
  };
  // Lane Name Details
  const handleLaneNameSelect = (values, index) => {
    setIsdisabled(false);
    setSelectedOption({ index: index, expand: true });
    setlaneNameSelect([
      ...laneNameSelect,
      { laneName: values?.[0]?.label, laneId: values?.[0]?.value },
    ]);
  };

  const handleLaneNameDelete = (index) => {
    // 1. Remove laneName
    const updatedLaneSelect = [...laneNameSelect];
    updatedLaneSelect.splice(index, 1);
    setlaneNameSelect(updatedLaneSelect);
    // 2. Remove laneDetails
    const updatedLandeDetails = [...laneDetails];
    updatedLandeDetails.splice(index, 1);
    setLaneDetails(updatedLandeDetails);
  };
  const handleLaneAdd = () => {
    setLaneDetails([
      ...laneDetails,
      {
        expressRate: "",
        superExpressRate: "",
        destinationRate: "",
        loadingRate: "",
        unLoadingRate: "",
        loadingCharges: "",
        unloadingCharges: "",
        miscellaneousCarges: "",
        miscellaneousRemarks: "",
      },
    ]);
  };

  // Change handler for simple forms
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
      console.log(name, file);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Change handler for multiple forms
  const multiChangeHandler = (e, index, state, setState) => {
    const { name, value } = e.target;
    // 1. Identify the object from the contact array
    let itemToChange = { ...state[index] };

    // 2. Make Changes
    itemToChange = { ...itemToChange, [name]: value };

    // 3. Update the contact array
    let updatedState = [...state];
    updatedState[index] = itemToChange;
    setState(updatedState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ formData });
    console.log({ laneNameSelect });
    const data = {
      name: formData.vendorName,
      account_number: formData.accountNumber,
      bank_name: formData.bankName,
      ifsc_code: formData.ifscCode,
      account_holder_name: formData.accountHolderName,
      bank_document: formData.bankDocument,
      gst_number: formData.gstNumber,
      gst_document: formData.gstDocument,
      location_master_id: formData.location,
      address: formData.address,

      agreement_start_date: formData.agreementStartDate,
      agreement_end_date: formData.agreementEndDate,
      agreement_document: formData.agreementDocument,

      model_id: 7,
      action_id: 1,
    };

    const ard = {
      contact_person_name: addContact.map((item) => item.name),
      mobile: addContact.map((item) => item.mobile),
      email: addContact.map((item) => item.email),

      lane_master_id: laneNameSelect.map((item) => item.laneId),
      vend_express_mode_rate_additional: laneDetails.map(
        (item) => +item.expressRate
      ),
      vend_super_express_mode_rate_additional: laneDetails.map(
        (item) => +item.superExpressRate
      ),
      vend_detention_rate_additional: laneDetails.map(
        (item) => +item.destinationRate
      ),
      vend_multiple_loading_location_rate_additional: laneDetails.map(
        (item) => +item.loadingRate
      ),
      vend_loading_charges: laneDetails.map((item) => +item.loadingCharges),
      vend_unloading_charge: laneDetails.map((item) => +item.unloadingCharges),
      vend_multiple_unloading_location_rate_additional: laneDetails.map(
        (item) => +item.unLoadingRate
      ),
      vend_miscellaneous_charges: laneDetails.map(
        (item) => +item.miscellaneousCarges
      ),
      vend_miscellaneous_remarks: laneDetails.map(
        (item) => +item.miscellaneousRemarks
      ),
    };

    const newData = new FormData();

    Object.keys(data).forEach((key) => {
      newData.append(key, data[key]);
    });
    Object.keys(ard).forEach((key, index) => {
      newData.append(`${key}[]`, ard[key]);
    });

    dispatch(addVendorMasterAsync(newData));
  };

  return (
    <div>
      <BodyHeader title="Add Vendor Master" />
      <form className="p-3 shadow-lg" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Vendor Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    <CustomInput
                      require={require}
                      label="Vendor Name"
                      id="#vendorName"
                      placeholder="Enter Vendor Name"
                      name="vendorName"
                      value={formData.vendorName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      inputType="number"
                      require={require}
                      label="Account Number"
                      id="AccountNumber"
                      placeholder="Enter Account Number"
                      name={"accountNumber"}
                      value={formData.accountNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      require={require}
                      label="Bank name"
                      id="bankName"
                      placeholder="Enter Bank Name"
                      name={"bankName"}
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      inputType="number"
                      require={require}
                      label="IFSC Code"
                      id="ifscCode"
                      placeholder="Enter IFSC Code"
                      name={"ifscCode"}
                      value={formData.ifscCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-4">
                    <CustomInput
                      require={require}
                      label="Account Holder Name"
                      id="accountHolderName"
                      placeholder="Enter Account Holder name"
                      name={"accountHolderName"}
                      value={formData.accountHolderName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label className="text-bold">
                      Bank Document
                      <span className="text-danger">*</span>
                    </label>
                    <CustomFileUpload
                      label="Bank Details"
                      id="bankDetails"
                      name={"bankDocument"}
                      value={formData.bankDocument}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <CustomInput
                      inputType="number"
                      require={require}
                      label="GST Number"
                      id="gstNumber"
                      placeholder="Enter GST Number"
                      name={"gstNumber"}
                      value={formData.gstNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label className="text-bold">
                      GST Document
                      <span className="text-danger">*</span>
                    </label>
                    <CustomFileUpload
                      label="GST Details"
                      id="gst"
                      name={"gstDocument"}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-4">
                    <CustomDropdown
                      require={require}
                      label="location"
                      optionData={locationData}
                      onChange={(values) =>
                        setFormData((prev) => ({
                          ...prev,
                          location: values[0].value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-lg-12">
                    <CustomTextArea
                      label="Address"
                      value={formData.address}
                      name={"address"}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    {addContact.map((item, index) => {
                      const { name, mobile, email } = item;
                      return (
                        <div
                          key={index}
                          className={
                            index < addContact.length - 1 &&
                            addContact.length > 1
                              ? "row border-bottom mb-4 pb-3"
                              : "row"
                          }
                        >
                          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <CustomInput
                              require={require}
                              label="Contact Person Name"
                              inputType="text"
                              id="#vendorMobile"
                              name="name"
                              placeholder="Enter Contact Person Name."
                              value={name}
                              onChange={(e) =>
                                multiChangeHandler(
                                  e,
                                  index,
                                  addContact,
                                  setAddContact
                                )
                              }
                            />
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <CustomInput
                              inputType="number"
                              require={require}
                              label="Mobile No"
                              id="#vendorMobile"
                              name="mobile"
                              placeholder="Enter Contact Person Mobile No."
                              value={mobile}
                              onChange={(e) =>
                                multiChangeHandler(
                                  e,
                                  index,
                                  addContact,
                                  setAddContact
                                )
                              }
                            />
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <CustomInput
                              require={require}
                              label="Email Id"
                              inputType="text"
                              id="#vendorEmail"
                              name="email"
                              placeholder="Enter Contact Person Email"
                              value={email}
                              onChange={(e) =>
                                multiChangeHandler(
                                  e,
                                  index,
                                  addContact,
                                  setAddContact
                                )
                              }
                            />
                          </div>

                          {index > 0 && (
                            <div className="col-12">
                              <button
                                type="button"
                                className="btn btn-danger float-right ml-3 mb-3"
                                onClick={handleRemoveContact}
                              >
                                <i className="fas fa-trash"></i> Delete item
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <button
                      type="button"
                      className="btn btn-primary float-right"
                      onClick={handleAddContact}
                    >
                      <i className="fas fa-plus"></i> Add item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Agreement Details</h3>
              </div>
              <div className="card-body row">
                <div className="col-lg-4">
                  <CustomDatePicker
                    require={require}
                    label="Agreement Start Date"
                    placeholder="Enter Agreement Start Date"
                    name={"agreementStartDate"}
                    value={formData.agreementStartDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <CustomDatePicker
                    require={require}
                    label="Agreement End Date"
                    placeholder="Enter Agreement End Date"
                    name={"agreementEndDate"}
                    value={formData.agreementEndDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="text-bold">
                    Bank Document
                    <span className="text-danger">*</span>
                  </label>
                  <CustomFileUpload
                    label="Agreement Document"
                    name={"agreementDocument"}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Lane Details</h3>
              </div>
              <div className="card-body">
                {laneDetails.map((item, index) => {
                  const {
                    expressRate,
                    superExpressRate,
                    destinationRate,
                    loadingCharges,
                    loadingRate,
                    unLoadingRate,
                    unloadingCharges,
                    miscellaneousCarges,
                    miscellaneousRemarks,
                  } = item;
                  return (
                    <Fragment key={index}>
                      <div className="row">
                        <div className="col-lg-4">
                          <CustomDropdown
                            require={require}
                            label="Lane Name"
                            optionData={laneData}
                            // value={showLaneDetails}
                            onChange={(values) =>
                              handleLaneNameSelect(values, index)
                            }
                          />
                        </div>
                        {index > 0 && (
                          <div className="col-lg-8 mt-4 pt-2">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={handleLaneNameDelete}
                              disabled={isDisabled}
                            >
                              <i className="fas fa-trash mr-2"></i>Delete item
                            </button>
                          </div>
                        )}
                      </div>

                      {selectedOption.index === index &&
                        selectedOption.expand && (
                          <div className="row mt-3">
                            <div className="col-lg-4">
                              <CustomInput
                                inputType="number"
                                require={require}
                                label="Express mode rate additional"
                                id="expressModeRateAdditional"
                                placeholder="Enter Amount"
                                name="expressRate"
                                value={expressRate}
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
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
                                value={superExpressRate}
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
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
                                value={destinationRate}
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
                              />
                            </div>
                            <div className="col-lg-4">
                              <CustomInput
                                inputType="number"
                                require={require}
                                label="Multiple loading location rate additional"
                                id="multipleLoadingLocationRateAdditional"
                                placeholder="Enter amount"
                                value={loadingRate}
                                name="loadingRate"
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
                              />
                            </div>

                            <div className="col-lg-4">
                              <CustomInput
                                inputType="number"
                                require={require}
                                label="Multiple unloading location rate additional"
                                id="multipleUnloadingLocationRateAdditional"
                                placeholder="Enter amount"
                                value={unLoadingRate}
                                name="unLoadingRate"
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
                              />
                            </div>
                            <div className="col-lg-4">
                              <CustomInput
                                inputType="number"
                                require={require}
                                label="Loading charges"
                                id="loadingCharges"
                                placeholder="Enter amount"
                                value={loadingCharges}
                                name="loadingCharges"
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
                              />
                            </div>
                            <div className="col-lg-4">
                              <CustomInput
                                inputType="number"
                                require={require}
                                label="Unloading charge"
                                id="unloadingCharge"
                                placeholder="Enter amount"
                                value={unloadingCharges}
                                name="unloadingCharges"
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
                              />
                            </div>
                            <div className="col-lg-4">
                              <CustomInput
                                inputType="number"
                                require={require}
                                label="miscellaneous charges"
                                id="miscellaneousCharges"
                                placeholder="Enter amount"
                                value={miscellaneousCarges}
                                name={"miscellaneousCarges"}
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
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
                                value={miscellaneousRemarks}
                                onChange={(e) =>
                                  multiChangeHandler(
                                    e,
                                    index,
                                    laneDetails,
                                    setLaneDetails
                                  )
                                }
                              />
                            </div>
                          </div>
                        )}
                    </Fragment>
                  );
                })}

                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={handleLaneAdd}
                    disabled={isDisabled}
                  >
                    <i className="fas fa-plus"></i> Add New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center">
          <button className="btn btn-primary px-4 py-3" type="submit">
            <h6 className="mb-0 text-uppercase">Submit</h6>
          </button>
          <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
            <h6 className="mb-0 text-uppercase">reset</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorMasterAdd;
