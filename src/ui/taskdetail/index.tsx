'use client'
import { Modal } from '@/components'
import { Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { HiArrowSmRight, HiSun, HiDatabase, HiHome, HiTable, HiCheckCircle, HiStar, HiX,HiTrash  } from "react-icons/hi";



const Box = ({label,icon,onClick,className} :{label:string, icon : React.ReactNode, onClick : ()=>void, className :string})=>{
    return(
        <div onClick={onClick} className='flex gap-1 items-center jutify-center text-center p-2 px-4 text-lg cursor-pointer border border-gray-300 rounded-md'>
            <div  className={`text-2xl ${className}`}>
                {icon}
            </div>
            {
                label && <p>{label}</p>
            }
        </div>
    )
}

function TaskDetail({taskDetail}:{taskDetail:any}) {
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const handleClickBox = (actionType:string)=>{
        
    }

  return (
    <>
        <Modal headerTitle={taskDetail.list_desc}>
            <div className='mt-2'>
                <p className='mb-1'>Title</p>
                <TextInput name="" id="" value={taskDetail.list_desc}/>
            </div>
            <div className='my-2'>
                <p className='mb-1'>Mark As</p>
                <div className="flex gap-2">
                    <Box label='My Day' icon={<HiSun/>} className={taskDetail.completed && 'text-yellow-500'} onClick={()=>handleClickBox('myday')}/>
                    <Box label='Important' icon={<HiStar/>} className={taskDetail.completed && 'text-yellow-400'} onClick={()=>handleClickBox('important')}/>
                    <Box label='Completed' icon={<HiCheckCircle/>} className={taskDetail.completed && 'text-green-500'} onClick={()=>handleClickBox('completed')}/>
                </div>
            </div>
            <div className='mt-2'>
                <p className='mb-1'>Note</p>
                <Textarea name="" id="" rows={4}/>
            </div>
            <div className='flex justify-end mt-4'>
                <Box label='' icon={<HiTrash/>} className={'text-red-500'} onClick={()=>setOpenModalDelete(true)}/>
            </div>
        </Modal>
        <Modal isModalDelete children='' headerTitle='' onCloseModal={()=>setOpenModalDelete(false)} openModal={openModalDelete}/>
    </>
  )
}

export default TaskDetail