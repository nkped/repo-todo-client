import React from 'react'

const Content = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
      <li key={item.id} >        
        <label>{item.item}</label>
      </li>))}
    </ul>
  )
}

export default Content