import { Modal } from '@/components'
import { addList } from '@/lib/actions'
import FormAddNewList from '@/ui/formaddnewlist'
import React from 'react'

function Page() {
  return (
      <Modal >
        <FormAddNewList value=''/>
      </Modal>
  )
}

export default Page