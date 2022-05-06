import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProgressRecipe.css';
import { useLocation } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import ShareIcon from '../images/shareIcon.svg';
import getIngredientsAndMeasures from '../helpers/getIngredientsAndMeasures';
import { requestRecipe } from '../helpers/requestAPIs';

const copy = require('clipboard-copy');

function ProgressRecipe({ pageDetails }) {
  const [isRisk, setIsRisk] = useState([]);
  const [recipe, setRecipe] = useState({});
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
    if (pageDetails === 'FoodsProgress') {
      const meals = {
        meals: {
          [`${id}`]: [...isRisk],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(meals));
    }
    // console.log(inProgressRecipes);
  }, [isRisk]);

  const handleShare = () => {
    const test = pageDetails === 'FoodsProgress'
      ? copy(`http://localhost:3000/foods/${id}`) : copy(`http://localhost:3000/drinks/${id}`);

    console.log(pathname);
    setIsLinkCopied(true);
    return test;
  };

  const handleChange = (ingredient) => {
    let arr = [];
    if (isRisk.includes(ingredient)) {
      arr = isRisk.filter((el) => el !== ingredient);
    } else {
      arr = [...isRisk, ingredient];
      // const progressRecipes = {
      //   inProgressRecipes: {
      //     cocktails: {
      //       []: [],
      //     },
      //     meals: {
      //       id: [],
      //     },
      //   },
      // };
    } setIsRisk(arr);
    // if (pageDetails === 'FoodsProgress') {
    //   const meals = {
    //     meals: {
    //       [`${id}`]: [...arr],
    //     },
    //   };
    //   localStorage.setItem('inProgressRecipes', JSON.stringify(meals));
    // }
    // console.log(inProgressRecipes);
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
              className={ isRisk.includes(ingredientObject.ingredient)
                && 'taskScratched' }
              onChange={ () => handleChange(ingredientObject.ingredient) }
            >
              <input
                id={ `ingredient${index}` }
                type="checkbox"
              />
              {ingredientObject.ingredient}
            </label>))
        }
      </div>
      <p data-testid="instructions">{ recipe.strInstructions }</p>
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
