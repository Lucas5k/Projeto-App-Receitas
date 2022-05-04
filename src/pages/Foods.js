import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ButtonCategory from '../components/ButtonCategory';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import contextGlobal from '../context';

function Foods() {
  const { foodsRecipes,
    oneRecipes,
    resultsFoods, foodsCategory,
    resultsFilterFoods, handleAllFilter } = useContext(contextGlobal);
  const checkingValues = foodsRecipes.length <= 0 ? resultsFoods : foodsRecipes;
  const checkingfilter = resultsFilterFoods.length <= 0
    ? checkingValues : resultsFilterFoods;
  return (
    <section>
      <Header name="Foods" />
      <button
        type="button"
        onClick={ handleAllFilter }
        data-testid="All-category-filter"
      >
        All
      </button>
      {
        foodsCategory && foodsCategory.map((category, index) => {
          const maxCategory = 5;
          return index < maxCategory && (
            <section>
              <ButtonCategory
                category={ category }
              />
            </section>);
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
            <section>
              <RecipeCard
                data-testid={ `${index}-recipe-card` }
                index={ index }
                recipe={ recipe }
              />
            </section>
          );
        })
      }
      <Footer />
    </section>
  );
}

export default Foods;
