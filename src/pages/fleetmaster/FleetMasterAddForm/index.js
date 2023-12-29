import React from "react";
import CustomInput from '../../../components/common/CustomInput';
import CustomDatePicker from "../../../components/common/CustomDatePicker";
import CustomRadio from "../../../components/common/CustomRadio";
import CustomFileUpload from "../../../components/common/CustomFileUpload";
import CustomDropdown from "../../../components/common/CustomDropdown";

function FleetMasterAddForm() {
  return (
    <div className="container py-5">
      <form className="p-5 shadow-lg">        
         <h1 className="mb-4">Add Fleet Master</h1>
        <div className="row">
          <div className="col-lg-6">
            <CustomInput label='Vehicle owner name' id="#vehicleOwner" inputType='text' placeholder='Enter vehicle owner name'/>
            <h3 class="card-title mb-3 fw-bold">EMI Schedule</h3>
            <CustomFileUpload />
            <CustomDatePicker label='Start date' inputType='text' placeholder='Enter vehicle owner name'/>
            <CustomDatePicker label='Vehicle owner name' inputType='text' placeholder='Enter vehicle owner name'/>


            <CustomInput label='Vehicle owner name' inputType='text' placeholder='Enter vehicle owner name'/>
            <CustomInput />
            <CustomDatePicker />
            <CustomFileUpload />
            <CustomDropdown />
            <CustomRadio />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FleetMasterAddForm;
