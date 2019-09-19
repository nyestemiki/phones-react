import React, { Component } from 'react';
import Button from './styles/ButtonStyle';
import styled from 'styled-components';

const BuyButton = styled.div`
    align-self: flex-start;
    justify-self: flex-start;
    margin: 10px;
`;

export default class Buy extends Component {
    render() {
        return (
            <BuyButton>
                <Button>Buy</Button>
            </BuyButton>
        );
    }
}
