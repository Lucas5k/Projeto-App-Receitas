import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';

function Profile() {
  const getEmailFromLocalStorage = () => {
    const getStorage = JSON.parse(localStorage.getItem('user'));
    const spanEmail = document.querySelector('#email-span');
    spanEmail.innerHTML = getStorage.email;
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
      <span data-testid="profile-email" id="email-span" />
      <Link to="/done-recipes">
        <botton data-testid="profile-done-btn">Done Recipes</botton>
      </Link>
      <Link to="/favorite-recipes">
        <botton data-testid="profile-favorite-btn">Favorite Recipes</botton>
      </Link>
      <Link to="/">
        <botton
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </botton>
      </Link>
      <Footer />
    </main>
  );
}

export default Profile;
