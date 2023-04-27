import React from 'react'

const Content = ({ items, handleCheck, handleDelete}) => {
  
  return (
      <ul>
        {items.map((item) => (
        <li className='item' key={item.id} >
          <input 
            type='checkbox' 
            checked={item.checked}
            onChange={() => handleCheck(item.id)} 
            />     
          <label
            style={(item.checked) ? { textDecoration: 'line-through' } : null}
            onDoubleClick={() => handleCheck(item.id)}>
              {item.item}</label>
          <button onClick={() => handleDelete(item.id)} >Delete
          </button>          
        </li>))}
      </ul>
  )
}

export default Content