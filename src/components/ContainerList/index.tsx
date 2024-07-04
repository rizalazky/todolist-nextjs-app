'use client'
import React from 'react'
import { DndProvider } from 'react-dnd'
import Container from '../container'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface ItemInterface {
  list_desc:string,
  id:number
}

function index({items}:{items : ItemInterface[] }) {
  return (
    <DndProvider backend={HTML5Backend}>
        <Container items={items}/>
    </DndProvider> 
  )
}

export default index