import React from "react";
import RecipeItem from "./RecipeItem";
import classes from "./RecipeItem.module.css";
const RecipeList = (props) => {
  return (
    <>
      <div className={classes.show}>
        {props.data.map((map) => (
          <div key={map.recipe.label}>
            <RecipeItem data={map.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
