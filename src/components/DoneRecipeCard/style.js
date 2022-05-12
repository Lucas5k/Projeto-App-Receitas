import styled from 'styled-components';

const ContainerDoneRecipeCard = styled.div`
  border-radius: 8px;
  width: 360px;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  margin: 8px 0px 12px 14px;
  box-shadow: 1px 1px 4px 1px var(--orange);  

  .recipeImage {
    width: 128px;
    height: 128px;
    margin: 0px 12px 0px 0px;
    border: 1px solid var(--orange);
    border-radius: 10px;
  }

  button {
    background-color: var(--white) ;
  }

  h1{ 
    font-size: 24px;
    margin-bottom: 4px;
    color: var(--black)
  }

  h2 {
    font-size: 18px;
    color: var(--black)
  }  

  .recipeBody {
    display: flex;
    
    margin: 12px 0px 12px 12px;
  }

  a {
    text-decoration: none;
  }
`;

export default ContainerDoneRecipeCard;
