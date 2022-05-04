const getIngredientsAndMeasures = (object) => {
  const maxIngredients = 21;
  const ingredientsAndMeasures = [];
  for (let i = 1; i < maxIngredients; i += 1) {
    const ingredient = `strIngredient${i}`;
    const measure = `strMeasure${i}`;
    if (object[ingredient]) {
      ingredientsAndMeasures
        .push({ ingredient: object[ingredient], measures: object[measure] });
    }
  }
  return ingredientsAndMeasures;
};

export default getIngredientsAndMeasures;
