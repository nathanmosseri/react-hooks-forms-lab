import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState('')
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (e) => {
    setSearchedItem(e.target.value)
    
  }

  const itemsToDisplay = () => {
  if (searchedItem) {
    let filteredItems = items.filter(item => item.name.toLowerCase().includes(searchedItem.toLocaleLowerCase()))
    return filteredItems
  } else if (selectedCategory !== 'All') {
    return items.filter(item => item.category == selectedCategory)
  } 
  else {
    return items
  }
}

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit= {onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
