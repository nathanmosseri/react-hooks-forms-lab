import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid, v4 } from "uuid";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [itemAndCat, setItemAndCat ] = useState({})

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleSubmit = (e, id, name, cat) => {
    e.preventDefault()
    const newObj = {
    id: uuid(),
    name: name,
    category: cat
  }
  setItems([...itemData, newObj])
  console.log(newObj.id)
  console.log(name)
  console.log(items)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
