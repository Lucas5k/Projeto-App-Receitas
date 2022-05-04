import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';
import contextGlobal from '../context';

function ExploreFoods() {
  const { handleRandom, resultsRandomFoods } = useContext(contextGlobal);
  const { idMeal } = resultsRandomFoods;
  return (
    <main>
      <NewHeader name="Explore Foods" />
      <Footer />
      <Link
        to="/explore/foods/ingredients"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </Link>
      <Link
        to="/explore/foods/nationalities"
        data-testid="explore-by-nationality"
      >
        By Nationality
      </Link>
      <Link
        to={ `/foods/${idMeal}` }
        data-testid="explore-surprise"
        onClick={ handleRandom }
      >
        Surprise me!
      </Link>
    </main>
  );
}

export default ExploreFoods;

/*         resultsRandomFoods && resultsRandomFoods.map((food, index) => {
          const { idMeal } = food;
          return (
            <div key={ index }> */
