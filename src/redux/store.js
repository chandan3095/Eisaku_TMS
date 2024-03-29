// store.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addUserReducer from "../reducer/AddUserReducer";
import loginReducer from "../redux/features/loginSlice";
import DriveMasterReducer from "../reducer/DriveMasterReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import listUserSlice from "./features/listUserSlice";
import locationMasterReducer from "../redux/features/location-master/addLocationMasterSlice";
import locationMasterListSlice from "../redux/features/location-master/listLocationMasterSlice";
import locationMasterSingleListSlice from "../redux/features/location-master/singleListLocationMasterSlice";
import fleetMasterReducer from "./features/fleetMaster";
import driverMasterReducer from "./features/driverMaster";
import customerMasterReducer from "./features/customerMaster";
import laneMasterReducer from "./features/laneMaster";
import helperReducer from "./features/helperSlice";
import helperMasterReducer from "./features/helperMaster";
import vendorMasterReducer from "./features/vendorMaster";
import contractorMasterAddSlice from "./features/contractor-master/contractorMasterAddSlice";
import contractorMasterListSlice from "./features/contractor-master/contractorMasterListSlice";
import singleContractorContactDetailsSlice from "./features/contractor-master/singleContractorContactDetailsSlice";

const rootReducer = combineReducers({
   addUser: addUserReducer,
   listUser: listUserSlice,
   loginReducer: loginReducer,
   driveMaster: DriveMasterReducer,
   locationMasterReducer: locationMasterReducer,
   locationMasterListSlice: locationMasterListSlice,
   locationMasterSingleListSlice: locationMasterSingleListSlice,
   fleetMaster: fleetMasterReducer,
   driverMaster: driverMasterReducer,
   customerMaster: customerMasterReducer,
   laneMaster: laneMasterReducer,
   helper: helperReducer,
   helperMaster: helperMasterReducer,
   vendorMaster: vendorMasterReducer,
   contractorMasterAddSlice: contractorMasterAddSlice,
   contractorMasterListSlice: contractorMasterListSlice,
   singlecontractorContactDetailsSlice: singleContractorContactDetailsSlice,
});

const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
   reducer: persistedReducer,
});
export const persistor = persistStore(store);

export default store;
