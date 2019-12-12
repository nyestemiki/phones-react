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
    margin: 3vw;
    padding: 10vh 1vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    .model-name {
        letter-spacing: 2px;
        font-size: 1.2rem;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 35px;
    }

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: row;
        place-items: center;
        place-content: center;
        width: 100vw;

        .model-name {
            margin: 0;
        }

        & > * {
            margin: 0 20px;
        }
    }

    /* backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .1);
    border-radius: 10px; */
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
    flex: 3;
    transition: 
    img {
        height: 70vh;
    }

    @media screen and (max-width: 600px) {
        margin-bottom: 8vh;
    }
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

    & > * {
        padding: 15px;
    }

    @media screen and (max-width: 600px) {
        width: 100vw;
        margin: 0;
        padding: 0;
    }
`;

const ModelStyle = styled.div`
    display: flex;
    flex: 3 1 auto;
    align-items: center;
    justify-content: center;
    
    img {
        height: ${props => props.small ? '45' : '55'}vh;
        @media screen and (max-width: 1000px) {
            height: ${props => props.small ? '30' : '50'}vh;
        }
    }
`;

export { Info, DisplayedModel, ModelListStyle, ModelStyle };