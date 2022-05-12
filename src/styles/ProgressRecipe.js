import styled from 'styled-components';

const ContainerProgress = styled.div`

  background-color: var(--white);
  padding-bottom: 140px;
.imgRecipe {
  width: 100vw;
  height: 320px;
}

.taskScratched {
  text-decoration: line-through solid black;
}

.container-btn-title {
  height: 120px;
  display: flex;
  justify-content: space-between;  
}

.container-btn-title:nth-child(n + 2){

  height: 80px;
}

.container-btns {
  width: 80px;
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: center;
  margin-left: 210px;
  margin-top: 8px;
}

.container-btns span {
  font-size: 18px;
  height: 20px;
  margin-top: 0px;
  
}

.shareButton {
  background-color: var(--white);
  border: none;
  width: 44px;
  height: 44px;  
}

.favoriteContainer button {
  background-color: var(--white);
}

span, h1{
  margin: 14px 0px 0px 16px;
  font-size: 38px;
  font-family: 'Cookie', cursive;
  color: var(--orange);
}

.recipeProgressContainer { 
  padding-left: 12px;  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 8px;
  margin: 12px 18px 12px 18px;
  box-shadow: 1px 1px 8px 2px var(--gray);
  padding: 8px 10px 18px 10px;
}

.recipeProgressContainer label {
  font-family: 'Annie Use Your Telescope', cursive;
  font-size: 22px;
  color: var(--orange);
  box-shadow:  0px 2px 2px -2px var(--orange);
}

.recipeProgressContainer label input {
  margin-right: 8px;  
}

.instructionsContainer {
  width: 354px;  
    margin: 12px 0px 12px 18px;
    box-shadow: 1px 1px 8px 2px var(--gray);
    padding: 8px 10px 8px 10px;
    border-radius: 8px;
    text-align: justify;
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 22px;
    color: var(--orange);
}

.finishBtn {
  position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 220px;
    height: 60px;
    background-color: var(--white);
    border: none;
    border-radius: 12px;
    font-size: 38px;
    font-family: 'Merienda', cursive;
    color: var(--orange);    
}

.finishBtn:disabled {
  background-color: var(--gray);
}

`;

export default ContainerProgress;
