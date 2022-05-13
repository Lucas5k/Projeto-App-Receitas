import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';
import ContainerExplore from '../styles/Explore';

function Explore() {
  return (
    <>
      <NewHeader name="Explore" />
      <ContainerExplore>
        <Link
          to="/explore/foods"
          data-testid="explore-foods"
          className="buttonFoods"
        >
          Explore Foods
        </Link>
        <Link
          to="/explore/drinks"
          data-testid="explore-drinks"
          className="buttonDrinks"
        >
          Explore Drinks
        </Link>
      </ContainerExplore>
      <Footer />
    </>
  );
}

export default Explore;
