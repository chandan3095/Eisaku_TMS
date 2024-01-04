import React, { useState } from "react";
import CustomInput from "../../../../components/common/CustomInput/CustomInput";
import CustomTextArea from "../../../../components/common/CustomTextArea/CustomTextArea";
import CustomFileUpload from "../../../../components/common/CustomFileUpload/CustomFileUpload";
import BodyHeader from "../../../../components/common/CommonBodyHeader";

function FleetMasterAddForm() {
  const [locationAdd, setLocationAdd] = useState([{ enterLocation: "" }]);
  const [addressAdd, setAddressAdd] = useState([{ enterLocation: "" }]);
  const [agreementAdd, setAgreementAdd] = useState([{ selectFile: "" }]);
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

  // Lane Name Details
  const handleLaneNameAdd = () => {
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

  return (
    <div>
      <BodyHeader title="Add Customer Master"/>
      <form className="p-5 shadow-lg">
        <div className="row">
          <div className="col-lg-4">
            <CustomInput
              label="Customer Name (Including broker)"
              id="customerName"
              placeholder="Enter Customer Name"
            />

            {/* Location  */}
            <div className="">
              {locationAdd.map(() => (
                <CustomTextArea
                  label="Location"
                  id=""
                  placeholder="Enter Location "
                />
              ))}
              <button
                type="button"
                className="btn btn-primary float-right"
                onClick={handleLocationAdd}
              >
                <i className="fas fa-plus"></i> Add Location
              </button>
              {locationAdd.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger float-right mr-3"
                  onClick={handleLocationDelete}
                >
                  <i className="fas fa-trash"></i> Delete Location
                </button>
              )}
            </div>
          </div>

          {/* Agreement Details */}
          <div className="col-lg-4">
            <div className="pb-3">
            {agreementAdd.map(() => (
              <div>
                <label className="text-bold">Agreement Details</label>
                <CustomFileUpload />
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary float-right"
              onClick={handleAgreementAdd}
            >
              <i className="fas fa-plus"></i> Add File
            </button>
            {agreementAdd.length > 1 && (
              <button
                type="button"
                className="btn btn-danger float-right mr-3"
                onClick={handleAgreementDelete}
              >
                <i className="fas fa-trash"></i> Delete File
              </button>
            )}
            </div>

            {/* Address  */}
            <div className="pt-2 d-block">
              {addressAdd.map(() => (
                <CustomTextArea
                  label="Address"
                  id=""
                  placeholder="Enter Address "
                />
              ))}
              <button
                type="button"
                className="btn btn-primary float-right"
                onClick={handleAddressAdd}
              >
                <i className="fas fa-plus"></i> Add Address
              </button>
              {addressAdd.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger float-right mr-3"
                  onClick={handleAddressDelete}
                >
                  <i className="fas fa-trash"></i> Delete Address
                </button>
              )}
            </div>
          </div>

           {/* Contact Person Details  */}
           <div className="col-lg-4">
            {contactPersonAdd.map(() => (
              <div>
                <CustomInput
                  label="Customer Mobile No"
                  id="customerMobileNo"
                  placeholder="Enter Customer Mobile No"
                />
                <CustomInput
                  label="Customer Email Id"
                  id="customerEmailId"
                  placeholder="Enter Customer Email Id"
                />
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary float-right"
              onClick={handleContactPersonAdd}
            >
              <i className="fas fa-plus"></i> Add Contact Person
            </button>
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
          {/* Lane name  */}
          <div className="col-lg-12">
            {laneNameAdd.map(() => (
            <div className="row">
              <div className="col-lg-4">
                <CustomInput
                  label="Customer Name"
                  id="customerName"
                  placeholder="Enter Customer Name"
                />
                </div>
                <div className="col-lg-4">
                <CustomInput
                  label="Origin"
                  id="origin"
                  placeholder="Enter Origin"
                />
                </div>
                <div className="col-lg-4">
                <CustomInput
                  label="Destination"
                  id="destination"
                  placeholder="Enter Destination"
                />
                </div>
                <div className="col-lg-4">
                <CustomInput
                  label="Vehicle Type"
                  id="vehicleType"
                  placeholder="Enter Vehicle Type"
                />
                </div>
                <div className="col-lg-4">
                <CustomInput
                  label="Tonnage"
                  id="tonnage"
                  placeholder="Enter Tonnage"
                />
              </div>
            </div>
            ))}
            <button
              type="button"
              className="btn btn-primary float-right"
              onClick={handleLaneNameAdd}
            >
              <i className="fas fa-plus"></i> Add Lane Name
            </button>
            {laneNameAdd.length > 1 && (
              <button
                type="button"
                className="btn btn-danger float-right mr-3"
                onClick={handleLaneNameDelete}
              >
                <i className="fas fa-trash"></i> Delete Lane Name
              </button>
            )}
          </div>

          <div className="col-12 mt-3 text-center">
            <button className="btn btn-primary px-4 py-3" type="submit">
              <h6 className="mb-0 text-uppercase">Submit</h6>
            </button>
            <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
              <h6 className="mb-0 text-uppercase">reset</h6>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FleetMasterAddForm;
