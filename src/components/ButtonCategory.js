import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import contextGlobal from '../context';

function ButtonCategory({ category }) {
  const [checkingDrinks, setCheckingDrinks] = useState([]);

  const { strCategory } = category;
  const { foodFilter, drinkFilter } = useContext(contextGlobal);

  const { pathname } = useLocation();
  const handleClick = ({ target }) => {
    setCheckingDrinks([...checkingDrinks, target.value]);
    const checking = checkingDrinks.some((el) => el === target.value);
    return pathname === '/foods'
      ? foodFilter(target.value, checking) : drinkFilter(target.value, checking);
  };

  return (
    <section>
      <button
        type="button"
        onClick={ handleClick }
        value={ strCategory }
        data-testid={ `${strCategory}-category-filter` }
      >
        {strCategory}
      </button>
    </section>
    /*       <button
            type="button"
            onClick={ handleClick }
            data-testid="All-category-filter"
          >
            All
          </button> */
  );
}

ButtonCategory.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ButtonCategory;
