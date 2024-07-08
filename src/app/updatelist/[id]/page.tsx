import { Modal } from '@/components'
import { addList, getListDetail, updateList } from '@/lib/actions'
import FormAddNewList from '@/ui/formaddnewlist'
import React from 'react'

async function Page({params}:{params:{id : string}}) {
  const itemList = await getListDetail(params.id)
  const pageTitle = itemList?.data?.list_desc
  const items = itemList?.data?.Items
  const idList = itemList?.data?.id

  return (
    
      <Modal headerTitle='Update List'>
        <FormAddNewList listDesc={pageTitle} id={idList} action={updateList}/>
      </Modal>
   
  )
}

export default Page