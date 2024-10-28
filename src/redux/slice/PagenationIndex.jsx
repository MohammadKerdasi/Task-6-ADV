import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  postsPerPage: 6,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetPagination: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { nextPage, prevPage, setPage, resetPagination } =
  paginationSlice.actions;

export default paginationSlice.reducer;
