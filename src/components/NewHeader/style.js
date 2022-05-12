import styled from 'styled-components';

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--orange);
  flex-wrap: wrap;
  padding: 16px 8px 8px 8px;
  height: 103px;
  box-shadow: 0 2px 2px -1px var(--black);

  button {
    background-color: var(--orange);
    border: none;
    margin: 5px;
  }

  h1 {
    font-family: 'Merienda', cursive;
    color: white;  
  }
`;

export default ContainerHeader;
