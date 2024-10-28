import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './../slice/index';
import paginationReducer from './../slice/PagenationIndex'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    pagination: paginationReducer,
  },
});