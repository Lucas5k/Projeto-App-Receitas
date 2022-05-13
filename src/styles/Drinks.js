import styled from 'styled-components';

const ContainerDrinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 70px;
  button {
    width: 112px;
    height: 28px;
    margin: 12px 0px 0px 0px;
    background-color: var(--orange);
    border: none;
    border-radius: 6px;
    box-shadow: 1px 1px 4px 1px var(--gray);
    color: white;
    font-size: 16px;
    font-family: 'Kalam', cursive;
  }

  .card-section {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

`;

export default ContainerDrinks;
