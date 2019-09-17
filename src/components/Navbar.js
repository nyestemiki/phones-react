import React, { Component } from 'react';
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

    & img:hover {
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

    &:hover + &:after {
        display: block;
        width: 100%;
        height: 2px;
        border: 1px solid red;
    }
`;

export default class Navbar extends Component {
    render() {
        return (
            <Nav>
                <Logo>
                    <img src="/imgs/logo.png"/>
                </Logo>
                <Tiles>
                    <Tile>About me</Tile>
                    <Tile>New deals</Tile>
                    <Tile>Cart</Tile>
                    <Tile>Manager</Tile>
                    <Tile>Account</Tile>
                </Tiles>
            </Nav>
        );
    }
}