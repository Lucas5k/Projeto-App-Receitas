import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import contextGlobal from '../context';
import { verifyIfIsFavorites } from '../helpers/favoritesRecipes';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ name, recipe, pageDetails, isFavoritePage, index }) {
  const { handleFavorites } = useContext(contextGlobal);
  const isFavoriteRecipe = verifyIfIsFavorites(name);

  return (
    <button
      type="button"
      onClick={ () => handleFavorites(name, recipe, pageDetails) }
    >
      <img
        data-testid={ isFavoritePage
          ? `${index}-horizontal-favorite-btn`
          : 'favorite-btn' }
        src={ isFavoriteRecipe
          ? blackHeartIcon : whiteHeartIcon }
        alt="Heart Icon"
      />
    </button>
  );
}

FavoriteButton.defaultProps = {
  isFavoritePage: false,
  index: null,
};

FavoriteButton.propTypes = {
  name: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  pageDetails: PropTypes.string.isRequired,
  isFavoritePage: PropTypes.bool,
  index: PropTypes.number,
};

export default FavoriteButton;
