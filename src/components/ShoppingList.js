import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleOnChange(event){
    const selected = event.target.value 
    setSelectedCategory(selectedCategory=>selected);
   

  }
  let filteredCategory = items.filter(item=>
    selectedCategory ==="All"   || item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(event)=>handleOnChange(event)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} item={item}  />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
