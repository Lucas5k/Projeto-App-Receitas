import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import contextGlobal from '../context';

function Foods() {
  const { foodsRecipes, oneRecipes, resultsFoods } = useContext(contextGlobal);
  const checkingValues = foodsRecipes.length <= 0 ? resultsFoods : foodsRecipes;
  return (
    <section>
      <Header name="Foods" />
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
        checkingValues && checkingValues.map((recipe, index) => {
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
