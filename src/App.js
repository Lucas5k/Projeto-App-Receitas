import React from 'react';
import RouteRecipes from './components/RouteRecipes';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <RouteRecipes />
      </Provider>
    </div>
  );
}

export default App;
