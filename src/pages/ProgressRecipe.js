import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProgressRecipe.css';
import { useLocation, useHistory } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import ShareIcon from '../images/shareIcon.svg';
import getIngredientsAndMeasures from '../helpers/getIngredientsAndMeasures';
import { requestRecipe } from '../helpers/requestAPIs';

const copy = require('clipboard-copy');

function ProgressRecipe({ pageDetails }) {
  const [recipe, setRecipe] = useState({});
  const [conditionalsVariables, setConditionalsVariables] = useState({
    recipeTitle: '',
    recipeImgSource: '',
    recipeAlcoholic: '',
    showVideo: false,
  });
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState([]);
  const [resultsStorage, setResultsStorage] = useState([]);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  useEffect(() => {
    const getRecipe = async () => {
      const recipeData = await requestRecipe(pageDetails, id);
      setRecipe(...recipeData);
      getIngredientsAndMeasures(recipeData[0]);
    };
    getRecipe();
  }, []);

  useEffect(() => {
    setIngredientsAndMeasures(getIngredientsAndMeasures(recipe));
    const statements = () => {
      if (pageDetails === 'FoodsProgress') {
        setConditionalsVariables({
          recipeTitle: recipe.strMeal,
          recipeImgSource: recipe.strMealThumb,
          recipeAlcoholic: null,
        });
      }
      if (pageDetails === 'DrinksProgress') {
        setConditionalsVariables({
          recipeTitle: recipe.strDrink,
          recipeImgSource: recipe.strDrinkThumb,
          recipeAlcoholic: recipe.strAlcoholic,
        });
      }
    };
    statements();
  }, [recipe]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!recipes) {
      const recips = {
        meals: { [`${id}`]: [] },
        cocktails: { [`${id}`]: [] },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(recips));
    } else {
      const mealsValidation = recipes && recipes.meals;
      const cocktailsValidation = recipes && recipes.cocktails;
      if (pageDetails === 'FoodsProgress') {
        const mealsIdValidation = mealsValidation && mealsValidation[`${id}`];
        setResultsStorage(mealsIdValidation);
      } else {
        const drinksIdValidation = cocktailsValidation && cocktailsValidation[`${id}`];
        setResultsStorage(drinksIdValidation);
      }
    }
  }, []);

  const handleShare = () => {
    const pageCopy = pageDetails === 'FoodsProgress'
      ? copy(`http://localhost:3000/foods/${id}`) : copy(`http://localhost:3000/drinks/${id}`);
    setIsLinkCopied(true);
    return pageCopy;
  };
  // se a lógica do Storage é no handleChange, e com [...arr], quando recarrega a pag
  // os elementos continuam salvos em Application, se no useEffect com [...isRisk], não ficam salvos.

  const handleChange = (ingredient) => {
    let arr = [];
    if (resultsStorage.includes(ingredient)) {
      arr = resultsStorage.filter((el) => el !== ingredient);
    } else {
      arr = [...resultsStorage, ingredient];
    }
    setResultsStorage(arr);
    const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (pageDetails === 'FoodsProgress') {
      const meals = {
        meals: {
          ...recipes.meals,
          [`${id}`]: [...arr],
        },
        cocktails: { ...recipes.cocktails },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(meals));
    } else {
      const drinks = {
        meals: { ...recipes.meals },
        cocktails: {
          ...recipes.cocktails,
          [`${id}`]: [...arr],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(drinks));
    }

    setIsDisabledButton(arr.length !== ingredientsAndMeasures.length);
  };
  const { push } = useHistory();
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
      { isLinkCopied && <span>Link copied!</span> }
      <FavoriteButton id={ id } recipe={ recipe } pageDetails={ pageDetails } />
      <span data-testid="recipe-category">
        { recipe.strCategory }
        {''}
        { recipe.strAlcoholic && ` (${recipe.strAlcoholic})`}
      </span>
      <div>
        {
          ingredientsAndMeasures
          && ingredientsAndMeasures.map((ingredientObject, index) => (
            <label
              htmlFor={ `ingredient${index}` }
              data-testid={ `${index}-ingredient-step` }
              key={ index }
              className={ resultsStorage
                && resultsStorage.includes(ingredientObject.ingredient)
                && 'taskScratched' }
              onChange={ () => handleChange(ingredientObject.ingredient) }
            >
              <input
                id={ `ingredient${index}` }
                type="checkbox"
                checked={ resultsStorage
                  && resultsStorage.includes(ingredientObject.ingredient) }
              />
              {ingredientObject.ingredient}
            </label>))
        }
      </div>
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ isDisabledButton }
        onClick={ () => push('/done-recipes') }
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
