import styled from 'styled-components';

const ContainerExploreDrinks = styled.div`  
  background-color: var(--white);
  margin-top: 90px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 20px 0px 0px 0px;
    height: 60px;
    width: 200px;
    text-decoration: none;
    background-color: var(--orange);
    color: var(--white);
    border-radius: 8px;
    box-shadow: 1px 1px 3px 1px var(--gray);
    font-size: 24px;
    font-family: 'Kalam', cursive;
    margin-left: 95px;
  }

  button {    
    margin: 20px 0px 0px 0px;
    height: 60px;
    width: 200px;
    border: none;
    color: var(--black);
    background-color: var(--orange);
    color: var(--white);
    border-radius: 8px;
    box-shadow: 1px 1px 3px 1px var(--gray);
    font-family: 'Kalam', cursive;
    font-size: 24px;
    margin-left: 95px;
  }

`;

export default ContainerExploreDrinks;
