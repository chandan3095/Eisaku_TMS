import React from "react";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomRadio from "../../../components/common/CustomRadio/CustomRadio";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";

function FleetMasterAddForm() {
  return (
    <div className="container-fluid py-5">
      <form className="p-5 shadow-lg">
        <h1 className="mb-4">Add Fleet Master</h1>
        <div className="row">
          <div className="col-lg-4">
            <CustomInput
              label="Vehicle owner name"
              id="#vehicleOwner"
              inputType="text"
              placeholder="Enter vehicle owner name"
            />

            {/* Dimension  */}
              <CustomInput
                label="Dimension(L B H (ft))"
                id="#dimension"
                inputType="text"
                placeholder="Enter L B H (ft)"
              />

            {/* Financed by sec */}
            <CustomInput
              label="Financed by"
              id="#financedBy"
              inputType="text"
              placeholder="Enter name"
            />

          </div>
          <div className="col-lg-4">
            {/* Emi Sec */}
            <label class="text-bold">EMI Schedule</label>
            <CustomFileUpload />
            <CustomDatePicker
              label="Start date"
              inputType="text"
              placeholder="Enter vehicle owner name"
            />
            <CustomDatePicker
              label="End date"
              inputType="text"
              placeholder="Enter vehicle owner name"
            />
            <CustomInput
              label="Amount"
              id="emiAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
          </div>

            {/* Fitness Certificate Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Fitness Certificate</label>
            <CustomFileUpload />
            <CustomDatePicker
              label="Expiry Date"
              inputType="text"
              placeholder="Enter Expiry Date"
            />            
            <CustomInput
              label="Amount"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
            </div>

            {/* Insurance Certificate Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Insurance Certificate</label>
            <CustomFileUpload />
            <CustomDatePicker
              label="Expiry Date"
              inputType="text"
              placeholder="Enter Expiry Date"
            />            
            <CustomInput
              label="Amount"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
            </div>            

            {/* Local Permit Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Local Permit</label>
            <CustomFileUpload />
            <CustomDatePicker
              label="Expiry Date"
              inputType="text"
              placeholder="Enter Expiry Date"
            />            
            <CustomInput
              label="Amount"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
            </div>

            {/* National Permit Sec */}
            <div className="col-lg-4">
            <label class="text-bold">National Permit</label>
            <CustomFileUpload />
            <CustomDatePicker
              label="Expiry Date"
              inputType="text"
              placeholder="Enter Expiry Date"
            />            
            <CustomInput
              label="Amount"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
            </div>

            {/* PUC Sec */}
            <div className="col-lg-4">
            <label class="text-bold">PUC</label>
            <CustomFileUpload />
            <CustomDatePicker
              label="Expiry Date"
              inputType="text"
              placeholder="Enter Expiry Date"
            />            
            <CustomInput
              label="Amount"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
            </div>

            {/* Vehicle No Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Vehicle No</label>
            <CustomFileUpload />
            </div>

            {/* Vehicle No Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Chasis No</label>
            <CustomFileUpload />
            </div>

            {/* Vehicle No Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Engine No</label>
            <CustomFileUpload />
            </div>

            {/* Make Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Make</label>
            <CustomFileUpload />

            <CustomDropdown selected='' optionData={[]}/>

            </div>

            {/* Model Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Model</label>
            <CustomFileUpload />
            </div>

            {/* Fuel Type Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Fuel Type</label>
            <CustomFileUpload />
            <CustomRadio />
            </div>

            {/* Fuel Type Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Fuel Type</label>
            <CustomFileUpload />
            <CustomRadio />
            </div>

            {/* Fuel Type Sec */}
            <div className="col-lg-4">
            <label class="text-bold">MV Tax</label>
            <CustomFileUpload />
            <CustomDatePicker
              label="Expiry Date"
              inputType="text"
              placeholder="Enter Expiry Date"
            />            
            <CustomInput
              label="Amount"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
            </div>

            {/* GPS Sec */}
            <div className="col-lg-4">
            <CustomInput
              label="GPS Provider Name"
              id="#gpsProvider"
              inputType="text"
              placeholder="Enter GPS Provider Name"
            />
            <CustomInput
              label="Amount"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Amount"
            />
            </div>

            {/* Fastag bank name Sec */}
            <div className="col-lg-4">
            <CustomInput
              label="Fastag bank name"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Fastag bank name"
            />
            </div>

            {/* Body Maker Sec */}
            <div className="col-lg-4">
            <CustomInput
              label="Fabricator Name"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Fabricator Name"
            />
            <CustomInput
              label="Fabricator Location"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Fabricator Location"
            />
            </div>

            {/* Vehicle Category Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Vehicle Category</label>
            <CustomDropdown selected='' optionData={['20ft', '22ft', '24ft', '32ft SXL', '32ft MXL', 'Any Other']}/>
            </div>
            
            {/* Tonnage Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Tonnage</label>
            <CustomDropdown selected='' optionData={['20ft', '22ft', '24ft', '32ft SXL', '32ft MXL', 'Any Other']}/>
            </div>

            {/* Service Record Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Service Record</label>
            <CustomDropdown selected='' optionData={['Odometer reeding', 'Service date', 'Service Amount', 'Service Station Name']}/>
            <CustomFileUpload />
            </div>

            {/* Tyre Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Tyre</label>
            <CustomDropdown selected='' optionData={['Odometer reading', 'Tyre Type (New/Remold) Nylon/Radial', 'Tyre Change date', 'Tyre Amount', 'Tyre Station Name']}/>
            <label class="text-bold">Bill upload along with warranty status</label>
            <CustomFileUpload />
            </div>


            {/* Tyre Sec */}
            <div className="col-lg-4">
            <label class="text-bold">Monthly Maintenance Budget (vehicle wise)</label>
            <CustomInput
              label="Fabricator Location"
              id="fitnessAmount"
              inputType="text"
              placeholder="Enter Fabricator Location"
            />
            <label class="text-bold">Bill upload along with warranty status</label>
            <CustomFileUpload />
            </div>
          
        </div>
      </form>
    </div>
  );
}

export default FleetMasterAddForm;
