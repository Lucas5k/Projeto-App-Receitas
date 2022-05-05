import React from 'react';
import NewHeader from '../components/NewHeader';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';

function DrinksIngredients() {
  return (
    <main>
      <NewHeader name="Explore Ingredients" />
      <IngredientsCard />
      <Footer />
    </main>
  );
}

export default DrinksIngredients;
