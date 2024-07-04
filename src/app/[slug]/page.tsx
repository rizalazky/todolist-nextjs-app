import React from 'react'

function page({params}:{params:{ slug : string}}) {
  return (
    <div>{params.slug}</div>
  )
}

export default page