import styled from 'styled-components';

const ContainerFooter = styled.div`
  
  footer{
    width: 100vw;
    height: 60px;
    background-color: var(--orange);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 32px;
    height: 32px;    
  }

  button {
    background-color: var(--orange);
    border: none;
    margin: 0px 8px 0px 8px;
  }

`;

export default ContainerFooter;
