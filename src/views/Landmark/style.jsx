import styled from 'styled-components';

export const DetailLandmark = styled.div`
    width: 90%;
    height: max-content;
    position: absolute;
    top: 10px;
    left: 5%;
    .hero{
        width: 100%;
        height: 400px;
        overflow: hidden;
        position: relative;
        border-radius: 5px;
        box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.3);
        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
            object-fit: cover;
        }
        .text{
            width: 100%;
            padding: 5px;
            position: absolute;
            bottom: 0;
            background: linear-gradient(0deg, rgba(0,0,0,.60) 0%, rgba(0,0,0,.1) 100%);
            border-radius: 0px 0px 5px 5px;
            color: #fff;
            line-height: 30px;
        }    
    }
    .about{
        margin: 20px 0px;
    }
`;