import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';

function DoneRecipeCard({ doneRecipe, index }) {
  return (
    <div>
      <img
        data-testid={ `${index}-horizontal-image` }
        src=""
        alt="recipe-card"
      />
      <span data-testid={ `${index}-horizontal-top-text` } />
      <span data-testid={ `${index}-horizontal-name` } />
      <span data-testid={ `${index}-horizontal-done-date` } />
      <ShareButton index={ index } />
      { doneRecipe.tags.length && doneRecipe.tags.map((tag, i) => (
        <span data-testid={ `${index}-${tag}-horizontal-tag` } key={ i }>{tag}</span>
      ))}
    </div>
  );
}

DoneRecipeCard.propTypes = {
  doneRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
