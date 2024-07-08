'use client'
import React, {useEffect, useState} from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from '..';


interface TaskInterface {
    id : number,
    list_desc : string
}

export default function index({tasks}:{tasks : TaskInterface[]}) {
  const [items, setItems] = useState<TaskInterface[]>(tasks);

  useEffect(()=>{
    setItems(tasks)
  },[tasks])

  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event:DragEndEvent) {
    const {active, over} = event;
    
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item =>item.id === active.id);
        const newIndex = items.findIndex(item =>item.id === over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map(item => <SortableItem key={item.id} id={item.id} list_desc={item.list_desc} />)}
      </SortableContext>
    </DndContext>
  );
  
  
}