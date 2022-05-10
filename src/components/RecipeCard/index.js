import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContainerRecipeCard from './style';

function RecipeCard({ recipe, index }) {
  const { pathname } = useLocation();
  const { idMeal, idDrink } = recipe;

  const checkingLink = pathname.includes('/foods')
    ? `/foods/${idMeal}`
    : `/drinks/${idDrink}`;

  return (
    <ContainerRecipeCard>
      <section key={ index } data-testid={ `${index}-recipe-card` }>
        <Link to={ checkingLink }>
          <img
            data-testid={ `${index}-card-img` }
            src={ pathname.includes('/foods')
              ? recipe.strMealThumb
              : recipe.strDrinkThumb }
            alt="recipe"
          />
          <span data-testid={ `${index}-card-name` }>
            {pathname.includes('/foods')
              ? recipe.strMeal
              : recipe.strDrink }
          </span>
        </Link>
      </section>
    </ContainerRecipeCard>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
