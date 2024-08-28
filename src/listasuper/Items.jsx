import React, { useContext } from 'react'
import { Context } from './Context'
import Item from './Item'

const Items = () => {
  const {items} = useContext(Context) 
  return (items.length > 0 &&
    (<div className='item-wrapper'>
      {items.map((elem, index) => {
        return (
          <Item key={index} props={elem} />
        )
      })}
    </div>)
  )
}

export default Items
