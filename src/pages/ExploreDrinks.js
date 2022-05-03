import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';
import contextGlobal from '../context';

function ExploreDrinks() {
  const { handleRandom, resultsRandomDrinks } = useContext(contextGlobal);
  const { idDrink } = resultsRandomDrinks;
  console.log(resultsRandomDrinks);
  return (
    <main>
      <NewHeader name="Explore Drinks" />
      <Footer />
      <Link
        to="/explore/drinks/ingredients"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </Link>
      <Link
        to={ `/drinks/${idDrink}` }
        data-testid="explore-surprise"
        onClick={ handleRandom }
      >
        Surprise me!
      </Link>
    </main>
  );
}

export default ExploreDrinks;
