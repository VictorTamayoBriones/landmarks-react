import styled from 'styled-components';

export const Actions = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 550px){
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`;