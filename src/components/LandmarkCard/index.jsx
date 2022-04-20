import styled from 'styled-components';

export const CardPreview = styled.div`
    width: 150px;
    height: 200px;
    background: #000;
    border-radius: 5px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;