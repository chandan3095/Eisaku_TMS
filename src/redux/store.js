
// store.js

import { configureStore } from "@reduxjs/toolkit";
import addUserReducer from "../reducer/AddUserReducer";
import loginReducer from "../redux/features/loginSlice";
import DriveMasterReducer from "../reducer/DriveMasterReducer";

const store = configureStore({
   reducer: {
      addUser: addUserReducer,
      loginReducer: loginReducer,
      driveMaster: DriveMasterReducer,
      // Add other reducers here if you have more slices of state
   },
});

export default store;
