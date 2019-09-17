import React, { Component } from 'react';
import Nav, { Logo, Tiles, Tile } from './styles/NavStyles';

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