import styled from 'styled-components';

export const HeaderApp = styled.div`
    width: 100%;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 20px;

    .text{
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
        right: 10px;
        img{
            width: 100%;
        }
    }
`;