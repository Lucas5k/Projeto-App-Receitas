import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { requestRecipe, requestRecomendation } from '../helpers/requestAPIs';
import { verifyIfIsDoneRecipe, getContinueRecipe } from '../helpers/getRecipes';
import getIngredientsAndMeasures from '../helpers/getIngredientsAndMeasures';
import Carousel from './Carousel';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

function DetailsRecipe({ pageDetails }) {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const history = useHistory();

  const [recipe, setRecipe] = useState({});
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [conditionalsVariables, setConditionalsVariables] = useState({
    recipeTitle: '',
    recipeImgSource: '',
    recipeAlcoholic: '',
    showVideo: false,
  });
  const [isDoneRecipe, setIsDoneRecipe] = useState(false);
  const [inProgressRecipe, setInProgressRecipe] = useState(false);

  useEffect(() => {
    const getRecipe = async () => {
      const recipeData = await requestRecipe(pageDetails, id);
      setRecipe(...recipeData);
      getIngredientsAndMeasures(recipeData[0]);
      const recipeRecomendation = await requestRecomendation(pageDetails);
      setRecomendations(recipeRecomendation);
    };
    getRecipe();
  }, []);

  useEffect(() => {
    setIsDoneRecipe(verifyIfIsDoneRecipe(id));
    setInProgressRecipe(getContinueRecipe(id, pageDetails));
  }, []);

  useEffect(() => {
    setIngredientsAndMeasures(getIngredientsAndMeasures(recipe));
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
      <ShareButton />
      <FavoriteButton id={ id } recipe={ recipe } pageDetails={ pageDetails } />
      <span data-testid="recipe-category">
        { recipe.strCategory }
        {''}
        { recipe.strAlcoholic && ` (${recipe.strAlcoholic})`}
      </span>
      <ol>
        {
          ingredientsAndMeasures.map((ingredientObject, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              { ingredientObject.ingredient }
              {' '}
              { ingredientObject.measures }
            </li>
          ))
        }
      </ol>
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      { conditionalsVariables.showVideo && (
        <div style={ { marginBottom: '20px' } }>
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
          </iframe>
        </div>)}
      <Carousel recomendations={ recomendations } pageDetails={ pageDetails } />
      {
        !isDoneRecipe && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={ { position: 'fixed', bottom: '0', right: '0' } }
            onClick={ () => history.push(`${pathname}/in-progress`) }
          >
            { inProgressRecipe ? 'Continue Recipe' : 'Start Recipe' }
          </button>
        )
      }
    </div>
  );
}

DetailsRecipe.propTypes = {
  pageDetails: PropTypes.string.isRequired,
};

export default DetailsRecipe;
