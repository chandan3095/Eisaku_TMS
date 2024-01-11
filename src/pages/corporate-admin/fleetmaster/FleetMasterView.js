import React, { useState } from "react";
import BodyHeader from "../../../components/common/CommonBodyHeader";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router";
import CustomToggleSwitch from "../../../components/common/CustomToggle";
import CustomDatePicker from "../../../components/common/CustomDatePicker/CustomDatePicker";
import CustomFileUpload from "../../../components/common/CustomFileUpload/CustomFileUpload";
import CustomRadio from "../../../components/common/CustomRadio/CustomRadio";
import CustomMonthYear from "../../../components/common/CustomMonthYear/CustomMonthYear";
import CustomDropdown from "../../../components/common/CustomDropdown/CustomDropdown";
import selectOptionData, { fleetMasterFormTitle } from "../../../constansts/LocalData";

const FleetMasterView = () => {

   const [fuelType, setFuelType] = useState("Diesel");
   const [tyreType, setTyreType] = useState("");
   const [makeSelect, setMake] = useState("");
   const [tonnageSelect, setTonnage] = useState("");
   const [vehicleSelect, setVehicleCategory] = useState("");
   const [tyreAdd, setTyreAdd] = useState([{ selectedFile: "", tyreType: "" }]);
   const [serviceBillAdd, setServiceBillAdd] = useState([
      { selectedBillFile: "", serviceRecord: "" },
   ]);
   const [maintenanceBudget, setMaintenanceBudget] = useState([{}]);

   const [currentTabIndex, setCurrentTabIndex] = useState(0);
   console.log(currentTabIndex, 'currentTabIndex');
   const maintenanceBudgetAdd = () => {
      setMaintenanceBudget([
         ...maintenanceBudget,
         { selectedBillFile: "", serviceRecord: "" },
      ]);
   };
   const maintenanceBudgetDelete = (index) => {
      const updatedMaintenanceBudget = [...maintenanceBudget];
      updatedMaintenanceBudget.splice(index, 1);
      setMaintenanceBudget(updatedMaintenanceBudget);
   };

  return (
    <div>
     </div>
  );
};

export default FleetMasterView;