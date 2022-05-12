import styled from 'styled-components';

const ContainerFoodsNationality = styled.div`

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  select {
    width: 190px;
    height: 40px;
    margin-top: 20px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 0px 3px 1px var(--gray);    
    font-size: 16px;
    color: var(--black);
    padding-left: 8px;
  }  

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 18px;
    padding-bottom: 90px;
  }
`;

export default ContainerFoodsNationality;
