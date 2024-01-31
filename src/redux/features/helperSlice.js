import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backdropLoading: false,
};

const helperSlice = createSlice({
  name: "helperSlice",
  initialState: initialState,

  reducers: {
    backdropLoadingAction: (state, action) => {
      state.backdropLoading = action.payload;
    },
  },
});

export const { backdropLoadingAction } = helperSlice.actions;

const helperReducer = helperSlice.reducer;
export default helperReducer;
