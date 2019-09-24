import styled from "styled-components";

const Nav = styled.div`
    position: fixed;
    z-index: 1000;
    color: rgba(255, 255, 255, 0.75);
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
        & {
            grid-template-columns: 1fr;
            justify-items: center;
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, .1);
        }
    }
`;

const Logo = styled.div`
    content: url("/imgs/logo.png");
    height: 4vh;
    margin: 10px 30px;
    filter: contrast(500%) grayscale(100%) invert(75%);

    &:hover, &:focus {
        filter: drop-shadow(0 0 4px white);
        background: rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 600px) {
        & {
            margin: 10px 0;
        }
    }
`;

const Tiles = styled.div`
    padding-right: 15px;
    display: flex;
    justify-content: flex-end;
`;

const Tile = styled.div`
    padding: 15px;
    cursor: pointer;
    position: relative;

    &:after {
        display: block;
        width: 0;
        height: 2px;
        background: white;
        content: '';
        position: absolute;
        left: 10%;
        bottom: 10px;
    }
    
    &:hover, &:focus {
        color:white;

        &:after {
            width: 80%;
        }
    }

    /* Special link */
    &:hover > a {
        color: grey;
    }

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.75);
    }

    @media (max-width: 600px) {
        & {
            text-align: center;
        }
    }
`;

export default Nav;
export { Logo, Tiles, Tile };