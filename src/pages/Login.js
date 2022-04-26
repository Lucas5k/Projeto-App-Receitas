import React, { useState, useEffect } from 'react';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLogin = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  useEffect(() => {
    const enableButton = () => {
      const { email, password } = login;
      const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const isEmailValid = emailFormat.test(email);
      const minPasswordCaracters = 6;
      const isPasswordValid = password.length >= minPasswordCaracters;
      setIsButtonDisabled(!(isEmailValid && isPasswordValid));
    };
    enableButton();
  }, [login]);

  return (
    <form>
      <label htmlFor="email-input">
        Email
        <input
          type="text"
          data-testid="email-input"
          id="email-input"
          name="email"
          value={ login.email }
          onChange={ handleLogin }
        />
      </label>
      <label htmlFor="password-input">
        password
        <input
          type="password"
          data-testid="password-input"
          id="password-input"
          name="password"
          value={ login.password }
          onChange={ handleLogin }
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ isButtonDisabled }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
