import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function DetailsRecipe({ pageDetails }) {
  const { pathname } = useLocation();
  const foodsIsTrue = pageDetails === 'foods';

  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [conditionalsVariables, setConditionalsVariables] = useState({
    recipeTitle: '',
    recipeImgSource: '',
    recipeAlcoholic: '',
    showVideo: false,
  });

  useEffect(() => {
    const getIngredientsAndMeasures = (object) => {
      const maxIngredients = 21;
      const objectIngredients = [];
      const objectMeasures = [];
      for (let i = 1; i < maxIngredients; i += 1) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;
        if (object[ingredient]) {
          objectIngredients.push(object[ingredient]);
          objectMeasures.push(object[measure]);
        }
      }
      setIngredients(objectIngredients);
      setMeasures(objectMeasures);
    };

    const requestReceipeById = async () => {
      const id = pathname.split('/')[2];
      const url = foodsIsTrue
        ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(url);
      const dataJson = await response.json();
      const recipeData = dataJson && foodsIsTrue
        ? dataJson.meals
        : dataJson.drinks;
      setRecipe(...recipeData);
      getIngredientsAndMeasures(recipeData[0]);
    };
    requestReceipeById();
    const requestRecomendations = async () => {
      const url = foodsIsTrue
        ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
        : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(url);
      const dataJson = await response.json();
      const recipeData = dataJson && !foodsIsTrue
        ? dataJson.meals
        : dataJson.drinks;
      console.log(dataJson);
      setRecomendations(recipeData);
    };
    requestRecomendations();
  }, []);

  useEffect(() => {
    const statements = () => {
      if (pageDetails === 'foods') {
        setConditionalsVariables({
          recipeTitle: recipe.strMeal,
          recipeImgSource: recipe.strMealThumb,
          recipeAlcoholic: null,
          showVideo: true,
        });
      }
      if (pageDetails === 'drinks') {
        setConditionalsVariables({
          recipeTitle: recipe.strDrink,
          recipeImgSource: recipe.strDrinkThumb,
          recipeAlcoholic: recipe.strAlcoholic,
          showVideo: false,
        });
      }
    };
    statements();
  }, [recipe]);

  return (
    <div>
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
      <button type="button" data-testid="share-btn">Share</button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorite
      </button>
      <span data-testid="recipe-category">
        { recipe.strCategory }
        {''}
        { recipe.strAlcoholic && ` (${recipe.strAlcoholic})`}
      </span>
      <ol>
        {
          ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              { ingredient }
              {' '}
              { measures[index] }
            </li>
          ))
        }
      </ol>
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      { conditionalsVariables.showVideo && (
        <iframe
          width="560"
          height="315"
          src={ recipe.strYoutube }
          data-testid="video"
          title="YouTube video player"
          frameBorder="0"
          allow={ `accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture` }
          allowFullScreen
        >
          Não foi possivel renderizar o video
        </iframe>)}
      <ol>
        {recomendations.map((recomendation, index) => (
          <li
            key={ index }
            data-testid={ `${index}-recomendation-card` }
          >
            {recomendation.strCategory}
          </li>
        ))}
      </ol>
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </div>
  );
}

DetailsRecipe.propTypes = {
  pageDetails: PropTypes.string.isRequired,
};

export default DetailsRecipe;
