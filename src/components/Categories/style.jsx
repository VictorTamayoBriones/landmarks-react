import styled from 'styled-components';

export const ListCategories = styled.div`
    width: max-content;
    display: flex;
    gap: 20px;
`;

export const ButtonCategory = styled.div`
    position: relative;
    
    button{
        background: #1748cc;
        color: #fff;
        padding: 5px 10px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s ease-in-out all;
    }

    .overlay{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: solid 1px #000;
        position: absolute;
        top: 0;
        pointer-events: none;
        cursor: pointer;
        transition: .3s ease-in-out all;
    }

    &:hover{
        .overlay{
            transform: translateX(-3px) translateY(-3px);
        }
        button{
            box-shadow: 3px 3px 1px #000000;
        }
    }
`;