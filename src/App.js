import './App.css';
import Content from './Content.js';
import AddItem from './AddItem.js';
import { useState } from 'react';

function App() {

  const [ items, setItems ] = useState([
    { id: 1, checked: true, item: 'vacuum' },
    { id: 2, checked: false, item: 'wash' },
    { id: 3, checked: false ,item: 'dust' }
  ])

  const [ newItem, setNewItem ] = useState('')


  const createItem = (item) => {
  const id = items[items.length - 1].id + 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem ]
    setItems(listItems) 
  }

  const handleSubmit = (e) => {    
    e.preventDefault()
    createItem(newItem)
    setNewItem('')
  }
  
  const handleCheck = (id) => {    
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item )    
    setItems(listItems)
  }
  
  const handleDelete = (id) => {
    console.log(id)
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
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
