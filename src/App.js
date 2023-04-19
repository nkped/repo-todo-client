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
    console.log(id)
     const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem ]
    setItems(listItems) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItem)
    createItem(newItem)
   
  }



  return (
    <div className="App">
      <h1>Hello</h1>
      <AddItem 
      newItem={newItem} 
      setNewItem={setNewItem} 
      handleSubmit={handleSubmit}/>
      <Content 
        items={items} 
        setItems={setItems} 
      />
    </div>
  );
}

export default App;
