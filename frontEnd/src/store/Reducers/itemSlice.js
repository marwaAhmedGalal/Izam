import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Dashboard',
  },
  {
    id: 2,
    title: 'Job application',
    children: [
      { title: 'John Doe' },
      { title: 'James Bond' },
    ],
  },
  {
    id: 3,
    title: 'Qualifications',
    children: [
      { title: 'Java Script' },
      { title: 'React' },
    ],
  },
  {
    id: 4,
    title: 'About',
  },
  {
    id: 5,
    title: 'Contact',
  },
];

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setitems: (state, action) => {
      return action.payload;
    },
    updateitemList: (state, action) => {
      const { activeId, overId } = action.payload;
      const activeIndex = state.findIndex((item) => item.id === activeId);
      const overIndex = state.findIndex((item) => item.id === overId);
      if (activeIndex !== -1 && overIndex !== -1) {
        const updatedItem = [...state];
        const [moveditem] = updatedItem.splice(activeIndex, 1);
        updatedItem.splice(overIndex, 0, moveditem);
        return updatedItem;
      }
      return state;
    },
    updateTitle: (state, action) => {
      const { id, newTitle } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.title = newTitle;  // Update the title of the item
      }
    },
  },
});

export const { setitems, updateitemList, updateTitle } = itemSlice.actions;
export default itemSlice.reducer;
