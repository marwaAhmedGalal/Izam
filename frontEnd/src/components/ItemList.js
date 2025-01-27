import { useDispatch, useSelector } from 'react-redux';
import { setitems, updateitemList, updateNavData } from '../store/Reducers/itemSlice';
import ItemCom from './ItemCom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { memo, useEffect } from 'react';
import axios from 'axios';

const ItemList = memo(() => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.items.items);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      dispatch(updateitemList({ activeId: active.id, overId: over.id }));
      dispatch(updateNavData(itemList));
    }
  };

  const handleSaveClick = async () => {
    try {
      await dispatch(updateNavData(itemList));
    } catch (error) {
      console.error('Error updating navigation data:', error);
    }
  };

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/nav');
        dispatch(setitems(response.data));
      } catch (error) {
        console.error('Failed to fetch navigation data', error);
      }
    };

    fetchNavData();
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto grid gap-2 my-10 ">
      <div className="menu">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div >
          <Link to="/" onClick={handleSaveClick}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          </Link>
          <ListItemIcon>
            <CancelIcon />
          </ListItemIcon>
        </div>
      </div>
      <div className='editedList'>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext
            items={itemList.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {itemList.map((item) => (
              <ItemCom key={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
});

export default ItemList;
