import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailsRecipe({ pageDetails }) {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recomendations, setRecomendations] = useState(['teste']);
  const { pathname } = useLocation();

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
      const url = pageDetails === 'foods'
        ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(url);
      const dataJson = await response.json();
      const recipeData = dataJson && pageDetails === 'foods'
        ? dataJson.meals
        : dataJson.drinks;
      setRecipe(...recipeData);
      getIngredientsAndMeasures(recipeData[0]);
    };
    requestReceipeById();
  }, []);

  return (
    <div>
      <h1 data-testid="recipe-title">Título</h1>
      <img src="" alt="recipe" data-testid="recipe-photo" />
      <button type="button" data-testid="share-btn">Share</button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorite
      </button>
      <span data-testid="recipe-category">Categorie</span>
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
      <p data-testid="instructions">Instruções</p>
      { pageDetails === 'foods' && (
        <video data-testid="video" width="320" height="240" controls="controls">
          <source src="teste.mp4" type="teste.mp4" />
          <track kind="captions" />
        </video>)}
      <ol>
        {
          recomendations.map((recomendation, index) => (
            <li
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              {recomendation}
            </li>
          ))
        }
      </ol>
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </div>
  );
}

DetailsRecipe.propTypes = {
  pageDetails: PropTypes.string.isRequired,
};

export default DetailsRecipe;
