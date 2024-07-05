import { ContainerList, Input, Sidebar } from '@/components';
import { getList } from '@/lib/actions';
import React from 'react'

interface ItemInterface {
  list_desc:string,
  id:number
}

async function Main({items,pageTitle}:{items:ItemInterface[],pageTitle :string}) {
  const getListAPI = await getList();
  return (
    <>
      <Sidebar lists={getListAPI.data}/>
      <div className="flex-1 overflow-scroll">
          <div className="sticky top-0 px-6 py-4 bg-gray-50 w-full">
            <h1 className='text-2xl font-bold'>{pageTitle}</h1>
          </div>
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