import styled from 'styled-components';

const Button = styled.div`
    background: none;
    border-radius: 10px;
    font-size: 1.25vw;
    cursor: pointer;
    backdrop-filter: blur(50px);
    background-color: rgba(0, 0, 0, .25);
    border-radius: 10px;
    letter-spacing: 1px;
    padding: 10px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    /* text-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
    /* color: black; */
    /* font-weight: 300; */

    &:hover, &:focus {
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        color: white;
    }
`;

export default Button;