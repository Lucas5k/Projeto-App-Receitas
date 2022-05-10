import React from 'react';
import RouteRecipes from './components/RouteRecipes';
import Provider from './context/Provider';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <Provider>
        <RouteRecipes />
      </Provider>
      <GlobalStyle />
    </div>
  );
}

export default App;
