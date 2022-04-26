import React from 'react';
import profileIcon from '../images/profileIcon.svg'
import searchIcon from '../images/searchIcon.svg'

function Foods() {
  <header>
      <h1 data-testid="page-title">Recipes Cook</h1>
      <button
      type="button"
      data-testid="profile-top-btn"
      >
      Profile
      </button>
      <img src={ profileIcon } alt="Profile Icon" />
      <button
      type="button"
      data-testid="search-top-btn"
      >
      Search
      </button>
      <img src={ searchIcon } alt="Search Icon"/>
  </header>
}

export default Foods;
