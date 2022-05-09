export function getFavorites() {
  return JSON.parse(localStorage.getItem('favoriteRecipes'));
}

export function verifyIfIsFavorites(name) {
  const favorites = getFavorites();
  return favorites && favorites
    .some((recipe) => Object.values(recipe).includes(name));
}

export function saveFavorites(recipe, pageDetails) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isRecipeFood = pageDetails === 'foods' || pageDetails === 'FoodsProgress';
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
  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedKey));
}

export function removeFavorites(name) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const updatedKey = favorites && favorites.filter((recipe) => recipe.name !== name);
  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedKey));
}
