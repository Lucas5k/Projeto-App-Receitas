import styled from 'styled-components';

const ContainerExplore = styled.div`  
  width: 100vw;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

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
    box-shadow: 1px 1px 2px 1px var(--gray);    
  }  

`;
export default ContainerExplore;
