import React, { useState } from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import MultipleFileUpload from "../../../components/common/MultipleFileUpload/MultipleFileUpload";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import { locationData } from "../../../constansts/LocalData";
import CustomTextArea from "../../../components/common/CustomTextArea/CustomTextArea";
const VendorMasterAdd = () => {
    const [addContact, setAddContact] = useState([""]);
    const [laneNameSelect, setlaneNameSelect] = useState([""]);

    const handleAddContact = () => {
        setAddContact([...addContact, ""]);
    };
    const handleRemoveContact = (index) => {
        const updatedContacts = [...addContact];
        updatedContacts.splice(index, 1);
        // console.log(updatedContacts);
        setAddContact(updatedContacts);
    };
    const [isDisabled, setIsdisabled] = useState(true);
    // Lane Name Details
    const handleLaneNameSelect = () => {
        setSelectedOption(false);
        setlaneNameSelect([...laneNameSelect, { enterLaneName: "" }]);
    };
    
    const destinationData = [
        {
            label: "Lane 1",
            value: "Lane 1",
        },
        {
            label: "Lane 2",
            value: "Lane 2",
        },
        {
            label: "Lane 3",
            value: "Lane 3",
        },
        {
            label: "Lane 4",
            value: "Lane 4",
        },
    ];

    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (selected) => {
        setSelectedOption(selected[0].value);
        setIsdisabled(false)
        // console.log(selected[0].value);
    };
    const handleLaneNameDelete = (index) =>{
        const updatedLaneSelect = [...laneNameSelect];
        updatedLaneSelect.splice(index, 1);
        // console.log(updatedLaneSelect);
        setlaneNameSelect(updatedLaneSelect);
    }
    return (
        <div>
            <BodyHeader title="Add Vendor Master" />
            <form className="p-3 shadow-lg">
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
                                            name="vendorName"
                                            placeholder="Enter Vendor Name"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <CustomInput
                                        require={require}
                                            label="Account Number"
                                            id="AccountNumber"
                                            placeholder="Enter Account Number"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <CustomInput
                                        require={require}
                                            label="Bank name"
                                            id="bankName"
                                            placeholder="Enter Bank Name"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <CustomInput
                                        require={require}
                                            label="IFSC Code"
                                            id="ifscCode"
                                            placeholder="Enter IFSC Code"
                                        />
                                    </div>

                                    <div className="col-lg-4">
                                        <CustomInput
                                        require={require}
                                            label="Account Holder Name"
                                            id="accountHolderName"
                                            placeholder="Enter Account Holder name"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="text-bold">Bank Document
                                        <span className="text-danger">*</span>
                                        </label>
                                        <CustomFileUpload
                                            label="Bank Details"
                                            id="bankDetails"
                                            name="bankDetails"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <CustomInput
                                        require={require}
                                            label="GST Number"
                                            id="gstNumber"
                                            placeholder="Enter GST Number"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="text-bold">GST Document
                                        <span className="text-danger">*</span>
                                        </label>
                                        <CustomFileUpload
                                            label="GST Details"
                                            id="gst"
                                            name="gst"
                                        />
                                    </div>

                                    <div className="col-lg-4">
                                        <CustomDropdown 
                                        require={require}
                                        label="location"
                                        optionData={locationData}
                                            // value={showLaneDetails}
                                        onChange={handleSelectChange} />
                                    </div>
                                    <div className="col-lg-12">
                                       <CustomTextArea
                                       label="Address"
                                       />
                                    </div>
                                    <div className="col-12">
                                        {addContact.map((item, index) => {
                                            const { name, contact, email } = item;
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
                                                            inputType="number"
                                                            id="#vendorMobile"
                                                            name="vendorMobile"
                                                            placeholder="Enter Contact Person Name."
                                                            value={contact}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                        <CustomInput
                                                        require={require}
                                                            label="Mobile No"
                                                            inputType="number"
                                                            id="#vendorMobile"
                                                            name="vendorMobile"
                                                            placeholder="Enter Contact Person Mobile No."
                                                            value={contact}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                        <CustomInput
                                                        require={require}
                                                            label="Email Id"
                                                            inputType="text"
                                                            id="#vendorEmail"
                                                            name="vendorEmail"
                                                            placeholder="Enter Contact Person Email"
                                                            value={email}
                                                        />
                                                    </div>

                                                    {index > 0 && (
                                                        <div className="col-12">
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger float-right ml-3 mb-3"
                                                                onClick={
                                                                    handleRemoveContact
                                                                }
                                                            >
                                                                <i className="fas fa-trash"></i>{" "}
                                                                Delete item
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
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <CustomDatePicker
                                    require={require}
                                        label="Agreement End Date"
                                        placeholder="Enter Agreement End Date"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <MultipleFileUpload label="Agreement Document" />
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
                                {laneNameSelect.map((item, index) => (
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <CustomDropdown
                                                require={require}
                                                label="Lane Name"
                                                optionData={destinationData}
                                                // value={showLaneDetails}
                                                onChange={handleSelectChange}
                                            />
                                        </div>
                                        {index > 0 &&
                                            <div className="col-lg-8 mt-4 pt-2">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={handleLaneNameDelete}
                                                disabled={isDisabled}
                                            ><i className="fas fa-trash mr-2"></i>Delete item
                                            </button>
                                            </div>
                                        }
                                    </div>
                                ))}

                                {selectedOption && (

                                    <div className="row mt-3">
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="Express mode rate additional"
                                                id="expressModeRateAdditional"
                                                placeholder="Enter Amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={formik.values.expressModeRateAdditional}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="Super express mode rate additional"
                                                id="superExpressModeRateAdditional"
                                                placeholder="Enter amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={
                                            //   formik.values.superExpressModeRateAdditional
                                            // }
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="Detention rate additional"
                                                id="detentionRateAdditional"
                                                placeholder="Enter amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={formik.values.detentionRateAdditional}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="Multiple loading location rate additional"
                                                id="multipleLoadingLocationRateAdditional"
                                                placeholder="Enter amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={
                                            //   formik.values
                                            //     .multipleLoadingLocationRateAdditional
                                            // }
                                            />
                                        </div>

                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="Multiple unloading location rate additional"
                                                id="multipleUnloadingLocationRateAdditional"
                                                placeholder="Enter amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={
                                            //   formik.values
                                            //     .multipleUnloadingLocationRateAdditional
                                            // }
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="Loading charges"
                                                id="loadingCharges"
                                                placeholder="Enter amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={formik.values.loadingCharges}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="Unloading charge"
                                                id="unloadingCharge"
                                                placeholder="Enter amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={formik.values.unloadingCharge}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="miscellaneous charges"
                                                id="miscellaneousCharges"
                                                placeholder="Enter amount"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={formik.values.miscellaneousCharges}
                                            />
                                        </div>
                                        <div className="col-lg-4">
                                            <CustomInput
                                            require={require}
                                                label="miscellaneous Remarks"
                                                id="miscellaneousRemarks"
                                                placeholder="Enter remarks"
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // value={formik.values.miscellaneousRemarks}
                                            />
                                        </div>

                                    </div>
                                )}
                                <div className="text-right">
                                    <button
                                        type="button"
                                        className="btn btn-primary float-right"
                                        onClick={handleLaneNameSelect}
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
