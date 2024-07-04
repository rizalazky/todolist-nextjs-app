'use client'
import update from 'immutability-helper'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import DragableCard from '../dragablecard'
import { text } from 'stream/consumers'



export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

interface ItemInterface {
  list_desc:string,
  id:number
}

const Container = ({items} : {items:ItemInterface[]}) => {
  {
    console.log('items',items)
    const [cards, setCards] = useState(items?.map((item)=>({
      id: item.id,
      text : item.list_desc
    })) || [])

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        }),
      )
    }, [])

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <DragableCard
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        )
      },
      [],
    )

    return (
      <>
        <div className='w-full'>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}

export default Container
