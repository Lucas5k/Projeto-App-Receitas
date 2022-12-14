import styled from 'styled-components';

export const ContainerLogin = styled.div`
  height: 100vh;
  width: 100vw;  
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  img {
    height: 176px;
    width: 226px;
  }

  form {
    height: 260px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    height: 58px;
    padding: 8px;
    width: 293px;
    border-radius: 16px;
    margin-bottom: 8px;
    font-size: 22px;
    font-family: 'Kalam', cursive;
    box-shadow: 2px 2px 4px var(--gray);
  }

  input::placeholder {
    padding-left: 4px;
    font-size: 24px;
    color: var(--gray);
    font-family: 'Kalam', cursive;
  }

  button {
    width: 316px;
    height: 76px;
    border-radius: 20px;
    background-color: var(--orange);
    font-size: 44px;
    color: var(--white);
    margin-top: 16px;
    font-family: 'Kalam', cursive;
    border: none;
  }

  input:focus { 
    outline: none;
    border: 2px solid var(--orange);
  }

  button:disabled {
    background-color: var(--white);
    color: var(--orange);
    box-shadow: 1px 1px 10px -2px var(--gray)
  }
  
  h1 {
    font-family: 'Cookie', cursive;
    font-size: 72px;
    color: var(--black);
  }

`;

export default ContainerLogin;
