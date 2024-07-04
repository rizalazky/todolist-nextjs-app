import { getListDetail } from '@/lib/actions'
import Main from '@/ui/main'
import React from 'react'

async function ListPage({params}:{params:{ slug : string}}) {
  const itemList = await getListDetail(params.slug)
  const pageTitle = itemList?.data?.list_desc
  const items = itemList?.data?.Items
  console.log('PAGE TITLE',itemList.data.list_desc)
  console.log('ITEM LIST',itemList.data.Items)
  return (
    <Main pageTitle={pageTitle} items={items}/>
  )
}

export default ListPage