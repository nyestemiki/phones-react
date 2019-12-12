import React, { Component } from 'react';
import styled from 'styled-components';

const SpecStyle = styled.div`
    padding: 10px;
    margin-bottom: 1vh;
    font-size: 1rem;


    @media screen and (max-height: 600px) {
        font-size: .5rem;
    }
`;

const Type = styled.div`
    font-weight: bold;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: .45vh;
`;

const Value = styled.div`
    font-weight: 100;
`;

export default class Spec extends Component {
    render() {
        return (
            <SpecStyle>
                <Type>{this.props.spec}</Type>
                <Value>{this.props.value}</Value>
            </SpecStyle>
        )
    }
}
