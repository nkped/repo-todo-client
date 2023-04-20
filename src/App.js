import './App.css';
import Content from './Content.js';
import AddItem from './AddItem.js';
import { useState } from 'react';

function App() {

  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('todolist')))

  const [ newItem, setNewItem ] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems) 
    localStorage.setItem('todolist', JSON.stringify(newItems))
  }


  const createItem = (item) => {
  const id = items[items.length - 1].id + 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem ]
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {    
    e.preventDefault()
    createItem(newItem)
    setNewItem('')
  }
  
  const handleCheck = (id) => {    
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item )    
    setAndSaveItems(listItems)
  }
  
  const handleDelete = (id) => {
    console.log(id)
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }


  return (
    <div className="App">
      <h1>ToDo</h1>
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit} 
      />
      <Content 
        items={items} 
        setItems={setItems} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
