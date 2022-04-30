import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import contextGlobal from '../context';

function Foods() {
  const { foodsRecipes } = useContext(contextGlobal);

  return (
    <section>
      <Header name="Foods" />
      {
        foodsRecipes.length === 1 && foodsRecipes.map((element, index) => {
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
        foodsRecipes.length > 1 && foodsRecipes.map((recipe, index) => {
          const maxRecipes = 12;
          return index < maxRecipes && (
            <RecipeCard
              index={ index }
              recipe={ recipe }
            />);
        })
      }
      <Footer />
    </section>
  );
}

export default Foods;
