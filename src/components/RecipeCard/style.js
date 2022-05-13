import styled from 'styled-components';

const ContainerRecipeCard = styled.div`

    
  img {
    width: 160px;
    height: 134px;
    border-radius: 8px 8px 0px 0px;
  }

  a {
    width: 160px;
    min-height: 190px;
    max-height: 242px;
    display: flex;
    flex-direction: column;      
    border-radius: 8px;    
    margin: 12px 8px 12px 8px;    
    box-shadow: 1px 1px 4px 1px var(--gray);
    text-decoration: none;
    color: var(--black);
    text-align: center;
    font-size: 16px;
    font-family: 'Kalam', cursive;
    font-weight: 1000;
  };

  a span {
    margin-top: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 4px 2px 4px;
  }
`;

export default ContainerRecipeCard;
