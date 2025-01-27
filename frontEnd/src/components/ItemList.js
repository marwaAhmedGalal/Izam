import { useDispatch, useSelector } from 'react-redux';
import { updateitemList } from '../store/Reducers/itemSlice';  // Import the action
import ItemCom from './ItemCom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { updateTitle } from '../store/Reducers/itemSlice';  // Import the action

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
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';  // Import useState

const ItemList = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.items);  // Use Redux state for item list
  const [newTitle, setNewTitle] = useState('');  // Manage new title input

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      dispatch(updateitemList({ activeId: active.id, overId: over.id }));
    }
  };

  // Handle the title change when the link is clicked
  const handleLinkClick = () => {
    if (itemList.length > 0 && newTitle.trim()) {
      const firstitem = itemList[0];  // Example: Update the first item
      dispatch(updateTitle({ id: firstitem.id, newTitle }));  // Use dynamic title
    }
  };

  return (
    <div className="max-w-2xl mx-auto grid gap-2 my-10">
      <div className="menu">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div>
          {/* Update title of the first item when this link is clicked */}
          <Link to="/" onClick={handleLinkClick}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          </Link>
          <ListItemIcon>
            <CancelIcon />
          </ListItemIcon>
        </div>
      </div>

      {/* Add a TextField to type the new title */}
    
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={itemList.map((item) => item.id)}  // SortableContext requires item IDs
          strategy={verticalListSortingStrategy}
        >
          {itemList.map((item) => (
            <ItemCom key={item.id} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ItemList;
