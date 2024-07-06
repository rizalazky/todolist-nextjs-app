'use client'
import { Dropdown } from 'flowbite-react'
import Link from 'next/link';
import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

function index({pageTitle, id}:{pageTitle:string,id:string}) {
  return (
    <div className="sticky top-0 px-6 py-4 bg-gray-50 w-full flex justify-between items-center">
        <h1 className='text-2xl font-bold'>{pageTitle}</h1>
        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <div><HiDotsHorizontal/></div>}>
            <Dropdown.Item>
                <Link href={`/updatelist/${id}`}>Update</Link>
            </Dropdown.Item>
            <Dropdown.Item>Delete</Dropdown.Item>
        </Dropdown>
    </div>
  )
}

export default index