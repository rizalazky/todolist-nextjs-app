'use client'
import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { markAsCompletedTask } from '@/lib/actions';
import { HiDotsHorizontal, HiStar } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineDragIndicator, MdCheckCircleOutline } from "react-icons/md";
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

  const markAsImportant =()=>{
    
  }
  
  return (
     <div ref={setNodeRef} style={style}  className='w-full rounded-xl border p-2 my-2 cursor-pointer text-xl' >
      <div className="flex items-center gap-2">
        <div {...attributes} {...listeners} className='cursor-move'>
          <MdOutlineDragIndicator/>
        </div>
        <div className={`cursor-pointer text-2xl`} onClick={markAsCompleted}>
          {
            props.isComplete ? 
              <MdCheckCircle className='text-green-500 h-full' />
            :
            <MdCheckCircleOutline className='text-gray-300 h-full'/>
          }
          
        </div>
        <div className='w-full' >
          <Link href={`/list/${props.idList}/taskdetail/${props.id}`} className='w-full block'>
            {props.list_desc}
          </Link>
        </div>
        <div className='mr-2'>
            
            <FaRegStar size={''}/>
           
        </div>
      </div>
    </div>
  );
}