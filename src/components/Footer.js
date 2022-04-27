import React from 'react';
import { Link } from 'react-router-dom';
import Drinks from '../images/drinkIcon.svg';
import Explore from '../images/exploreIcon.svg';
import Food from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" style={ { position: 'fixed', bottom: '0' } }>
      <Link to="/drinks">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
        >
          <img src={ Drinks } alt="icone-bebida" />
        </button>
      </Link>
      <Link to="/explore">
        <button
          type="button"
          data-testid="explore-bottom-btn"
        >
          <img src={ Explore } alt="icone-bebida" />
        </button>
      </Link>
      <Link to="/foods">
        <button
          type="button"
          data-testid="food-bottom-btn"
        >
          <img src={ Food } alt="icone-food" />
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
