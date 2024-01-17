import React, { useState } from 'react'
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import CustomDropdown from '../../../components/common/CustomDropdown/CustomDropdown';
import BodyHeader from '../../../components/common/CommonBodyHeader';
import selectOptionData from '../../../constansts/LocalData';


const LaneMasterAdd = () => {
   const [makeSelect, setMake] = useState("");
   const [isDisabled, setIsdisabled] = useState(true);

   const [tyreAdd, setTyreAdd] = useState([{ selectedFile: "", tyreType: "" }]);
   const [serviceBillAdd, setServiceBillAdd] = useState([
      { selectedBillFile: "", serviceRecord: "" },
   ]);
   
   const handleSelectChange = (selected) => {
      setMake(selected[0].value);
      if (selected[0].value === 'NA') {
         setIsdisabled(false)
      }else{
         setIsdisabled(true)
      }
   };
   return (
      <div>
         <BodyHeader title="Add Lane Master" />
         <form className="p-3 shadow-lg">
            <div className="card card-primary">
               <div className="card-header">
                  <h3 className="card-title">Personal Details</h3>
               </div>
               <div className="card-body">
                  <div className="row">
                     <div className="col-lg-4">
                        <CustomDropdown
                           label="Lane Name"
                           optionData={selectOptionData}
                           value={makeSelect}
                        // onChange={(event) => setMake(event.target.value)}
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Dimension  */}
                        <CustomDropdown
                           label="Vendor Name"
                           optionData={selectOptionData}
                           value={makeSelect}
                           onChange={handleSelectChange}
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Financed by sec */}
                        <CustomDropdown
                           label="Origin"
                           optionData={selectOptionData}
                           value={makeSelect}
                           disabled={isDisabled}
                           onChange={handleSelectChange}
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomDropdown
                           label="Destination"
                           optionData={selectOptionData}
                           value={makeSelect}
                           disabled={isDisabled}
                           onChange={handleSelectChange}
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Driver Trip Advance"
                           id="#tripadvance"
                           disabled={isDisabled}
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Trip Diesel budget (ltr)"
                           id="#dieselBudget"
                           disabled={isDisabled}
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Trip Adblue budget (ltr)"
                           id="#adblueBudget"
                           disabled={isDisabled}
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Trip Toll"
                           id="#tripToll"
                           disabled={isDisabled}
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Vehicle Type  */}
                        <CustomDropdown
                           label="Vehicle Type"
                           optionData={selectOptionData}
                           value={makeSelect}
                           disabled={isDisabled}
                        // onChange={(event) => setMake(event.target.value)}
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Tonnage */}
                        <CustomDropdown
                           label="Tonnage"
                           optionData={selectOptionData}
                           value={makeSelect}
                           disabled={isDisabled}
                        // onChange={(event) => setMake(event.target.value)}
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Customer Name (Including broker)"
                           id="#nameBroker"
                           disabled={isDisabled}
                           placeholder="Broker"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="TAT (in Hrs)"
                           id="#tat"
                           disabled={isDisabled}
                           inputType="number"
                           placeholder="2 Hrs"
                        />
                     </div>
                  </div>
               </div>

            </div>
            <div className="col-12 mt-3 text-center">
               <button className="btn btn-primary px-4 py-3" type="submit">
                  <h5 className="mb-0 text-uppercase">Submit</h5>
               </button>
               <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                  <h5 className="mb-0 text-uppercase">reset</h5>
               </button>
            </div>
         </form>
      </div>
   )
}

export default LaneMasterAdd
