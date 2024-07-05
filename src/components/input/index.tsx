import { Button } from 'flowbite-react'
import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";

function index() {
  return (
    <form action="" >
      <div className='flex w-full items-center gap-4'>
            <div className='flex-1 w-full'>
                <input type="text" className='w-full rounded-md'/>
            </div>
            <Button className='' type='submit'>
              <HiOutlineArrowRight className="h-6 w-6" />
            </Button>
      </div>
    </form>
  )
}

export default index