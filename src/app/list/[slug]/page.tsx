import { getListDetail } from '@/lib/actions'
import Main from '@/ui/main'
import React from 'react'

async function ListPage({params}:{params:{ slug : string}}) {
  const itemList = await getListDetail(params.slug)
  const pageTitle = itemList?.data?.list_desc
  const items = itemList?.data?.Items
  const idList = itemList?.data?.id || params.slug
  
  // console.log(itemList);
  return (
    <Main pageTitle={pageTitle} items={items} itemList={itemList.data} id={idList}/>
  )
}

export default ListPage