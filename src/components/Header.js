import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import contextGlobal from '../context';

function Header({ name }) {
  const { requisitionRecipesByIngredient,
    requisitionRecipesByName,
    requisitionRecipesByFirstLetter } = useContext(contextGlobal);
  const [count, setCount] = useState(1);
  const [disabledInput, setDisabledInput] = useState(true);
  const [typeSearch, setTypeSearch] = useState('');
  const [search, setSearch] = useState('');

  const toogleInput = () => {
    if (count === 1) {
      setDisabledInput(false);
      setCount(2);
    }
    if (count === 2) {
      setDisabledInput(true);
      setCount(1);
    }
  };

  const searchRecipes = () => {
    if (typeSearch === 'Ingredient') return requisitionRecipesByIngredient(search);
    if (typeSearch === 'Name') return requisitionRecipesByName(search);
    if (typeSearch === 'First letter') return requisitionRecipesByFirstLetter(search);
  };

  return (
    <header>
      <h1 data-testid="page-title">{name}</h1>
      <Link to="/profile">
        <button
          type="button"
        >
          <img
            src={ profileIcon }
            alt="Profile Icon"
            data-testid="profile-top-btn"
          />
        </button>
      </Link>
      {
        !disabledInput ? (
          <input
            type="text"
            data-testid="search-input"
            id="search"
            name="search"
            value={ search }
            onChange={ ({ target }) => setSearch(target.value) }

          />)
          : null
      }
      <button
        type="button"
        onClick={ toogleInput }
      >
        <img
          src={ searchIcon }
          alt="Search Icon"
          data-testid="search-top-btn"
        />
      </button>
      <div onChange={ ({ target }) => setTypeSearch(target.value) }>
        <label htmlFor="ingredient">
          <input
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            name="type-search"
            value="Ingredient"
          />
          Ingredients
        </label>
        <label htmlFor="name-recipe">
          <input
            type="radio"
            id="name-recipe"
            data-testid="name-search-radio"
            name="type-search"
            value="Name"
          />
          Name
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            id="first-letter"
            data-testid="first-letter-search-radio"
            name="type-search"
            value="First letter"
          />
          First letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchRecipes }
      >
        Search
      </button>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
