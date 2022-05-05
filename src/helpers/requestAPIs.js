export const requestRecipe = async (pageDetails, id) => {
  const foodsIsTrue = pageDetails === 'foods' || pageDetails === 'FoodsProgress';
  const url = foodsIsTrue
    ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const dataJson = await response.json();
  return dataJson && foodsIsTrue
    ? dataJson.meals
    : dataJson.drinks;
};

// export const request = async (pageDetails, id) => {
//   const foodsIsTrue = pageDetails === 'FoodsProgress';
//   const url = foodsIsTrue
//     ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//     : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
//   const response = await fetch(url);
//   const dataJson = await response.json();
//   return dataJson && foodsIsTrue
//     ? dataJson.meals
//     : dataJson.drinks;
// };

export const requestRecomendation = async (pageDetails) => {
  const foodsIsTrue = pageDetails === 'foods';
  const url = foodsIsTrue
    ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const dataJson = await response.json();
  return dataJson && foodsIsTrue
    ? dataJson.drinks
    : dataJson.meals;
};
