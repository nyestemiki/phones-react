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
    }

    .button {
        background: none;
        border-radius: 10px;
        font-size: 1.25vw;
        cursor: pointer;
        backdrop-filter: blur(50px);
        background-color: rgba(0, 0, 0, .25);
        border-radius: 10px;
        letter-spacing: 1px;
        margin: 50px 10px 0;
        padding: 10px;
        /* text-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
        /* color: black; */
        /* font-weight: 300; */

        &:hover, &:focus {
            background: rgba(0, 0, 0, 0.5);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
            color: white;
        }
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