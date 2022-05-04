export function getFavorites(id) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favorites && favorites.some((recipe) => recipe.id === id);
}

export function saveFavorites(recipe, pageDetails) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isRecipeFood = pageDetails === 'foods';
  const reducedReceipe = {
    id: isRecipeFood ? recipe.idMeal : recipe.idDrink,
    type: isRecipeFood ? 'food' : 'drink',
    nationality: isRecipeFood ? recipe.strArea : '',
    category: recipe.strCategory,
    alcoholicOrNot: isRecipeFood ? '' : recipe.strAlcoholic,
    name: isRecipeFood ? recipe.strMeal : recipe.strDrink,
    image: isRecipeFood ? recipe.strMealThumb : recipe.strDrinkThumb,
  };
  const updatedKey = [...favorites, reducedReceipe];
  console.log(updatedKey);
  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedKey));
}

export function removeFavorites(id) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const updatedKey = favorites && favorites.filter((recipe) => recipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedKey));
}
