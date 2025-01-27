import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNavData = createAsyncThunk('items/fetchNavData', async () => {
  const response = await axios.get('http://localhost:8081/nav'); 
  return response.data;
});


export const updateNavData = createAsyncThunk('items/updateNavData', async (itemList) => {
  const response = await axios.post('http://localhost:8081/nav', itemList); 
  return response.data;
});

export const updateItemTitle = createAsyncThunk('items/updateItemTitle', async ({ id, title }) => {
  const response = await axios.post('http://localhost:8081/nav', { id, title }); 
  return response.data;
});

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: 'idle', 
    error: null,
  },
  reducers: {
    setitems: (state, action) => {
      state.items = action.payload;
    },
    updateitemList: (state, action) => {
      const { activeId, overId } = action.payload;
      const activeIndex = state.items.findIndex((item) => item.id === activeId);
      const overIndex = state.items.findIndex((item) => item.id === overId);
      if (activeIndex !== -1 && overIndex !== -1) {
        const updatedItem = [...state.items];
        const [moveditem] = updatedItem.splice(activeIndex, 1);
        updatedItem.splice(overIndex, 0, moveditem);
        state.items = updatedItem;
      }
    },
    updateTitle: (state, action) => {
      const { id, newTitle } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.title = newTitle; 
      }
    },
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchNavData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNavData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchNavData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
     
  },
});

export const { setitems, updateitemList, updateTitle } = itemSlice.actions;
export default itemSlice.reducer;
