import React, { Component } from 'react';
import Nav, { Logo, Tiles, Tile } from './styles/NavStyles';

export default class Navbar extends Component {
    render() {
        return (
            <Nav>
                <Logo onClick={this.props.mainMenu}/>
                <Tiles>
                    <Tile>
                        <a href="http://www.github.com/nyestemiki">About me</a>
                    </Tile>
                    <Tile>New deals</Tile>
                    <Tile>Cart</Tile>
                    <Tile>Manager</Tile>
                    <Tile>Account</Tile>
                </Tiles>
            </Nav>
        );
    }
}