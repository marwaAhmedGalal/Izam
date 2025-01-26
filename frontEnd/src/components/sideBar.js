import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export const items = [
 
  {
    segment: 'dashboard',
    title: 'Dashboard',
  },

  {
    segment: 'Job application',
    title: 'Job application',
    children: [
      {
        segment: 'John Doe',
        title: 'John Doe',
      },
      {
        segment: 'James Bond',
        title: 'James Bond',
      },
    ],
  },
  {
    segment: 'Qualifications',
    title: 'Qualifications',
    children: [
      {
        segment: 'Java Script',
        title: 'Java Script',
      },
      {
        segment: 'React',
        title: 'React',
      },
    ],
  },
  {
    segment: 'About',
    title: 'About',
  },

  {
    segment: 'Contact',
    title: 'Contact',
  },
];

const SortableUser = ({ item }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ title: item.title });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="item"
    >
      {item.title}
    </div>
  );
};

const SideBar = () => {
  const [items, setItems] = useState(items);
 console.log(items)

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.title === over.title) {
      return;
    }
    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.title === active.title);
      const newIndex = items.findIndex((item) => item.title === over.title);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <div>
    
      <div>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableUser key={item.title} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
export default SideBar;