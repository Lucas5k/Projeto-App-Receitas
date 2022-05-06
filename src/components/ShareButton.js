import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton({ index }) {
  const { pathname } = useLocation();
  const isInDetailsRecipe = pathname.includes('foods') || pathname.includes('drinks');

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleShare = () => {
    copy(`http://localhost:3000${pathname}`);
    setIsLinkCopied(true);
  };

  return (
    <>
      <button
        type="button"
        data-testid={ isInDetailsRecipe ? 'share-btn' : `${index}-horizontal-share-btn` }
        onClick={ handleShare }
      >
        <img src={ ShareIcon } alt="Share Icon" />
      </button>
      { isLinkCopied && <span>Link copied!</span>}
    </>
  );
}

ShareButton.defaultProps = {
  index: null,
};

ShareButton.propTypes = {
  index: PropTypes.number,
};

export default ShareButton;
