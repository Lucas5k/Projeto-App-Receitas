import styled from 'styled-components';

const ContainerExplore = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  a {
    text-decoration: none;
    color: var(--white);
    background-color: var(--orange);   
    width: 200px;
    height: 60px;
    margin-top: 20px;
    text-align: center;
    padding-top: 10px;
    border-radius: 8px;
    font-size: 24px;
    font-family: 'Kalam', cursive;
    border: none;
    box-shadow: 1px 2px 4px 2px var(--lightRed);    
  }  

`;
export default ContainerExplore;
