import styled from 'styled-components';

const ContainerRecipeCard = styled.header`

    
  img {
    width: 162px;
    height: 134px;
    border-radius: 8px 8px 0px 0px;
  }

  a {
    width: 162px;
    height: 172px;
    display: flex;
    flex-direction: column;      
    border-radius: 8px;    
    margin: 12px 8px 12px 8px;
    box-shadow: 1px 1px 4px 1px var(--gray);
    text-decoration: none;
    color: var(--dark);
  };

  a span {
    margin-top: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ContainerRecipeCard;
