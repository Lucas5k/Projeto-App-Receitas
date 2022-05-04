import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  getFavorites, removeFavorites, saveFavorites,
} from '../helpers/favoritesRecipes';

function FavoriteButton({ id, recipe, pageDetails }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      removeFavorites(id);
    } else {
      setIsFavorite(true);
      saveFavorites(recipe, pageDetails);
    }
  };

  useEffect(() => {
    setIsFavorite(getFavorites(id));
  }, []);

  return (
    <button
      type="button"
      onClick={ handleFavorite }
    >
      <img
        data-testid="favorite-btn"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="Heart Icon"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  pageDetails: PropTypes.string.isRequired,
};

export default FavoriteButton;
