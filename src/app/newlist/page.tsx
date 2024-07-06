import { Modal } from '@/components'
import { addList } from '@/lib/actions'
import FormAddNewList from '@/ui/formaddnewlist'
import React from 'react'

function Page() {
  return (
    
      <Modal >
        <FormAddNewList listDesc='' id='' action={addList}/>
      </Modal>
   
  )
}

export default Page