import { addList } from '@/lib/actions'
import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

function FormAddNewList({listDesc, id, action }:{listDesc:string, id : string , action : (formData : FormData)=>Promise<unknown>}) {
  return (
    <form action={action}>
      <input type="hidden" name="id" defaultValue={id} />
      <div className="flex w-full flex-col gap-4">
        <Label htmlFor="list_desc">List</Label>
        <TextInput type="text" id="list_desc" defaultValue={listDesc} name="list_desc" placeholder="Type Here..." />
      </div>
      <div className="flex justify-end mt-6">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default FormAddNewList