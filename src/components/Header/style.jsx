import styled from 'styled-components';

export const HeaderApp = styled.div`
    width: 90%;
    margin: auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    position: relative;
    gap: 20px;
    z-index: 1;

    .arrow{
        display: ${ (props) => props.detail ? 'block' : 'none'};
        position: absolute;
        top: 15px;
        left: 5px;
    }

    .text{
        display: ${ (props) => props.detail ? 'none' : 'block'};
        letter-spacing: .5px;
        p{
            font-weight: 100;
            color: #6b6b6b;
            margin-bottom: 5px;
        }
        h3{
            font-size: 25px;
        }
    }

    .user-profile{
        width: 40px;
        height: 40px;
        background: #0c3aa4;
        border-radius: 50%;
        position: absolute;
        right: ${ (props) => props.detail ? '5px' : 0};
        top: ${ (props) => props.detail ? '15px' : 'auto'};
        img{
            width: 100%;
        }
    }
`;