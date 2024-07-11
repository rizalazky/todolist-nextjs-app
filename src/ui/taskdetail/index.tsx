'use client'
import { Modal } from '@/components'
import { deleteTask, updateTask } from '@/lib/actions';
import { Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { HiArrowSmRight, HiSun, HiDatabase, HiHome, HiTable, HiCheckCircle, HiStar, HiX,HiTrash , HiOutlineStar,HiOutlineCheckCircle } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";



const Box = ({label,icon,onClick,className} :{label:string, icon : React.ReactNode, onClick : ()=>void, className :string})=>{
    return(
        <div onClick={onClick} className='flex gap-1 items-center jutify-center text-center p-2 px-4 text-lg cursor-pointer border border-gray-300 rounded-md'>
            <div  className={`text-2xl text-gray-300 ${className}`}>
                {icon}
            </div>
            {
                label && <p>{label}</p>
            }
        </div>
    )
}

function TaskDetail({taskDetail,listId}:{taskDetail:any,listId:string}) {
    const [openModalDelete, setOpenModalDelete] = useState(false);
    

    const handleInputChange = (actionType:string,value:string)=>{
        const formData = new FormData();
        formData.append(actionType,value)
        updateTask(Number(listId),taskDetail.id, formData);
    }

if(taskDetail){
    return (
      <>
          <Modal headerTitle={taskDetail.list_desc}>
              <div className='mt-2'>
                  <p className='mb-1'>Title</p>
                  <TextInput name="" id="" defaultValue={taskDetail.list_desc} onChange={(e)=>handleInputChange('list_desc',e.target.value)}/>
              </div>
              <div className='my-2'>
                  <p className='mb-1'>Mark As</p>
                  <div className="flex gap-2">
                      <Box label='My Day' icon={<HiSun/>} className={taskDetail.myday && 'text-yellow-500'} onClick={()=>handleInputChange('myday','true')}/>
                      <Box label='Important' icon={<HiOutlineStar/>} className={taskDetail.important && 'text-yellow-400'} onClick={()=>handleInputChange('important','true')}/>
                      <Box label='Completed' icon={taskDetail.completed ? <HiCheckCircle/> : <HiOutlineCheckCircle/>} className={taskDetail.completed && 'text-green-500'} onClick={()=>handleInputChange('completed','true')}/>
                  </div>
              </div>
              <div className='mt-2'>
                  <p className='mb-1'>Note</p>
                  <Textarea name="" id="" rows={4} defaultValue={taskDetail.notes} onChange={(e)=>handleInputChange('notes',e.target.value)}/>
              </div>
              <div className='flex justify-end mt-4'>
                  <Box label='' icon={<HiTrash/>} className={'text-red-500'} onClick={()=>setOpenModalDelete(true)}/>
              </div>
          </Modal>
          <Modal isModalDelete children='' headerTitle='' onCloseModal={()=>setOpenModalDelete(false)} openModal={openModalDelete} onSubmitDelete={()=>deleteTask(listId,taskDetail.id)}/>
      </>
    )
}
}

export default TaskDetail