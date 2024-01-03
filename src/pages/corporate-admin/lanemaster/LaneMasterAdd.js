import React, { useState } from 'react'
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import CustomFileUpload from '../../../components/common/CustomFileUpload/CustomFileUpload';
import CustomDatePicker from '../../../components/common/CustomDatePicker/CustomDatePicker';
import CustomDropdown from '../../../components/common/CustomDropdown/CustomDropdown';
import CustomMonthYear from '../../../components/common/CustomMonthYear/CustomMonthYear';
import CustomRadio from '../../../components/common/CustomRadio/CustomRadio';


const LaneMasterAdd = () => {
   const [fuelType, setFuelType] = useState(true);
   const [tyreSelect, setTyreSelected] = useState("");
   const [makeSelect, setMake] = useState("");
   const [tonnageSelect, setTonnage] = useState("");
   const [vehicleSelect, setVehicleCategory] = useState("");
   const [serviceSelect, setServiceRecord] = useState("");

   const [tyreAdd, setTyreAdd] = useState([{ selectedFile: "", tyreType: "" }]);
   const [serviceBillAdd, setServiceBillAdd] = useState([
      { selectedBillFile: "", serviceRecord: "" },
   ]);

   const handleServiceBill = () => {
      setServiceBillAdd([
         ...serviceBillAdd,
         { selectedBillFile: "", serviceRecord: "" },
      ]);
   };
   const handleServiceBillDelete = () => {
      if (serviceBillAdd.length > 1) {
         const updatedServiceBill = serviceBillAdd.slice(0, -1); // Removes the last element
         setServiceBillAdd(updatedServiceBill);
      }
   };
   const handleTyreAdd = () => {
      setTyreAdd([...tyreAdd, { selectedFile: "", tyreType: "" }]);
   };
   const handleTyreDelete = () => {
      if (tyreAdd.length > 1) {
         const updatedTyreAdd = tyreAdd.slice(0, -1); // Removes the last element
         setTyreAdd(updatedTyreAdd);
      }
   };
   return (
      <div>
         <form className="p-5 shadow-lg">
            <h1 className="mb-4 text-center">Lane Master</h1>
            <div className="row">
               <div className="col-lg-4">
                  <div className="card card-primary">
                     <div className="card-header">
                        <h3 className="card-title">Add Lane Master</h3>
                     </div>
                     <div className="card-body">
                        <CustomDropdown
                           label="Lane Name"
                           optionData={["Select", "customer1", "customer2", "customer3"]}
                           value={makeSelect}
                           onChange={(event) => setMake(event.target.value)}
                        />

                        {/* Dimension  */}
                        <CustomDropdown
                           label="Vendor Name"
                           optionData={["NA", "customer1", "customer2", "customer3"]}
                           value={makeSelect}
                           onChange={(event) => setMake(event.target.value)}
                        />

                        {/* Financed by sec */}
                        <CustomInput
                           label="Origin"
                           id="#Origin"
                           placeholder="Enter Origin"
                        />

                        <CustomInput
                           label="Destination"
                           id="#Destination"
                           placeholder="Enter Destination"
                        />
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
            </div>
         </form>
      </div>
   )
}

export default LaneMasterAdd
