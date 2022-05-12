import styled from 'styled-components';

const ContainerDetails = styled.div`
 
  background-color: var(--orange); 
  padding-bottom: 160px;

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

  .recipeTitle {
    font-family: 'Red Hat Text', sans-serif;
    margin-left: 16px;
    color: white;
  }


  h3, h4, h5 {
    text-align: center;
    font-family: 'Cookie', cursive;
    font-size: 36px;
    color: white;
  }

  .ingredientList {
    width: 340px;  
    margin: 12px 0px 12px 24px;
    box-shadow: 1px 1px 8px 2px var(--lightRed);
    padding: 8px 0px 8px 30px;
    border-radius: 8px;
    color: white;
  }

  ol {
    width: 200px;
    list-style: circle;
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 22px;
    font-style: italic;
  }

  .instructions {
    width: 340px;  
    margin: 12px 0px 12px 24px;
    box-shadow: 1px 1px 8px 2px var(--lightRed);
    padding: 8px 10px 8px 10px;
    border-radius: 8px;
    text-align: justify;
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 22px;
    color: white;
  }

  .video-section {
    margin: 12px 0px 0px 24px;
    
  }
`;

export default ContainerDetails;
