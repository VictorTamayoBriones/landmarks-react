import styled from 'styled-components';

export const List = styled.div`
    width: 90%;
    margin: 20px auto;
    height: max-content;
    overflow: scroll;
    position: relative;
    h2{
        position: absolute;
        top: 0;
        left: 0;
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