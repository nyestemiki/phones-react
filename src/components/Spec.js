import React, { Component } from 'react';
import styled from 'styled-components';

const SpecStyle = styled.div`
    padding: 10px;
`;

const Type = styled.div`
    font-weight: bold;
    text-transform: capitalize;
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
