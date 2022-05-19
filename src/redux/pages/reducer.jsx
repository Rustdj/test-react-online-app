import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    currentPages: null,
  },
  reducers: {
    setCurrentPages: (state, action) => {
      state.currentPages = action.payload;
    },
  },
});

export const { setCurrentPages } = pagesSlice.actions;
export default pagesSlice.reducer;
