import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';

function Explore() {
  return (
    <main>
      <NewHeader name="Explore" />
      <Footer />
      <Link to="/explore/foods" data-testid="explore-foods">Explore Foods</Link>
      <Link to="/explore/drinks" data-testid="explore-drinks">Explore Drinks</Link>
    </main>
  );
}

export default Explore;
