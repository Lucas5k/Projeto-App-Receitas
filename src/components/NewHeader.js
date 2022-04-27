import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';

function NewHeader({ name }) {
  return (
    <header>
      <h1 data-testid="page-title">{name}</h1>
      <button
        type="button"
      >
        <img
          src={ profileIcon }
          alt="Profile Icon"
          data-testid="profile-top-btn"
        />
      </button>
    </header>
  );
}

NewHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NewHeader;
