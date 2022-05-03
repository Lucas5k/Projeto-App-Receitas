import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function RecipeCard({ recipe, index }) {
  const { pathname } = useLocation();
  const { idMeal, idDrink } = recipe;

  const checkingLink = pathname === '/foods' ? `/foods/${idMeal}` : `/drinks/${idDrink}`;
  return (
    <section key={ index } data-testid={ `${index}-recipe-card` }>
      <Link to={ checkingLink }>
        <img
          data-testid={ `${index}-card-img` }
          src={ pathname === '/foods' ? recipe.strMealThumb : recipe.strDrinkThumb }
          alt="recipe"
        />
        <span data-testid={ `${index}-card-name` }>
          {pathname === '/foods'
            ? recipe.strMeal : recipe.strDrink }
        </span>
      </Link>
    </section>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
