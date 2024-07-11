import {  HeaderMain, Input, Sidebar, SortableContainer } from '@/components';
import { getList } from '@/lib/actions';
import { Dropdown } from 'flowbite-react';
import React from 'react'

interface ItemInterface {
  list_desc:string,
  id:number,
  completed : boolean,
  important : boolean,
}

async function Main({items,pageTitle,id}:{items:ItemInterface[],pageTitle :string,id:string}) {
  const getListAPI = await getList();
  return (
    <>
      <Sidebar lists={getListAPI.data}/>
      <div className="flex-1 overflow-scroll flex flex-col">
          <HeaderMain pageTitle={pageTitle} id={id}/>
          
          <main className="flex flex-col w-full h-full px-6 py-4 overflow-y-scroll">
            <SortableContainer tasks={items} idList={Number(id)}/>
          </main>
          <div className="sticky bottom-0 bg-white px-6 py-4 w-full">
            <Input idList={id}/>
          </div>
      </div>
    </>
  )
}

export default Main