import React from 'react';
import { Redirect } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <h1 data-testid="page-title">Recipes Cook</h1>
      <Redirect to="/profile">
        <button
          type="button"
          data-testid="profile-top-btn"
        >
          Profile
        </button>
      </Redirect>
      <img src={ profileIcon } alt="Profile Icon" />
      <button
        type="button"
        data-testid="search-top-btn"
      >
        Search
      </button>
      <img src={ searchIcon } alt="Search Icon" />
    </header>
  );
}

export default Header;
