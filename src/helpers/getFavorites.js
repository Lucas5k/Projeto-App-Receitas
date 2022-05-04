export default function getFavorites(id) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favorites && favorites.some((recipe) => recipe.id === id);
}
