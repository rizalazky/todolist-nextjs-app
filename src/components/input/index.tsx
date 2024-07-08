'use client'
import { addTask } from '@/lib/actions';
import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";

function index({idList}:{idList : string}) {
  const [valueInput, setValueInput] = useState('')
  return (
    <form action={addTask} onSubmit={()=>setValueInput('')}>
      <div className='flex w-full items-center gap-4'>
            <input type="hidden" value={idList} name='list_id' />
            <div className='flex-1 w-full'>
                <input type="text" name='list_desc' value={valueInput} onChange={(e)=>setValueInput(e.target.value)} className='w-full rounded-md' onKeyDown={(e)=>{
                  console.log(e.code)
                  if(e.code === 'Enter'){
                    addTask
                  }
                }}/>
            </div>
            <Button className='' type='submit'>
              <HiOutlineArrowRight className="h-6 w-6" />
            </Button>
      </div>
    </form>
  )
}

export default index