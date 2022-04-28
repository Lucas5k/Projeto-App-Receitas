import React, { useState } from 'react';
import PropTypes from 'prop-types';
import contextGlobal from '.';

function Provider({ children }) {
  const [results, setResults] = useState([]);
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
    setResults(dataJson.meals);
  };

  const requisitionFoodsByName = async (search) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const dataJson = await response.json();
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
    console.log(dataJsonDrinks);
    setResults(dataJsonDrinks.meals);
  };

  const requisitionDrinksByName = async (search) => {
    const responseDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const dataJsonDrinks = await responseDrinks.json();
    setResults(dataJsonDrinks.meals);
  };

  const requisitionDrinksByFirstLetter = async (search) => {
    const firstLetter = search.slice(0, 1);
    const URL = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const dataJson = await URL.json();
    setResults(dataJson.meals);
    if (search.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
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
