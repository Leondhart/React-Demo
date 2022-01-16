import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.scss';
import TodoItem from './components/custom/TodoItem';
import AppButton from './components/general/AppButton';
import AppInput from './components/general/AppInput';

const App = (props) => {
  const [name, setName] = useState("Todo Apps");
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [index, setIndex] = useState(-1);

  let router = useNavigate()

  const itemInput = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    const tempItems = items
    tempItems.push({ name: item, check: false })
    setItems(tempItems)
    router({ pathname: './test' }) 
  };

  const toggleCheck = (index) => {
    const tempItems = items.slice()
    tempItems[index].check = !tempItems[index].check
    setItems(tempItems)
  };

  const chooseItem = (index) => {
    setIndex(index)
  };

  const deleteItem = (index) => {
    const tempItems = items.slice()
    tempItems.splice(index, 1)
    setItems(tempItems)
  };

  const toTestPage = () => {
    router({ pathname: './test' }) 
  };

  return <div className="App">
    <div className="container">
      <section>
        <div className="container">
          <div className="title">
            Todo Apps
          </div>

          <AppButton name="Add Item" onClick={toTestPage} />

          <form className="container spacing-40" onSubmit={(e) => { e.preventDefault() }}>
            <div>{index}</div>
            <AppInput className="form-spacing" value={item} onChange={itemInput} />
            <AppButton name="Add Item" onClick={addItem} />
          </form>

          <div className='container full-width item-container'>
            {
              items.map((item, index) =>
                <TodoItem key={index}
                  index={index}
                  item={item}
                  editAction={chooseItem}
                  toggleCheck={toggleCheck}
                  deleteItem={deleteItem}
                />
              )
            }
          </div>
        </div>
      </section>
    </div>
  </div>
}

export default App