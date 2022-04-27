import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';

function Profile() {
  const [getUser, setGetUser] = useState('');
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const getEmailFromLocalStorage = () => {
      const getStorage = JSON.parse(localStorage.getItem('user'));
      console.log(getStorage);
      const validation = getStorage && getStorage.email;
      setGetUser(validation);
    };
    getEmailFromLocalStorage();
  }, []);

  return (
    <main>
      <NewHeader name="Profile" />
      <h1 data-testid="profile-email">{getUser}</h1>
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
