import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './Reducers/itemSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer
  },
})