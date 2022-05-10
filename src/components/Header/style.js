import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-item: center;
    background-color: black;

    h2 {
        color: white;
        font-family: 'Cookie', cursive;
    }

    h1 {
        font-family: 'Merienda', cursive;
        color: white;
    }
    
    button {
        width: 28px;
        heigth: 25px;
        background-color: black;
    }

    .btns-profile-and-search {
        display: flex;
    }
`;

export default ContainerHeader;
