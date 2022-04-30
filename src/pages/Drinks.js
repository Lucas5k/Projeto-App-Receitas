import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import contextGlobal from '../context';

function Drinks() {
  const { drinksRecipes } = useContext(contextGlobal);

  return (
    <section>
      <Header name="Drinks" />
      {
        drinksRecipes.length === 1 && drinksRecipes.map((element, index) => {
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
        drinksRecipes.length > 1 && drinksRecipes.map((recipe, index) => {
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

export default Drinks;
