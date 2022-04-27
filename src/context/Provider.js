import React, { useState } from 'react';
import PropTypes from 'prop-types';
import contextGlobal from '.';

function Provider({ children }) {
  const [results, setResults] = useState([]);

  const requisitionRecipesByIngredient = async (search) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
    const dataJson = await response.json();
    setResults(dataJson.meals);
  };

  const requisitionRecipesByName = async (search) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const dataJson = await response.json();
    setResults(dataJson.meals);
  };

  const requisitionRecipesByFirstLetter = async (search) => {
    const firstLetter = search.slice(0, 1);
    console.log(firstLetter);
    const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const dataJson = await URL.json();
    setResults(dataJson.meals);
    if (search.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
  };

  const contextValue = {
    requisitionRecipesByIngredient,
    requisitionRecipesByName,
    results,
    requisitionRecipesByFirstLetter,
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
