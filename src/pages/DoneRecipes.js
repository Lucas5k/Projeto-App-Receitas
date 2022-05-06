import React, { useState, useEffect } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import FiltersButtons from '../components/FiltersButtons';
import NewHeader from '../components/NewHeader';
import { getDoneRecipes } from '../helpers/getRecipes';

function DoneRecipes() {
  const [allDoneRecipes, setAllDoneRecipes] = useState([]);
  const [filteredDoneRecipes, setFilteredDoneRecipes] = useState([]);

  useEffect(() => {
    setAllDoneRecipes(getDoneRecipes());
    setFilteredDoneRecipes(getDoneRecipes());
  }, []);

  const filterDoneRecipes = ({ target }) => {
    switch (target.value) {
    case 'all':
      setFilteredDoneRecipes(allDoneRecipes);
      break;
    case 'food':
      setFilteredDoneRecipes(allDoneRecipes
        .filter((doneRecipe) => doneRecipe.type === 'food'));
      break;
    case 'drinks':
      setFilteredDoneRecipes(allDoneRecipes
        .filter((doneRecipe) => doneRecipe.type === 'drink'));
      break;
    default:
      break;
    }
  };
  return (
    <main>
      <NewHeader name="Done Recipes" />
      <FiltersButtons onClickButton={ filterDoneRecipes } />
      { filteredDoneRecipes.map((filteredDoneRecipe, index) => (
        <DoneRecipeCard
          key={ index }
          doneRecipe={ filteredDoneRecipe }
          index={ index }
        />
      )) }
    </main>
  );
}

export default DoneRecipes;
