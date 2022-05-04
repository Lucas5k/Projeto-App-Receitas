export const getDoneRecipes = (id) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes) {
    return doneRecipes.some((doneRecipe) => doneRecipe.id === id);
  }
};

export const getContinueRecipe = (id, pageDetails) => {
  const progressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const foodsIsTrue = pageDetails === 'foods';
  if (progressRecipes) {
    let idArray;
    if (foodsIsTrue) {
      idArray = Object.keys(progressRecipes.meals);
    } else {
      idArray = Object.keys(progressRecipes.cocktails);
    }
    return idArray.includes(id);
  }
};
