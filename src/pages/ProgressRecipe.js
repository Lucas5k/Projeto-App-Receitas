import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import contextGlobal from '../context';
import FavoriteButton from '../components/FavoriteButton';
import ShareIcon from '../images/shareIcon.svg';
import getIngredientsAndMeasures from '../helpers/getIngredientsAndMeasures';

function ProgressRecipe({ pageDetails }) {
  const { progressRecipe } = useContext(contextGlobal);
  const [conditionalsVariables, setConditionalsVariables] = useState({
    recipeTitle: '',
    recipeImgSource: '',
    recipeAlcoholic: '',
    showVideo: false,
  });
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState([]);

  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  useEffect(() => {
    setIngredientsAndMeasures(getIngredientsAndMeasures(progressRecipe));
    const statements = () => {
      if (pageDetails === 'foods') {
        setConditionalsVariables({
          recipeTitle: progressRecipe.strMeal,
          recipeImgSource: progressRecipe.strMealThumb,
          recipeAlcoholic: null,
        });
      }
      if (pageDetails === 'drinks') {
        setConditionalsVariables({
          recipeTitle: progressRecipe.strDrink,
          recipeImgSource: progressRecipe.strDrinkThumb,
          recipeAlcoholic: progressRecipe.strAlcoholic,
        });
      }
    };
    statements();
  }, [progressRecipe]);

  const handleShare = () => {
    copy(`http://localhost:3000${pathname}`);
    setIsLinkCopied(true);
  };

  return (
    <main>
      <h1
        data-testid="recipe-title"
      >
        { conditionalsVariables.recipeTitle }

      </h1>
      <img
        src={ conditionalsVariables.recipeImgSource }
        alt="recipe"
        data-testid="recipe-photo"
      />
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img src={ ShareIcon } alt="Share Icon" />
      </button>
      { isLinkCopied && <span>Link copied!</span>}
      <FavoriteButton id={ id } recipe={ progressRecipe } pageDetails={ pageDetails } />
      <span data-testid="recipe-category">
        { progressRecipe.strCategory }
        {''}
        { progressRecipe.strAlcoholic && ` (${progressRecipe.strAlcoholic})`}
      </span>
      <div>
        {
          ingredientsAndMeasures.map((ingredientObject, index) => (
            <label
              htmlFor={ `ingredient${index}` }
              data-testid={ `${index}-ingredient-step` }
              key={ index }
            >
              {ingredientObject.ingredient}
              <input
                id={ `ingredient${index}` }
                type="checkbox"
              />
            </label>
          ))
        }
      </div>
      <p data-testid="instructions">{ progressRecipe.strInstructions }</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finish
      </button>
    </main>
  );
}

ProgressRecipe.propTypes = {
  pageDetails: PropTypes.string.isRequired,
};

export default ProgressRecipe;
