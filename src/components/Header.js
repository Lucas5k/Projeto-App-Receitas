import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ name }) {
  const [count, setCount] = useState(1);
  const [disabledInput, setDisabledInput] = useState(true);

  const togleInput = () => {
    if (count === 1) {
      setDisabledInput(false);
      setCount(2);
    }
    if (count === 2) {
      setDisabledInput(true);
      setCount(1);
    }
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
          />)
          : null
      }
      <button
        type="button"
        onClick={ togleInput }
      >
        <img
          src={ searchIcon }
          alt="Search Icon"
          data-testid="search-top-btn"
        />
      </button>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
