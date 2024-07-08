'use client'
import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { markAsCompletedTask } from '@/lib/actions';
import { HiDotsHorizontal } from "react-icons/hi";
import Link from 'next/link';

export default function index(props:{idList :number,id:number, list_desc : string, isComplete : boolean}) {
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


  const markAsCompleted = ()=>{
    
    markAsCompletedTask(props.idList,props.id)
  }
  
  return (
     <div ref={setNodeRef} style={style}  className='w-full rounded-xl border p-2 my-2 cursor-move' >
     <div className="flex items-center gap-2">
       <div className={`h-full cursor-pointer p-1 border-2 ${props.isComplete ? 'border-green-500':'border-gray-200'} rounded-full aspect-square`} onClick={markAsCompleted}>
        {
          props.isComplete ? 
            <svg className="flex-shrink-0 w-3 h-3 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
          :
          <svg className="flex-shrink-0 w-3 h-3 text-gray-200 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        }
         
       </div>
       <div className='w-full' {...attributes} {...listeners}>
        <p> {props.list_desc}</p>
       </div>
       <div>
          <Link href={`/list/${props.idList}/taskdetail/${props.id}`}>
            <HiDotsHorizontal/>
          </Link>
       </div>
     </div>
   </div>
  );
}