import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, TextField } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../store/Reducers/itemSlice';
import { useCallback } from 'react';

const ItemCom = ({ item }) => {
  const { id, title } = item;
  console.log(item)
  const dispatch = useDispatch();

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });


  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };


  const handleTitleChange = useCallback((event) => {
    dispatch(updateTitle({ id, newTitle: event.target.value }));
  }, [id, dispatch]);


  return (
    <div ref={setNodeRef} style={style} className="bg-blue-200 p-4 rounded shadow-md flex justify-between">
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon
              {...listeners}
            >
              <DragIndicatorIcon />
            </ListItemIcon>
            <TextField
              id={id}
              label="Title"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
            />
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default ItemCom;