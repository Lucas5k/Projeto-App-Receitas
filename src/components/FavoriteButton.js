import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import getFavorites from '../helpers/getFavorites';

function FavoriteButton({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(getFavorites(id));
  }, []);

  return (
    <button
      type="button"
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
};

export default FavoriteButton;
