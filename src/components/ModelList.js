import React, { Component } from 'react';
import Model from './Model';
import styled from 'styled-components';

const ModelStyle = styled.div`
    img {
        height: 200px;
    }
`;

export default class ModelList extends Component {
    render() {
        if (this.props.status) {
            const models = Object
                .keys(this.props.brand.modelList)
                .map(model => 
                    <ModelStyle key={model}>
                        <Model 
                            img={this.props.brand.modelList[model].img} 
                            key={model}
                        />
                    </ModelStyle>
                );
            return models;
        } else {
            return null;
        }
    }
}
