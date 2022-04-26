import React, { Route, Switch } from 'react-router-dom';
import Drinks from './Drinks';
import Explore from './Explore';
import ExploreDrinks from './ExploreDrinks';
import ExploreFoods from './ExploreFoods';
import Login from '../pages/Login';

function RouteRecipes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route path="/foods" component={ Foods } /> */}
      <Route exact path="/drinks" component={ Drinks } />
      {/* <Route path="/foods/:id" component={ DetailsFoods } /> */}
      {/* <Route path="/drinks/:id" component={ DetailsDrinks } /> */}
      {/* <Route path="/foods/:id-da-receita/in-progress" component={ FoodsProgress } /> */}
      {/* <Route path="/drinks/:id-da-receita/in-progress" component={ FoodsDrinks } /> */}
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      {/* <Route path="/explore/foods/ingredients" component={ FoodsIngredients } /> */}
      {/* <Route path="/explore/drinks/ingredients" component={ DrinksIngredients } /> */}
      {/* <Route path="/explore/foods/nationalities" component={ FoodsNationalitie } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoritesRecipes } /> */}
    </Switch>
  );
}

export default RouteRecipes;
