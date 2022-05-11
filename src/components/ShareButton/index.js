import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareIcon from '../../images/shareIcon.svg';
import ContainerShareButton from './style';

const copy = require('clipboard-copy');

function ShareButton({ index, recipeType, id }) {
  const { pathname } = useLocation();
  const isInDetailsRecipe = pathname.includes('foods') || pathname.includes('drinks');

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleShare = () => {
    if (isInDetailsRecipe) {
      copy(`http://localhost:3000${pathname}`);
    } else {
      copy(`http://localhost:3000/${recipeType}s/${id}`);
    }
    setIsLinkCopied(true);
  };

  return (
    <ContainerShareButton>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img
          src={ ShareIcon }
          alt="Share Icon"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      { isLinkCopied && <span>Link copied!</span>}
    </ContainerShareButton>
  );
}

ShareButton.defaultProps = {
  index: null,
  recipeType: null,
  id: null,

};

ShareButton.propTypes = {
  index: PropTypes.number,
  recipeType: PropTypes.string,
  id: PropTypes.string,
};

export default ShareButton;
