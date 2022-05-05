import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

function FoodsNationality() {
  const [resultsNationalities, setResultsNationalities] = useState([]);
  const [foodsByNationality, setFoodsByNationality] = useState([]);

  const getAllFoods = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const dataJson = await response.json();
    const foods = dataJson && dataJson.meals;
    setFoodsByNationality(foods);
  };

  useEffect(() => {
    const requestNationalities = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const dataJson = await response.json();
      setResultsNationalities(dataJson.meals);
    };
    getAllFoods();
    requestNationalities();
  }, []);

  const requisitionFoodsByNationality = async (nationality) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
    const dataJson = await response.json();
    const data = dataJson && dataJson.meals;
    setFoodsByNationality(data);
  };

  const selectNationality = async ({ target }) => {
    if (target.value === 'all') {
      await getAllFoods();
    } else {
      await requisitionFoodsByNationality(target.value);
    }
  };

  return (
    <main>
      <Header name="Explore Nationalities" />
      <select
        defaultValue="Selected"
        data-testid="explore-by-nationality-dropdown"
        onChange={ selectNationality }
      >
        <option
          value="all"
          data-testid="All-option"
        >
          All

        </option>
        {resultsNationalities && resultsNationalities.map((nationality, index) => {
          const { strArea } = nationality;
          return (
            <option
              key={ index }
              value={ strArea }
              data-testid={ `${strArea}-option` }
            >
              {strArea}
            </option>
          );
        })}
      </select>
      {
        foodsByNationality && foodsByNationality.map((recipe, index) => {
          const maxRecipes = 12;
          return index < maxRecipes && (
            <RecipeCard
              data-testid={ `${index}-recipe-card` }
              key={ index }
              index={ index }
              recipe={ recipe }
            />
          );
        })
      }
      <Footer />
    </main>
  );
}

export default FoodsNationality;
