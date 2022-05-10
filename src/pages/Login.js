import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import saveEmail from '../helpers/saveEmail';
import { createMealsToken, createCocktailsToken } from '../helpers/createTokens';
import { ContainerLogin } from '../styles/Login';
import personagemculinario from '../assets/personagem-culinario.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoginSucessful, setIsLoginSucessful] = useState(false);

  useEffect(() => {
    const enableButton = () => {
      const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const isEmailValid = emailFormat.test(email);
      const minPasswordCaracters = 7;
      const isPasswordValid = password.length >= minPasswordCaracters;
      setIsButtonDisabled(!(isEmailValid && isPasswordValid));
    };
    enableButton();
  }, [email, password]);

  const handleClick = (event) => {
    event.preventDefault();
    saveEmail(email);
    createMealsToken();
    createCocktailsToken();
    setIsLoginSucessful(true);
  };

  return (
    <ContainerLogin>
      <img src={ personagemculinario } alt="Chefes cozinhando" />
      <h1>Login</h1>
      <form>
        <label htmlFor="email-input">
          <input
            type="text"
            data-testid="email-input"
            id="email-input"
            name="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            placeholder="Email"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            data-testid="password-input"
            id="password-input"
            name="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            placeholder="Password"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isButtonDisabled }
          onClick={ handleClick }
        >
          Enter
        </button>
        { isLoginSucessful && <Redirect to="/foods" /> }
      </form>
    </ContainerLogin>
  );
}

export default Login;
