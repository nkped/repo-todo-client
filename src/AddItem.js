import React from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)}
         />
         <button type='submit' >Submit</button>
    </form>
  )
}

export default AddItem
