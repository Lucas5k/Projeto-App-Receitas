import React from 'react';
import PropTypes from 'prop-types';

function FiltersButtons({ onClickButton }) {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ onClickButton }
        value="all"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ onClickButton }
        value="food"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ onClickButton }
        value="drinks"
      >
        Drinks
      </button>
    </div>
  );
}

FiltersButtons.propTypes = {
  onClickButton: PropTypes.func.isRequired,
}.isRequired;

export default FiltersButtons;
