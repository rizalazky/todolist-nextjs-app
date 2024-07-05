import { ContainerList, HeaderMain, Input, Sidebar } from '@/components';
import { getList } from '@/lib/actions';
import { Dropdown } from 'flowbite-react';
import React from 'react'

interface ItemInterface {
  list_desc:string,
  id:number
}

async function Main({items,pageTitle,id}:{items:ItemInterface[],pageTitle :string,id:number}) {
  const getListAPI = await getList();
  return (
    <>
      <Sidebar lists={getListAPI.data}/>
      <div className="flex-1 overflow-scroll">
          <HeaderMain pageTitle={pageTitle} id={id}/>
          <main className="flex flex-col w-full h-full px-6">
            <ContainerList items={items}/>
          </main>
          <div className="sticky bottom-0 px-6 py-4 w-full">
            <Input/>
          </div>
      </div>
    </>
  )
}

export default Main