import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';
import contextGlobal from '../context';
import ContainerExploreDrinks from '../styles/ExploreDrinks';

function ExploreDrinks() {
  const { handleRandom, resultsRandomDrinks } = useContext(contextGlobal);
  return (
    <main>
      <NewHeader name="Explore Drinks" />
      <ContainerExploreDrinks>
        <Link
          to="/explore/drinks/ingredients"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleRandom }
        >
          Surprise me!
        </button>
        {
          resultsRandomDrinks && resultsRandomDrinks.map((drink, index) => {
            const { idDrink } = drink;
            return (
              <Redirect
                key={ index }
                to={ `/drinks/${idDrink}` }
              />
            );
          })
        }
      </ContainerExploreDrinks>
      <Footer />
    </main>
  );
}

export default ExploreDrinks;
