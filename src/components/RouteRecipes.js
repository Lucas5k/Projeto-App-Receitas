import React, { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import FoodsIngredients from '../pages/FoodsIngredients';
import DrinksIngredients from '../pages/DrinksIngredients';
import FoodsNationality from '../pages/FoodsNationality';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoritesRecipes from '../pages/FavoriteRecipes';
import DetailsFoods from '../pages/DetailsFoods';
import DetailsDrinks from '../pages/DetailsDrinks';
import DrinksProgress from '../pages/DrinksProgress';
import FoodsProgress from '../pages/FoodsProgress';
import NotFound from './NotFound';

function RouteRecipes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" component={ DetailsFoods } />
      <Route exact path="/drinks/:id" component={ DetailsDrinks } />
      <Route exact path="/foods/:id/in-progress" component={ FoodsProgress } />
      <Route
        exact
        path="/drinks/:id/in-progress"
        component={ DrinksProgress }
      />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ FoodsNationality } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoritesRecipes } />
      <Route exact path="/explore/drinks/nationalities" component={ NotFound } />
    </Switch>
  );
}

export default RouteRecipes;
