import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import ContainerHeader from './style';

function NewHeader({ name }) {
  return (
    <ContainerHeader>
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
    </ContainerHeader>
  );
}

NewHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NewHeader;
