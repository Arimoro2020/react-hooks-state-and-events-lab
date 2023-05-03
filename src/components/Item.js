import {React, useState} from "react";

function Item({item}) {
  const [inCart, setInCart] = useState(true)
  const { name, category, id} = item;

  function handleOnClick(id){ 
      setInCart(inCart=>!inCart)
      if(inCart===false && item.id===parseInt(id)){
        item.remove();  
      }  
    }
  
   const listClass = inCart? "in-cart": "";
  console.log(inCart)

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={()=>handleOnClick(id)} className="add">{inCart? "Add to Cart" : "Remove from Cart" }</button>
    </li>
  );
}

export default Item;
 