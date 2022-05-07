import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';

function DoneRecipeCard({ doneRecipe, index }) {
  return (
    <div>
      <Link
        to={ `/${doneRecipe.type}s/${doneRecipe.id}` }
      >
        <img
          width={ 200 }
          data-testid={ `${index}-horizontal-image` }
          src={ doneRecipe.image }
          alt="recipe-card"
        />
      </Link>
      <Link to={ `/${doneRecipe.type}s/${doneRecipe.id}` }>
        <span data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</span>
      </Link>
      <span
        data-testid={ `${index}-horizontal-top-text` }
      >
        {doneRecipe.type === 'food'
          ? `${doneRecipe.nationality} - ${doneRecipe.category}`
          : doneRecipe.alcoholicOrNot}
      </span>
      <span data-testid={ `${index}-horizontal-done-date` }>{doneRecipe.doneDate}</span>
      <ShareButton
        index={ index }
        recipeType={ doneRecipe.type }
        id={ doneRecipe.id }
      />
      { doneRecipe.tags.length && doneRecipe.tags.map((tag, i) => {
        const maxTags = 2;
        return i < maxTags && (
          <span data-testid={ `${index}-${tag}-horizontal-tag` } key={ i }>{tag}</span>
        );
      })}
      ;
    </div>
  );
}

DoneRecipeCard.propTypes = {
  doneRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
