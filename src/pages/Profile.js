import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';

function Profile() {
  const [userEmail, setUserEmail] = useState('');
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const getEmailFromLocalStorage = () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      const email = userData && userData.email;
      setUserEmail(email);
    };
    getEmailFromLocalStorage();
  }, []);

  return (
    <main>
      <NewHeader name="Profile" />
      <h1 data-testid="profile-email">{userEmail}</h1>
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
