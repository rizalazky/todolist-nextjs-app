import { addList } from '@/lib/actions'
import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

function FormAddNewList() {
  return (
    <form action={addList}>
      <div className="flex w-full flex-col gap-4">
        <Label htmlFor="list_desc">List</Label>
        <TextInput type="text" id="list_desc" name="list_desc" placeholder="Type Here..." />
      </div>
      <div className="flex justify-end mt-6">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default FormAddNewList