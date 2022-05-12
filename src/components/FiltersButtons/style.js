import styled from 'styled-components';

const ContainerFiltersButtons = styled.div`

  display: flex;
  justify-content: space-between;
  margin: 30px 16px 30px 16px;

  button {
    width: 104px;
    height: 42px;
    background-color: var(--orange);
    border: none;
    border-radius: 8px;
    color: var(--white);
    font-size: 18px;
    font-family: 'Kalam', cursive;
    box-shadow: 1px 1px 4px 1px var(--lightRed);
  }


`;

export default ContainerFiltersButtons;
