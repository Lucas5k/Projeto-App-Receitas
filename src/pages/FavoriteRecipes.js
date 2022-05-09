import React, { useEffect, useContext } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import FiltersButtons from '../components/FiltersButtons';
import NewHeader from '../components/NewHeader';
import contextGlobal from '../context';
import { getFavorites } from '../helpers/favoritesRecipes';

function FavoritesRecipes() {
  const { allFavoritesRecipes,
    filteredFavoritesRecipes,
    setFilteredFavoritesRecipes,
    setAllFavoritesRecipes } = useContext(contextGlobal);

  useEffect(() => {
    const favoriteRecipes = getFavorites() || [];
    setAllFavoritesRecipes(favoriteRecipes);
    setFilteredFavoritesRecipes(favoriteRecipes);
  }, []);

  const filterFavoritesRecipes = ({ target }) => {
    switch (target.value) {
    case 'all':
      setFilteredFavoritesRecipes(allFavoritesRecipes);
      break;
    case 'food':
      setFilteredFavoritesRecipes(allFavoritesRecipes
        .filter((favoriteRecipes) => favoriteRecipes.type === 'food'));
      break;
    case 'drinks':
      setFilteredFavoritesRecipes(allFavoritesRecipes
        .filter((favoriteRecipes) => favoriteRecipes.type === 'drink'));
      break;
    default:
      break;
    }
  };

  return (
    <main>
      <NewHeader name="Favorite Recipes" />
      <FiltersButtons onClickButton={ filterFavoritesRecipes } />
      { filteredFavoritesRecipes.map((filteredFavoriteRecipes, index) => (
        <DoneRecipeCard
          key={ index }
          doneRecipe={ filteredFavoriteRecipes }
          index={ index }
          isFavoritePage
        />
      )) }
    </main>
  );
}

export default FavoritesRecipes;
