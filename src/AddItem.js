import React from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <input className='item'
          type='text' 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)}
         />
         <button type='submit'>+</button>
    </form>
  )
}

export default AddItem
