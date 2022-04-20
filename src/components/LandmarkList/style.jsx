import styled from 'styled-components';

export const List = styled.div`
    width: 90%;
    margin: 20px auto;
    height: max-content;
    overflow: scroll;
    position: relative;
    h2{
        position: fixed;
    }
`;

export const Cards = styled.div`
    width: max-content;
    height: max-content;
    margin: 40px 0px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;