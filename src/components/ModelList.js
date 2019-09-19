import React, { Component } from 'react';
import Model from './Model';
import { ModelListStyle } from './styles/BrandStyles';

export default class ModelList extends Component {
    render() {
        if (this.props.status) {
            return (
                <ModelListStyle>
                    {
                        Object
                            .keys(this.props.brand.modelList)
                            .map(model => 
                                <Model 
                                    img={this.props.brand.modelList[model].img} 
                                    key={model}
                                    id={model}
                                />
                            )
                    }
                </ModelListStyle>
            ); 
        } else {
            return null;
        }
    }
}
