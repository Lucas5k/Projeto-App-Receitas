import styled from 'styled-components';

const ContainerProfile = styled.div`
  width: 100vw;
  height: 100vh;
  

  h1 {
    font-size: 20px;
    text-align: center;
    margin-top: 18px;
    color: var(--orange) ;
    font-family: 'Red Hat Text', sans-serif;
    width: 360px;
    height: 40px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px 2px var(--orange);
    margin-left: 15px;
    padding-top: 5px;
    background-color: var(--white);
    
  }

  .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 360px;
    height: 360px;
    margin-left: 20px;
  }

  .btnContainer button {
    width: 200px;
    height: 60px;
    background-color: var(--orange);
    border-radius: 8px;
    border: none;
    font-size: 24px;
    font-family: 'Kalam', cursive;    
    color: var(--white);
    box-shadow: 1px 2px 4px 2px var(--lightRed);
  }

`;

export default ContainerProfile;