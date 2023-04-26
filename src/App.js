import './App.css';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import apiRequest from './apiRequest';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/items'

  const [ items, setItems ] = useState([])
  const [ newItem, setNewItem ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ fetchError, setFetchError ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  //with empty array as dependency useEffect only renders at load time
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not receive todo-list data from json-server')
        const listItems = await response.json()
        setItems(listItems) 
        setFetchError(null)       
      } catch (err) {
        setFetchError(err.message)        
        }
        finally {
          setIsLoading(false)
        }
    } 
    (async () => await fetchItems())()      
  }, [])


  const createItem = async (item) => {
    const id = items[items.length - 1].id + 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem ]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);

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
      <SearchItem 
        search={search} 
        setSearch={setSearch} 
      />
      <main>
        {isLoading && <p>Loading items from json-server...</p>}
        {fetchError && !isLoading && <p style={{color: 'red', margin: '10px' }}>{`${fetchError}`}</p>}
        <Content 
          items={items.filter((item) => (item.item.toLowerCase().includes(search.toLowerCase())))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;