'use client'
import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export default function index(props:{id:number, list_desc : string}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
     <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='w-full rounded-xl border p-2 my-2 cursor-move' >
     <div className="flex items-center gap-2">
       <div className='h-full cursor-pointer p-1 border-2 border-gray-200 rounded-full aspect-square'>
         <svg className="flex-shrink-0 w-3 h-3 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
       </div>
       <p> {props.list_desc}</p>
     </div>
   </div>
  );
}