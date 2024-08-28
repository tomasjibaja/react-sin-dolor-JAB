import React, { useContext } from 'react'
import { Context } from './Context'
import Item from './Item'

const Items = () => {
  const {productos} = useContext(Context) 
  return (productos.length > 0 &&
    (<div className='item-wrapper'>
      {productos.map((elem, index) => {
        return (
          <Item key={index} props={elem} />
        )
      })}
    </div>)
  )
}

export default Items
