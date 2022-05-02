import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import contextGlobal from '../context';

function Drinks() {
  const { drinksRecipes, oneRecipes, resultsFoods } = useContext(contextGlobal);
  const checkingValues = drinksRecipes.length <= 0 ? resultsFoods : drinksRecipes;
  return (
    <section>
      <Header name="Drinks" />
      {
        oneRecipes && oneRecipes.map((element, index) => {
          const { idDrink } = element;
          return (
            <Redirect
              key={ index }
              to={ `/drinks/${idDrink}` }
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
            />);
        })
      }
      <Footer />
    </section>
  );
}

export default Drinks;
