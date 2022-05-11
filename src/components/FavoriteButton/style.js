import styled from 'styled-components';

const ContainerFavoriteButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;  
  justify-content: center;
  margin-top: 8px;
  margin-right: 16px;
  height: 90px;
  button {
    background-color: var(--orange);
    border: none;
    width: 44px;
    height: 44px;
  }
`;

export default ContainerFavoriteButton;
