import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import contextGlobal from '../context/index';

function IngredientsCard() {
  const {
    requisitionFoodsByIngredient,
    requisitionDrinksByIngredient,
  } = useContext(contextGlobal);

  const [resultsIngredients, setResultsIngredients] = useState([]);
  const { pathname } = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    const requestIngredients = async () => {
      if (pathname === '/explore/foods/ingredients') {
        const ingredientsMeals = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const dataMealsJson = await ingredientsMeals.json();
        const dataIngredientsMeals = dataMealsJson && dataMealsJson.meals;
        setResultsIngredients(dataIngredientsMeals);
      } else {
        const ingredientsDrinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        const dataDrinksJson = await ingredientsDrinks.json();
        const dataIngredientsDrinks = dataDrinksJson && dataDrinksJson.drinks;
        setResultsIngredients(dataIngredientsDrinks);
      }
    };
    requestIngredients();
  }, []);

  const handleClick = async ({ currentTarget }) => {
    if (pathname === '/explore/foods/ingredients') {
      await requisitionFoodsByIngredient(currentTarget.value);
      push('/foods');
    } else {
      await requisitionDrinksByIngredient(currentTarget.value);
      push('/drinks');
    }
  };

  return (
    <div>
      { resultsIngredients.map((ingredient, index) => {
        const maxIngredients = 12;
        const { strIngredient, strIngredient1 } = ingredient;
        const url = strIngredient
          ? `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
          : `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`;
        return index < maxIngredients && (
          <button
            onClick={ handleClick }
            type="button"
            data-testid={ `${index}-ingredient-card` }
            key={ index }
            value={ strIngredient || strIngredient1 }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ url }
              alt="Ingredient"
            />
            <span data-testid={ `${index}-card-name` }>
              { strIngredient || strIngredient1 }
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default IngredientsCard;
