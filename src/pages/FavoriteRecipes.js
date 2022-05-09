import React from 'react';
import NewHeader from '../components/NewHeader';
import FiltersButtons from '../components/FiltersButtons';

function FavoritesRecipes() {
  return (
    <main>
      <NewHeader name="Favorite Recipes" />
      <FiltersButtons />
    </main>
  );
}

export default FavoritesRecipes;
