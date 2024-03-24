import React, { useState } from "react";
import classes from "./RecipeItem.module.css";
import ViewItem from "./ViewItem";
const RecipeItem = (props) => {
  const [items, setItems] = useState();
  const item = props.data;
  const viewItem = () => {
    if (items) {
      setItems();
    } else {
      setItems(item);
    }
  };
  const onClose = () => {
    setItems();
  };
  return (
    <>
      <div className={classes.showItems}>
        <div className={classes.box}>
          <img src={item.image} alt="Img" />
        </div>
        <p style={{ textAlign: "center" }}>{item.label}</p>
        <button type="button" onClick={viewItem} className="btn btn-primary">
          Show Item
        </button>
      </div>
      {items && <ViewItem item={items} onClose={onClose} />}
    </>
  );
};

export default RecipeItem;
