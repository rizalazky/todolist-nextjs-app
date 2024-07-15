'use client'
import { Accordion } from 'flowbite-react'
import React from 'react'
import { SortableContainer } from '..'

function index({itemList}:{itemList:[]}) {
  return (
    <Accordion>
      {
          itemList?.map((item:any,index:number)=>{
            return(
              <Accordion.Panel key={index}>
                <Accordion.Title>{item.list_desc}</Accordion.Title>
                <Accordion.Content>
                  <SortableContainer tasks={item.Items} idList={item.id}/>
                </Accordion.Content>
              </Accordion.Panel>
            )
          })
        }
    </Accordion>
  )
}

export default index