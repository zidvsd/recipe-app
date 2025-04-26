import React from "react";
import { useEffect, useState } from "react";

const RecipeIngredients = ({ selectedItem }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    setCheckedIngredients([]);
  }, [selectedItem]);
  const handleCheckBoxChange = (index) => {
    setCheckedIngredients((prevChecked) => {
      if (prevChecked.includes(index)) {
        return prevChecked.filter((i) => i !== index);
      } else {
        return [...prevChecked, index];
      }
    });
  };

  const ingredients = [];
  const amount = [];
  let i = 1;
  while (selectedItem[`strIngredient${i}`]) {
    const ingredient = selectedItem[`strIngredient${i}`];
    const amt = selectedItem[`strMeasure${i}`];
    if (ingredient.trim() !== "") {
      ingredients.push(ingredient);
      amount.push(amt);
    }
    i++;
  }

  const renderIngredient = (ingredient, index) => (
    <div className="flex flex-row gap-x-2" key={index}>
      <input
        type="checkbox"
        className="accent-custom-peach rounded-md size-6"
        onChange={() => handleCheckBoxChange(index)}
        checked={checkedIngredients.includes(index)}
      />
      <li
        className={`flex flex-row gap-x-2  items-center text-md md:text-xl lg:text-2xl ${checkedIngredients.includes(index) ? "line-through" : "no-underline"}`}
      >
        <span>{amount[index]}</span>
        <span> {ingredient}</span>
      </li>
    </div>
  );

  return (
    <div>
      <h1 className="heading-text lg:text-3xl md:text-2xl text-xl">
        Ingredients:{" "}
      </h1>
      <ul className="flex flex-col gap-y-2 mt-2 items-start subheading-text text-md">
        {ingredients.map(renderIngredient)}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
