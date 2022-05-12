import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton';
import ShareButton from '../ShareButton';
import ContainerDoneRecipeCard from './style';

function DoneRecipeCard({ doneRecipe, index, isFavoritePage }) {
  return (
    <ContainerDoneRecipeCard>
      <div className="recipeBody">
        <Link
          to={ `/${doneRecipe.type}s/${doneRecipe.id}` }
        >
          <img
            width={ 200 }
            data-testid={ `${index}-horizontal-image` }
            src={ doneRecipe.image }
            alt="recipe-card"
            className="recipeImage"
          />
        </Link>
        <div>
          <Link to={ `/${doneRecipe.type}s/${doneRecipe.id}` }>
            <h1 data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</h1>
          </Link>
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            {doneRecipe.type === 'food'
              ? `${doneRecipe.nationality} - ${doneRecipe.category}`
              : doneRecipe.alcoholicOrNot}
          </h2>
          <span
            data-testid={ `${index}-horizontal-done-date` }
          >
            {doneRecipe.doneDate}
          </span>
        </div>
      </div>
      <div>
        <ShareButton
          index={ index }
          recipeType={ doneRecipe.type }
          id={ doneRecipe.id }
        />
        { isFavoritePage && (
          <FavoriteButton
            name={ doneRecipe.name }
            recipe={ doneRecipe }
            pageDetails={ `${doneRecipe.type}s` }
            isFavoritePage
            index={ index }
          />) }
        { doneRecipe.tags && doneRecipe.tags.length && doneRecipe.tags.map((tag, i) => {
          const maxTags = 2;
          return i < maxTags && (
            <span data-testid={ `${index}-${tag}-horizontal-tag` } key={ i }>{tag}</span>
          );
        })}
      </div>
    </ContainerDoneRecipeCard>
  );
}

DoneRecipeCard.defaultProps = {
  isFavoritePage: false,
};

DoneRecipeCard.propTypes = {
  doneRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  isFavoritePage: PropTypes.bool,
};

export default DoneRecipeCard;
