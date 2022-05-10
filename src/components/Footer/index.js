import React from 'react';
import { Link } from 'react-router-dom';
import Drinks from '../../assets/drinksIcon.svg';
import Explore from '../../assets/compassIcon.svg';
import Food from '../../assets/cutleryforkIcon.svg';
import ContainerFooter from './style';

function Footer() {
  return (
    <ContainerFooter>
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
    </ContainerFooter>
  );
}

export default Footer;
