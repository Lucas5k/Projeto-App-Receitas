import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ recomendations, pageDetails }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  console.log(recomendations, pageDetails);
  return (
    <Slider { ...settings }>
      {
        recomendations.map((recomendation, index) => {
          const maxToShow = 6;
          return index < maxToShow && (
            <div
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <h3
                data-testid={ `${index}-recomendation-title` }
              >
                {
                  pageDetails === 'foods'
                    ? recomendation.strDrink
                    : recomendation.strMeal
                }
              </h3>
            </div>
          );
        })
      }
    </Slider>
  );
}

Carousel.propTypes = {
  recomendations: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageDetails: PropTypes.string.isRequired,
};

export default Carousel;
