import React, {useState} from "react";
import { v4 as uuid, v4 } from "uuid";

function ItemForm({items, onItemFormSubmit}) {

  const [newItem, setNewItem] = useState('')
  const [newCat, setNewCat] = useState('Produce')
  // const [itemAndCat, setItemAndCat] = useState([])

  // sets state for new items and their category
  const handleItemForm = (e) => {
    console.log(newItem)
    setNewItem(e.target.value)
    console.log(e.target.value)
}

const onCategoryChange = (e) => {
  setNewCat(e.target.value)
}

  // const handleSubmit = () => {

  // }

  // const preventDefault = (e) => {
  //   e.preventDefault()
  // }
  
  // on submit, takes the input values and puts them in an object
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newObj = {
  //   id: uuid,
  //   name: newItem,
  //   categroy: newCat
  // }
  //   setItemAndCat( newObj)
  //   console.log(itemAndCat)
  // }

  return (
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(e, uuid, newItem, newCat)}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemForm}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => onCategoryChange(e)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
