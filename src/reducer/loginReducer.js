import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userList: [],
}
const userLoginSlice = createSlice({
   name: 'USER_LOGIN',
   initialState: initialState,
   reducers: {
      userLogin: (state, action) => {
         state.data = action.payload;
         state.error = null
      },

      // editUser: (state, action) => {
      //    state.userList = state.userList.map((item) => {
      //       if (item.mobileNo === action.payload.mobileNo) {
      //          return action.payload
      //       }
      //       return item
      //    })
      // },

   }
}
)


export const { userLogin } = userLoginSlice.actions;

export default userLoginSlice.reducer;