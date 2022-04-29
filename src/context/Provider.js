import React, { useState } from 'react';
import PropTypes from 'prop-types';
import contextGlobal from '.';

const filterFirstLetter = 'First letter';
const filterName = 'Name';
const filterIngredient = 'Ingredient';

function Provider({ children }) {
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(1);
  const [disabledInput, setDisabledInput] = useState(true);
  const [oneFoodReturn, setOneFoodReturn] = useState([]);

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
    setResults(dataJson.meals);
  };

  const requisitionFoodsByName = async (search) => {
    const returnSearch = search;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${returnSearch}`);
    const dataJson = await response.json();
    const resultsFoodsName = dataJson.meals;
    if (resultsFoodsName.length === 1) return setOneFoodReturn(resultsFoodsName);
    setResults(dataJson.meals);
  };

  const requisitionFoodsByFirstLetter = async (search) => {
    const firstLetter = search.slice(0, 1);
    const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const dataJson = await URL.json();
    setResults(dataJson.meals);
    if (search.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
  };

  const requisitionDrinksByIngredient = async (search) => {
    const responseDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`);
    const dataJsonDrinks = await responseDrinks.json();
    setResults(dataJsonDrinks.drinks);
  };

  const requisitionDrinksByName = async (search) => {
    const responseDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const dataJsonDrinks = await responseDrinks.json();
    const resultsDrinksName = dataJsonDrinks.drinks;
    if (results.length > 1) return setOneFoodReturn(resultsDrinksName);
    setResults(dataJsonDrinks.drinks);
  };

  const requisitionDrinksByFirstLetter = async (search) => {
    const firstLetter = search.slice(0, 1);
    const URL = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const dataJson = await URL.json();
    setResults(dataJson.drinks);
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
    results,
    requisitionFoodsByFirstLetter,
    requisitionDrinksByIngredient,
    requisitionDrinksByName,
    requisitionDrinksByFirstLetter,
    toogleInput,
    disabledInput,
    oneFoodReturn,
    auxiliaryFunctionFoods,
    auxiliaryFunctionDrinks,
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
