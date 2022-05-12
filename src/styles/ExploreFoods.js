import styled from 'styled-components';

const ContainerExploreFoods = styled.div`  
  background-color: var(--white);
  margin-top: 90px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 22px 0px 0px 0px;
    height: 60px;
    width: 200px;
    text-decoration: none;
    background-color: var(--white);
    color: var(--orange);
    border-radius: 8px;
    box-shadow: 1px 1px 3px 1px var(--orange);
    font-size: 20px;
    font-family: 'Merienda', cursive;
    margin-left: 92px;
  }

  button {    
    margin: 22px 0px 0px 0px;
    height: 60px;
    width: 200px;
    border: none;
    color: var(--black);
    background-color: var(--white);
    color: var(--orange);
    border-radius: 8px;
    box-shadow: 1px 1px 3px 1px var(--orange);
    font-family: 'Merienda', cursive;
    font-size: 20px;
    margin-left: 92px;
  }

`;

export default ContainerExploreFoods;
