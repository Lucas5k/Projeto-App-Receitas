import React, { Route, Switch } from 'react-router-dom';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import FoodsIngredients from '../pages/FoodsIngredients';
import DrinksIngredients from '../pages/DrinksIngredients';
import FoodsNationalitie from '../pages/FoodsNationalitie';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoritesRecipes from '../pages/FavoriteRecipes';

function RouteRecipes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/foods/:id" component={ DetailsFoods } />
      <Route path="/drinks/:id" component={ DetailsDrinks } />
      <Route path="/foods/:id-da-receita/in-progress" component={ FoodsProgress } />
      <Route path="/drinks/:id-da-receita/in-progress" component={ FoodsDrinks } />
      <Route path="/explore" component={ Explore } />
      <Route path="/explore/foods" component={ ExploreFoods } />
      <Route path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/explore/foods/ingredients" component={ FoodsIngredients } />
      <Route path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route path="/explore/foods/nationalities" component={ FoodsNationalitie } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoritesRecipes } />
    </Switch>
  );
}

export default RouteRecipes;
