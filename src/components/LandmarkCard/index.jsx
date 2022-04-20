import styled from 'styled-components';

export const CardPreview = styled.div`
    width: 150px;
    height: 200px;
    background: #000;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text{
        width: 100%;
        position: absolute;
        bottom: 0;
        color: #fff;
        padding: 5px;
        background: linear-gradient(0deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.01) 100%);
        h3{
            font-size: 18px;
        }
        p{
            font-size: 15px;
        }
    }
    .favorite-icon{
        position: absolute;
        top: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
    }
`;