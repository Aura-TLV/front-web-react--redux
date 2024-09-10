import { configureStore } from '@reduxjs/toolkit';
import candidateReducer from './slices/candidateSlice';

const store = configureStore({
  reducer: {
    candidate: candidateReducer,
  },
});

export default store;
