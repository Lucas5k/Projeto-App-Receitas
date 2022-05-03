import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function RecipeCard({ recipe, index }) {
  const { pathname } = useLocation();

  return (
    <section key={ index } data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ pathname === '/foods' ? recipe.strMealThumb : recipe.strDrinkThumb }
        alt="recipe"
      />
      <span data-testid={ `${index}-card-name` }>
        { pathname === '/drinks'
          ? recipe.strDrink : recipe.strMeal }
      </span>
    </section>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
