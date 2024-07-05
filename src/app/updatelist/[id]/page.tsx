import { Modal } from '@/components'
import { addList, getListDetail } from '@/lib/actions'
import FormAddNewList from '@/ui/formaddnewlist'
import React from 'react'

async function Page({params}:{params:{id : string}}) {
  const itemList = await getListDetail(params.id)
  const pageTitle = itemList?.data?.list_desc
  const items = itemList?.data?.Items
  const idList = itemList?.data?.id

  return (
    
      <Modal >
        <FormAddNewList value={pageTitle}/>
      </Modal>
   
  )
}

export default Page