'use client'
import { Dropdown } from 'flowbite-react'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { Modal } from '..';

function index({pageTitle, id}:{pageTitle:string,id:string}) {
  const [openModalDelete,setOpenModalDelete]=useState(false);
  return (
    <div className="sticky top-0 px-6 py-4 bg-gray-50 w-full flex justify-between items-center">
        <h1 className='text-2xl font-bold'>{pageTitle}</h1>
        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <div><HiDotsHorizontal/></div>}>
            <Dropdown.Item>
                <Link href={`/updatelist/${id}`}>Update</Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>setOpenModalDelete(true)}>Delete</Dropdown.Item>
        </Dropdown>
        <Modal isModalDelete children='' headerTitle='' onCloseModal={()=>setOpenModalDelete(false)} openModal={openModalDelete}/>
    </div>
  )
}

export default index