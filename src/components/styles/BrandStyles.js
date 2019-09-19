import styled, { keyframes } from 'styled-components';

const infoAnimation = keyframes`
    from {
        transform: translateX(-100%);
    } to {
        transform: translateX(0);
    }
`;

const Info = styled.div`
    animation: ${infoAnimation} .6s;

    flex: 1;
    margin: 50px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .model-name {
        letter-spacing: 2px;
        font-size: 30px;
        font-weight: 300;
        text-align: justify;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 35px;
    }
`;

const displayedModelAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const DisplayedModel = styled.div`
    animation: ${displayedModelAnimation} 1s;
    flex: 2;
    transition: 
    img {
        max-height: 75vh;
    }
    margin: 30px;
`;

const modelListAnimation = keyframes`
    from {
        transform: translateX(100%);
    } to {
        transform: translateX(0);
    }
`;

const ModelListStyle = styled.div`
    animation: ${modelListAnimation} .6s;
    overflow: hidden;
    flex: 3;

    &:after {
        display: block;
        opacity: 0;
        content: 'Next';
        position: absolute;
        font-size: 50px;
        color: white;
        display: flex;
        right: 200px;
    }

    &:hover {
        opacity: .5;

        &:after {
            opacity: 1;
        }
    }

    display: flex;
    align-items: center;
`;

const ModelStyle = styled.div`
    img {
        height: 50vh;
    }
    padding: 15px;
`;

export { Info, DisplayedModel, ModelListStyle, ModelStyle };