import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: orange;

    h2 {
        color: white;
        font-family: 'Cookie', cursive;
    }

    h1 {
        font-family: 'Merienda', cursive;
        color: white;
        transform: rotate(-0.25turn);
    }
    
    button {
        background-color: orange;
        border: none;
        margin: 5px;
    }

    img {
        width: 28px;
        heigth: 25px;
    }

    .btns-profile-and-search {
        display: flex;
    }
`;

export default ContainerHeader;
