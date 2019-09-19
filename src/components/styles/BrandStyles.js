import styled from 'styled-components';

const Info = styled.div`
    flex: 1;
    margin: 50px;
    padding: 25px;

    .model-name {
        letter-spacing: 2px;
        font-size: 20px;
    }

    .button {
        background: none;
        border-radius: 3px;
        font-size: 1.25vw;
        cursor: pointer;
        backdrop-filter: blur(50px);
        background-color: rgba(255, 255, 255, .25);
        border-radius: 10px;
        letter-spacing: 1px;
        float: right;
        margin: 50px 10px 0;
        padding: 10px;

        &:hover, &:focus {
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
            color: white;
        }
    }
`;

const DisplayedModel = styled.div`
    flex: 2;
    height: 100%;
    margin: 30px;
`;

export { Info, DisplayedModel };