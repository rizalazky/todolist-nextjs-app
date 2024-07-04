import React from 'react'

function ListPage({params}:{params:{ slug : string}}) {
  return (
    <div><h1>{params.slug}</h1><span>Helljagjo</span></div>
  )
}

export default ListPage