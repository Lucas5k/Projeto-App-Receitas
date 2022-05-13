import styled from 'styled-components';

const ContainerIngredientsCard = styled.div`


  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 90px;
  margin-top: 22px;
  
  button {    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    width: 160px;
    height: 190px;
    display: flex;
    flex-direction: column; 
    border: none;     
    border-radius: 8px;    
    margin: 12px 8px 12px 8px;    
    box-shadow: 1px 1px 4px 1px var(--gray);
    text-decoration: none;
    color: var(--black);
    text-align: center;
    font-size: 16px;
    font-family: 'Kalam', cursive;
    font-weight: 1000;
  }

  button img {
    margin-bottom: 10px;
    padding-bottom: 8px;
    box-shadow: 0px 2px 2px -2px var(--black);
  }

`;

export default ContainerIngredientsCard;
