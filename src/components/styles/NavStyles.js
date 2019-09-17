import styled from "styled-components";

const Nav = styled.div`
    position: absolute;
    z-index: 1000;
    color: rgba(255, 255, 255, 0.75);
    width: 100vw;
    height: 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Logo = styled.div`
    img {
        width: 2vw;
        height: 3vh;
        margin: 10px;
        padding-left: 12.5px;
    }

    img:hover, image:focus {
        filter: drop-shadow(0 0 4px white);
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
        bottom: 15px;
    }
    
    &:hover, &:focus {
        color:white;

        &:after {
            width: 80%;
        }
    }
`;

export default Nav;
export { Logo, Tiles, Tile };