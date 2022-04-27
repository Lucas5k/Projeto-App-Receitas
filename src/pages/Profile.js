import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';

function Profile() {
  const [getUser, setGetUser] = useState('');

  const getEmailFromLocalStorage = () => {
    const getStorage = JSON.parse(localStorage.getItem('user'));
    setGetUser(getStorage.email);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    getEmailFromLocalStorage();
  }, []);

  return (
    <main>
      <NewHeader name="Profile" />
      <span data-testid="profile-email" id="email-span">{getUser}</span>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </button>
      </Link>
      <Footer />
    </main>
  );
}

export default Profile;
