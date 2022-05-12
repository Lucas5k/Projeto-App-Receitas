import styled from 'styled-components';

const ContainerIngredientsCard = styled.div`


  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 90px;
  margin-top: 22px;
  
  button {
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px 0px 16px 0px;
    border: none;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0px 0px 4px -1px var(--orange);
    color: var(--orange);
    font-size: 18px;
    font-family: 'Merienda', cursive;
  }

`;

export default ContainerIngredientsCard;
