import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import contextGlobal from '../context';
import ButtonCategory from '../components/ButtonCategory';

function Foods() {
  const { foodsRecipes,
    oneRecipes,
    resultsFoods, foodsCategory, resultsFilterFoods } = useContext(contextGlobal);
  const checkingValues = foodsRecipes.length <= 0 ? resultsFoods : foodsRecipes;
  const checkingfilter = resultsFilterFoods.length <= 0
    ? checkingValues : resultsFilterFoods;
  return (
    <section>
      <Header name="Foods" />
      {
        foodsCategory && foodsCategory.map((category, index) => {
          const maxCategory = 5;
          return index < maxCategory && (
            <ButtonCategory
              category={ category }
            />);
        })
      }
      {
        oneRecipes && oneRecipes.map((element, index) => {
          const { idMeal } = element;
          return (
            <Redirect
              key={ index }
              to={ `/foods/${idMeal}` }
            />
          );
        })
      }
      {
        checkingfilter && checkingfilter.map((recipe, index) => {
          const maxRecipes = 12;
          return index < maxRecipes && (
            <RecipeCard
              data-testid={ `${index}-recipe-card` }
              index={ index }
              recipe={ recipe }
            />
          );
        })
      }
      <Footer />
    </section>
  );
}

export default Foods;
