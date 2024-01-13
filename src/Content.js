import React from 'react'
import ListItems from './ListItems'

const Content = ({items,handleCheck,handleDelete,color,setColor}) => {
    return (
    <>
      { (items.length) ? (
        <ListItems 
         items={ items }
         handleCheck={handleCheck}
         handleDelete={handleDelete} />

      ): <p style={{ marginTop:'2rem' }}>Your list is empty.</p> }
      

      

    </>

  )
}

export default Content
