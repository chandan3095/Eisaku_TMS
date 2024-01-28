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
