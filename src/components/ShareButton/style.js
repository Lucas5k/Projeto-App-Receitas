import styled from 'styled-components';

const ContainerShareButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  button {
    background-color: var(--orange);
    border: none;
    width: 44px;
    height: 44px;
  }

  span {
    text-align: center;
    color: white;
  }
`;

export default ContainerShareButton;
