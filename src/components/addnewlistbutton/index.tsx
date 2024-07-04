import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <Link href={'/newlist'}>
        <div className='cursor-pointer mt-auto'>Add New List</div>
    </Link>
  )
}

export default index