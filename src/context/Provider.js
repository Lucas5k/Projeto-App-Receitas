import React, { useState } from 'react';
import PropTypes from 'prop-types';
import contextGlobal from '.';

const filterFirstLetter = 'First letter';
const filterName = 'Name';
const filterIngredient = 'Ingredient';

function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState(1);
  const [disabledInput, setDisabledInput] = useState(true);

  const toogleInput = () => {
    if (count === 1) {
      setDisabledInput(false);
      setCount(2);
    }
    if (count === 2) {
      setDisabledInput(true);
      setCount(1);
    }
  };

  const requisitionFoodsByIngredient = async (search) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
    const dataJson = await response.json();
    setRecipes(dataJson.meals);
  };

  const requisitionFoodsByName = async (search) => {
    const returnSearch = search;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${returnSearch}`);
    const dataJson = await response.json();
    const foods = dataJson && dataJson.meals;
    if (!foods) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    setRecipes(foods);
  };

  const requisitionFoodsByFirstLetter = async (search) => {
    const firstLetter = search.slice(0, 1);
    const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const dataJson = await URL.json();
    setRecipes(dataJson.meals);
    if (search.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
  };

  const requisitionDrinksByIngredient = async (search) => {
    const responseDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`);
    const dataJsonDrinks = await responseDrinks.json();
    setRecipes(dataJsonDrinks.drinks);
  };

  const requisitionDrinksByName = async (search) => {
    const responseDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const dataJsonDrinks = await responseDrinks.json();
    const drinks = dataJsonDrinks && dataJsonDrinks.drinks;
    if (!drinks) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    setRecipes(drinks);
  };

  const requisitionDrinksByFirstLetter = async (search) => {
    const firstLetter = search.slice(0, 1);
    const URL = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const dataJson = await URL.json();
    setRecipes(dataJson.drinks);
    if (search.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
  };

  const auxiliaryFunctionFoods = (typeSearch, search) => {
    if (typeSearch === filterIngredient) return requisitionFoodsByIngredient(search);
    if (typeSearch === filterName) return requisitionFoodsByName(search);
    if (typeSearch === filterFirstLetter) return requisitionFoodsByFirstLetter(search);
  };

  const auxiliaryFunctionDrinks = (typeSearch, search) => {
    if (typeSearch === filterIngredient) return requisitionDrinksByIngredient(search);
    if (typeSearch === filterName) return requisitionDrinksByName(search);
    if (typeSearch === filterFirstLetter) return requisitionDrinksByFirstLetter(search);
  };

  const contextValue = {
    requisitionFoodsByIngredient,
    requisitionFoodsByName,
    requisitionFoodsByFirstLetter,
    requisitionDrinksByIngredient,
    requisitionDrinksByName,
    requisitionDrinksByFirstLetter,
    toogleInput,
    disabledInput,
    auxiliaryFunctionFoods,
    auxiliaryFunctionDrinks,
    recipes,
  };

  return (
    <contextGlobal.Provider value={ contextValue }>
      {children}
    </contextGlobal.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
