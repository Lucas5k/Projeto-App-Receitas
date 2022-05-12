import styled from 'styled-components';

const ContainerFoods = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 60px;
  button {
    width: 112px;
    height: 28px;
    margin: 12px 0px 0px 0px;
    background-color: var(--orange);
    border: none;
    border-radius: 6px;
    box-shadow: 1px 1px 4px 1px var(--gray);
    color: white;
  }

  .card-section {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

`;

export default ContainerFoods;
