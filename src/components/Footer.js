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
        >
          <img src={ Drinks } alt="icone-bebida" data-testid="drinks-bottom-btn" />
        </button>
      </Link>
      <Link to="/explore">
        <button
          type="button"
        >
          <img src={ Explore } alt="icone-bebida" data-testid="explore-bottom-btn" />
        </button>
      </Link>
      <Link to="/foods">
        <button
          type="button"
        >
          <img src={ Food } alt="icone-food" data-testid="food-bottom-btn" />
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
