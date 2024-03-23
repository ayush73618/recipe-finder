import React from "react";
import classes from "./Style.module.css";

const ViewItem = (props) => {
  const item = props.item;
  console.log(item.totalNutrients);

  return (
    <>
      <div className={classes.backDrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        <div className="img">
          <img src={item.image} alt="" width="200px" height="200px" />
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td>Name</td>
              <td>{item.label}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calorie's</td>
              <td>{item.calories}</td>
            </tr>
            <tr>
              <td>Cuisine Type</td>
              <td>
                {item.cuisineType.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Diet's Lables</td>
              <td>
                {item.dietLabels.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Type Of Dish</td>
              <td>{item.dishType.map((res) => res)}</td>
            </tr>
            <tr>
              <td>Ingredients</td>
              <td>
                {item.ingredientLines.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>TotalNutrients</td>
              <td>
                <li>
                  {`${item.totalNutrients.ENERC_KCAL.label} = 
                  ${item.totalNutrients.ENERC_KCAL.quantity}
                  ${item.totalNutrients.ENERC_KCAL.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.FAT.label} = 
                  ${item.totalNutrients.FAT.quantity}
                  ${item.totalNutrients.FAT.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.FASAT.label} = 
                  ${item.totalNutrients.FASAT.quantity}
                  ${item.totalNutrients.FASAT.unit}`}
                </li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewItem;
