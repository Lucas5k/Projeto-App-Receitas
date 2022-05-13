import styled from 'styled-components';

const ContainerDetails = styled.div`
 
  background-color: var(--white); 
  padding-bottom: 140px;

  .imgRecipe {
    width: 100vw;
    height: 381px;
  }

  .detailsAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container-btns {
    width: 80px;
    display: flex;
    justify-content: space-around;    
  }

  .container-btns button {
    background-color: var(--white);
  }

  .recipeTitle {
    font-family: 'Red Hat Text', sans-serif;
    margin-left: 16px;
    color: var(--black);
  }

  h1 {
    font-size: 24px;
    box-shadow:  0px 2px 2px -2px var(--black);
    margin-bottom: 8px;
    width: 260px;
  }

  div span {
    color: var(--black);
  }

  h3, h4, h5 {
    text-align: center;
    font-family: 'Cookie', cursive;
    font-size: 36px;
    color: var(--black);
  }

  .ingredientList {
    width: 340px;  
    margin: 12px 0px 12px 24px;
    box-shadow: 1px 1px 8px 2px var(--gray);
    padding: 8px 0px 8px 30px;
    border-radius: 8px;
    color: var(--black);
    font-weight: 1000;
  }

  ol {
    width: 200px;
    list-style: circle;
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 22px;
    font-style: italic;
    padding-bottom: 8px;
  }

  ol li {
    box-shadow:  0px 2px 2px -2px var(--black);
    width: 260px;
  }

  .instructions {
    width: 340px;  
    margin: 12px 0px 12px 24px;
    box-shadow: 1px 1px 8px 2px var(--gray);
    padding: 8px 10px 8px 10px;
    border-radius: 8px;
    text-align: justify;
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 22px;
    color: var(--black);
    font-weight: 1000;
  }

  .video-section {
    margin: 12px 0px 0px 24px;    
  }

  .startRecipeBtn {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 220px;
    height: 60px;
    background-color: var(--black);
    border: none;
    border-radius: 12px;
    font-size: 28px;
    font-family: 'Kalam', cursive;
    color: var(--white);
    
  }

  .startRecipeBtn:disabled {
  background-color: var(--gray);
  }
  
`;

export default ContainerDetails;
