import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--orange);
    flex-wrap: wrap;
    padding-top: 20px;
    box-shadow: 0 2px 2px -1px var(--black);
    
    h2 {
        color: white;
        font-family: 'Cookie', cursive;       
        font-size: 30px ;
        transform: rotate(-0.10turn);        
    }

    h1 {
        font-family: 'Merienda', cursive;
        color: white;
        font-size: 18px;
    }
    
    button {
        background-color: var(--orange);
        border: none;
        margin: 5px;
    }

    img {
        width: 30px;
        height: 30px;
    }

    .btns-profile-and-search {
        display: flex;
        margin-right: 4px;
    }

    .bottom-header {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 2px 2px 4px var(--gray);
        margin-top: 20px;
        
    }

    .bottom-header input[type=text]{
        border-radius: 16px;
        border: 1px solid black;
        width: 342px;
        height: 31px;
        padding: 0px 10px 0px 10px;
        font-family: 'Red Hat Text', sans-serif;
        font-size: 16px;
        margin-top:10px;
    }

    .bottom-header input[type=radio] {
        margin-right: 6px;
        margin-top: 14px;
        margin-bottom: 12px;        
    }

    .bottom-header label {
        margin-right: 10px;
        font-family: 'Red Hat Text', sans-serif;
        font-style: italic;
        color: black;

    }

    .bottom-header button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        width: 85px;
        height: 25px;
        border-radius: 8px;
        background-color: var(--orange);
        color: var(--black);
        font-family: 'Red Hat Text', sans-serif;
        margin-bottom: 10px;
        color: white;
    }
`;

export default ContainerHeader;
