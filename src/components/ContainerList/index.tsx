'use client'
import React from 'react'
import { DndProvider } from 'react-dnd'
import Container from '../container'
import { HTML5Backend } from 'react-dnd-html5-backend'

function index() {
  return (
    <DndProvider backend={HTML5Backend}>
        <Container/>
    </DndProvider> 
  )
}

export default index