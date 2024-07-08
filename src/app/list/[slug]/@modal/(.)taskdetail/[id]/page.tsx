
import { Modal } from '@/components'
import React from 'react'

function page({params}:{params :{id:string}}) {
    console.log('id',params.id)
  return (
    <Modal headerTitle='LIST DESC'>
      <div>page modal {params.id}</div>
    </Modal>
  )
}

export default page